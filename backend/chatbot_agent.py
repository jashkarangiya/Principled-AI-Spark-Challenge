import os
from openai import OpenAI
from tavily import TavilyClient

class ChatbotAgent:
    def __init__(self):
        self.client = OpenAI(
            base_url="https://integrate.api.nvidia.com/v1",
            api_key=os.getenv("NVIDIA_API_KEY")
        )
        self.tavily = TavilyClient(api_key=os.getenv("TAVILY_API_KEY"))
        self.memory = []
        
    def search_careers(self, session, query: str):
        """Search careers in database by name, field, or keywords"""
        from sqlmodel import select, or_
        from models import Career
        
        # Extract keywords
        keywords = ['data', 'math', 'science', 'tech', 'business', 'health', 'nurse', 'teach', 'engineer', 'design', 'market', 'social', 'cyber', 'environment', 'journal', 'physician', 'software', 'analyst', 'financial']
        query_lower = query.lower()
        
        # Find matching careers
        all_careers = session.exec(select(Career)).all()
        matches = []
        
        for career in all_careers:
            score = 0
            career_text = f"{career.name} {career.field}".lower()
            
            # Direct match
            if query_lower in career_text:
                score += 10
            
            # Keyword match
            for keyword in keywords:
                if keyword in query_lower and keyword in career_text:
                    score += 5
            
            if score > 0:
                matches.append((score, career))
        
        # Sort by score and return top matches
        matches.sort(reverse=True, key=lambda x: x[0])
        return [career for _, career in matches[:5]]
    
    def search_cards(self, session, query: str):
        """Search resource cards by title or description"""
        from sqlmodel import select, or_
        from models import Card
        
        stmt = select(Card).where(
            or_(
                Card.title.ilike(f"%{query}%"),
                Card.description.ilike(f"%{query}%")
            )
        ).limit(5)
        return session.exec(stmt).all()
    
    def web_search(self, query: str):
        """Search web using Tavily"""
        try:
            results = self.tavily.search(query, max_results=3)
            return results.get('results', [])
        except:
            return []
    
    def compact_memory(self):
        """Compact memory to last 10 messages"""
        if len(self.memory) > 10:
            summary_prompt = f"Summarize this conversation history in 2-3 sentences:\n{self.memory[:5]}"
            summary = self.client.chat.completions.create(
                model="mistralai/mistral-medium-3-instruct",
                messages=[{"role": "user", "content": summary_prompt}],
                max_tokens=150
            )
            self.memory = [{"role": "system", "content": f"Previous context: {summary.choices[0].message.content}"}] + self.memory[-5:]
    
    def chat(self, session, user_message: str):
        """Process user message and return structured response"""
        # Add to memory
        self.memory.append({"role": "user", "content": user_message})
        self.compact_memory()
        
        # Search database
        careers = self.search_careers(session, user_message)
        cards = self.search_cards(session, user_message)
        
        # Build context - ONLY mention ASU careers from database
        context = f"""You are a career guidance chatbot for ASU students. You can ONLY recommend careers and resources available at ASU.

ASU Careers Available (from our database):
{[{"name": c.name, "field": c.field, "salary": c.salary_median, "growth": c.growth_rate} for c in careers[:5]]}

ASU Resources Available:
{[{"title": r.title, "description": r.description, "tag": r.tag} for r in cards[:5]]}

User question: {user_message}

IMPORTANT RULES:
- If careers match, say "I found these ASU career paths for you" and mention them by name
- If no careers match, say "I couldn't find exact matches in our ASU career database, but you might explore: [suggest related ASU careers from the list]"
- Keep response under 100 words
- Be conversational and helpful
- NEVER mention careers not in the ASU database above"""

        # Generate response
        messages = [{"role": "system", "content": context}] + self.memory[-3:]
        
        response = self.client.chat.completions.create(
            model="mistralai/mistral-medium-3-instruct",
            messages=messages,
            max_tokens=200,
            temperature=0.7
        )
        
        assistant_message = response.choices[0].message.content
        self.memory.append({"role": "assistant", "content": assistant_message})
        
        return {
            "message": assistant_message,
            "careers": [{"name": c.name, "slug": c.slug, "field": c.field, "image_url": c.image_url, "salary_median": c.salary_median, "growth_rate": c.growth_rate} for c in careers[:3]],
            "resources": [{"title": r.title, "description": r.description, "tag": r.tag, "link_url": r.link_url} for r in cards[:3]]
        }

chatbot = ChatbotAgent()
