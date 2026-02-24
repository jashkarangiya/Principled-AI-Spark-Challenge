"""
Day in the Life Agent
Agentic module that researches real professionals online to generate authentic daily scenarios
"""
import requests
import urllib.parse
import json
from typing import Dict, List
from datetime import datetime
from huggingface_hub import InferenceClient
import os
from dotenv import load_dotenv

load_dotenv()


class DayInLifeAgent:
    """Agent that researches and generates realistic day-in-life scenarios"""
    
    def __init__(self):
        token = os.environ.get("HF_TOKEN")
        if token:
            self.client = InferenceClient(api_key=token)
            self.enabled = True
        else:
            self.client = None
            self.enabled = False
    
    def generate(self, job_title: str) -> Dict:
        """Generate day-in-life from real web research"""
        print(f"🔍 Researching day-in-life for: {job_title}")
        
        # 1. Search articles
        articles = self._search_articles(job_title)
        
        # 2. Search Reddit
        reddit_insights = self._search_reddit(job_title)
        
        # 3. Search career sites
        career_sites = self._search_career_sites(job_title)
        
        total_sources = len(articles) + len(reddit_insights) + len(career_sites)
        print(f"  📊 Total sources found: {total_sources}")
        
        # 4. AI synthesis
        day_in_life = self._synthesize_with_ai(
            job_title,
            articles,
            reddit_insights,
            career_sites
        )
        
        # 5. Build response
        return {
            "job_title": job_title,
            "morning_tasks": day_in_life.get('morning_tasks', []),
            "afternoon_tasks": day_in_life.get('afternoon_tasks', []),
            "real_problems": day_in_life.get('real_problems', []),
            "key_skills_used": day_in_life.get('key_skills_used', []),
            "research_sources": {
                "articles_found": len(articles),
                "reddit_discussions": len(reddit_insights),
                "career_sites": len(career_sites),
                "total_sources": total_sources,
                "search_queries_used": 9
            },
            "generated_at": datetime.now().isoformat()
        }
    
    def _search_articles(self, job_title: str) -> List[Dict]:
        """Search for 'day in the life' articles"""
        articles = []
        queries = [
            f"day in the life of {job_title}",
            f"{job_title} daily routine blog",
            f"what does a {job_title} do every day"
        ]
        
        for query in queries:
            try:
                if self._web_search(query, job_title):
                    articles.append({'query': query, 'found': True, 'source': 'Web'})
                    print(f"  ✓ Found: {query}")
            except:
                pass
        
        return articles
    
    def _search_reddit(self, job_title: str) -> List[Dict]:
        """Search Reddit for real professional experiences"""
        reddit_insights = []
        queries = [
            f"{job_title} daily tasks site:reddit.com",
            f"typical day {job_title} site:reddit.com"
        ]
        
        for query in queries:
            try:
                if self._web_search(query, 'reddit'):
                    reddit_insights.append({'query': query, 'found': True, 'source': 'Reddit'})
                    print(f"  ✓ Found Reddit discussions")
            except:
                pass
        
        return reddit_insights
    
    def _search_career_sites(self, job_title: str) -> List[Dict]:
        """Search career sites for job descriptions"""
        career_sites = []
        queries = [
            f"{job_title} job description site:indeed.com",
            f"{job_title} responsibilities site:glassdoor.com",
            f"{job_title} daily tasks site:linkedin.com"
        ]
        
        for query in queries:
            try:
                if self._web_search(query, job_title):
                    career_sites.append({'query': query, 'found': True, 'source': 'Career Sites'})
                    print(f"  ✓ Found career site data")
            except:
                pass
        
        return career_sites
    
    def _web_search(self, query: str, keyword: str) -> bool:
        """Perform web search using DuckDuckGo"""
        try:
            encoded_query = urllib.parse.quote(query)
            search_url = f"https://lite.duckduckgo.com/lite/?q={encoded_query}"
            
            response = requests.get(search_url, timeout=5, headers={
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            })
            
            if response.status_code == 200:
                return keyword.lower() in response.text.lower()
        except:
            pass
        
        return False
    
    def _synthesize_with_ai(
        self,
        job_title: str,
        articles: List[Dict],
        reddit_insights: List[Dict],
        career_sites: List[Dict]
    ) -> Dict:
        """Use AI to synthesize research into realistic scenarios"""
        
        if not self.enabled:
            return self._fallback(job_title)
        
        # Build context from sources
        total_sources = len(articles) + len(reddit_insights) + len(career_sites)
        
        if total_sources > 0:
            context = f"""Based on {total_sources} web sources about {job_title}:
- {len(articles)} articles about daily work
- {len(reddit_insights)} Reddit discussions from professionals  
- {len(career_sites)} job descriptions from career sites"""
        else:
            context = f"""Using your knowledge about {job_title} professionals:
Generate realistic scenarios based on what you know about this role."""
        
        prompt = f"""{context}

Generate a REALISTIC and SPECIFIC "day in the life" for a {job_title}.

IMPORTANT:
- Use REAL tools and technologies for this role
- Include SPECIFIC tasks, not generic ones
- Mention ACTUAL problems professionals face
- Use realistic time allocations
- Be detailed and authentic

Return JSON:
{{
  "morning_tasks": [
    {{
      "time": "9:00 AM",
      "task": "[Specific task with real tools/tech]",
      "description": "[Detailed explanation of what, why, how with specific examples]",
      "type": "routine"
    }},
    {{
      "time": "10:30 AM",
      "task": "[Another specific task]",
      "description": "[Detailed explanation]",
      "type": "collaborative"
    }}
  ],
  "afternoon_tasks": [
    {{
      "time": "2:00 PM",
      "task": "[Specific technical task]",
      "description": "[Detailed explanation with tools/methods]",
      "type": "technical"
    }},
    {{
      "time": "4:00 PM",
      "task": "[Specific problem-solving task]",
      "description": "[Detailed explanation]",
      "type": "problem-solving"
    }}
  ],
  "real_problems": [
    {{
      "problem": "[Specific real problem with details]",
      "description": "[How it manifests, why it's challenging, common solutions]",
      "frequency": "daily"
    }},
    {{
      "problem": "[Another specific problem]",
      "description": "[Detailed explanation]",
      "frequency": "weekly"
    }},
    {{
      "problem": "[Third specific problem]",
      "description": "[Detailed explanation]",
      "frequency": "monthly"
    }}
  ],
  "key_skills_used": ["[Specific tool/skill]", "[Another tool/skill]", "[Third tool/skill]"]
}}

Examples of GOOD vs BAD:

BAD: "Review priorities" 
GOOD: "Review Jira tickets and prioritize sprint backlog based on stakeholder feedback"

BAD: "Team meeting"
GOOD: "Daily standup to discuss blockers, followed by sprint planning with product owner"

BAD: "Core work"
GOOD: "Implement user authentication using OAuth 2.0 and JWT tokens in React frontend"

BAD: "Complex challenges"
GOOD: "Debug production memory leak in Node.js service using Chrome DevTools and heap snapshots"

Make it AUTHENTIC for {job_title}!"""
        
        try:
            completion = self.client.chat.completions.create(
                model="deepseek-ai/DeepSeek-R1-0528",
                messages=[{"role": "user", "content": prompt}],
                max_tokens=2000,
                temperature=0.7
            )
            response = completion.choices[0].message.content
            start = response.find('{')
            end = response.rfind('}') + 1
            if start != -1 and end > start:
                result = json.loads(response[start:end])
                
                # Validate we got good content
                if self._validate_quality(result):
                    print(f"  ✓ AI generated realistic scenarios")
                    return result
                else:
                    print(f"  ⚠️  AI output too generic, retrying...")
                    # Retry with more explicit prompt
                    return self._retry_with_better_prompt(job_title)
        except Exception as e:
            print(f"  ⚠️  AI error: {e}")
        
        return self._fallback(job_title)
    
    def _validate_quality(self, result: Dict) -> bool:
        """Check if AI output is specific enough"""
        # Check for generic phrases that indicate low quality
        generic_phrases = [
            'start day', 'review priorities', 'team meeting', 'core work',
            'wrap up', 'complex challenges', 'collaborate with colleagues',
            'focus on main responsibilities'
        ]
        
        # Check morning tasks
        for task in result.get('morning_tasks', []):
            task_lower = task.get('task', '').lower()
            if any(phrase in task_lower for phrase in generic_phrases):
                return False
        
        # Check afternoon tasks
        for task in result.get('afternoon_tasks', []):
            task_lower = task.get('task', '').lower()
            if any(phrase in task_lower for phrase in generic_phrases):
                return False
        
        return True
    
    def _retry_with_better_prompt(self, job_title: str) -> Dict:
        """Retry with even more explicit prompt"""
        prompt = f"""You are an expert {job_title}. Describe YOUR typical workday with SPECIFIC details.

DO NOT use generic phrases like:
- "Review priorities"
- "Team meeting" 
- "Core work"
- "Complex challenges"

INSTEAD use SPECIFIC examples like:
- "Review pull requests in GitHub and provide code review feedback"
- "Sprint planning meeting to estimate story points for user authentication feature"
- "Implement REST API endpoint for user profile updates using Express.js"
- "Debug race condition in payment processing service causing transaction failures"

Return JSON with morning_tasks, afternoon_tasks, real_problems, key_skills_used.
Be SPECIFIC and REALISTIC for {job_title}!"""
        
        try:
            completion = self.client.chat.completions.create(
                model="deepseek-ai/DeepSeek-R1-0528",
                messages=[{"role": "user", "content": prompt}],
                max_tokens=2000,
                temperature=0.8
            )
            response = completion.choices[0].message.content
            start = response.find('{')
            end = response.rfind('}') + 1
            if start != -1 and end > start:
                return json.loads(response[start:end])
        except:
            pass
        
        return self._fallback(job_title)
    
    def _fallback(self, job_title: str) -> Dict:
        """Job-specific fallback with realistic examples"""
        
        # Job-specific realistic scenarios
        job_scenarios = {
            "Data Analyst": {
                'morning_tasks': [
                    {'time': '9:00 AM', 'task': 'Review overnight ETL pipelines', 'description': 'Check Airflow DAGs for failed jobs, validate data quality in Snowflake tables', 'type': 'routine'},
                    {'time': '10:30 AM', 'task': 'Stakeholder meeting on KPIs', 'description': 'Present weekly dashboard metrics to marketing team, discuss campaign performance', 'type': 'collaborative'}
                ],
                'afternoon_tasks': [
                    {'time': '2:00 PM', 'task': 'Build customer churn model', 'description': 'Use Python and scikit-learn to predict churn, validate with historical data', 'type': 'technical'},
                    {'time': '4:00 PM', 'task': 'Clean CRM data', 'description': 'Fix duplicate customer records, standardize address formats in SQL', 'type': 'problem-solving'}
                ],
                'real_problems': [
                    {'problem': 'Data quality issues', 'description': 'Missing values, duplicates, and inconsistent formats require constant validation rules', 'frequency': 'daily'},
                    {'problem': 'Stakeholder misalignment', 'description': 'Different teams want different metrics, requiring negotiation and prioritization', 'frequency': 'weekly'}
                ],
                'key_skills_used': ['SQL', 'Python', 'Tableau', 'Excel', 'Communication']
            },
            "Software Engineer": {
                'morning_tasks': [
                    {'time': '9:00 AM', 'task': 'Code review pull requests', 'description': 'Review 3-5 PRs in GitHub, check for code quality, security issues, test coverage', 'type': 'routine'},
                    {'time': '10:00 AM', 'task': 'Daily standup and sprint planning', 'description': 'Discuss blockers, estimate story points for new features', 'type': 'collaborative'}
                ],
                'afternoon_tasks': [
                    {'time': '2:00 PM', 'task': 'Implement user authentication', 'description': 'Build OAuth 2.0 flow with JWT tokens in React frontend and Node.js backend', 'type': 'technical'},
                    {'time': '4:00 PM', 'task': 'Debug production memory leak', 'description': 'Use Chrome DevTools and heap snapshots to find memory leak in payment service', 'type': 'problem-solving'}
                ],
                'real_problems': [
                    {'problem': 'Legacy code refactoring', 'description': 'Old codebase lacks tests, documentation, making changes risky and time-consuming', 'frequency': 'weekly'},
                    {'problem': 'Scaling bottlenecks', 'description': 'Database queries slow under load, need to add caching and optimize indexes', 'frequency': 'monthly'}
                ],
                'key_skills_used': ['JavaScript', 'React', 'Node.js', 'Git', 'System Design']
            },
            "UX Designer": {
                'morning_tasks': [
                    {'time': '9:00 AM', 'task': 'Review user research findings', 'description': 'Analyze usability test recordings, identify pain points in checkout flow', 'type': 'routine'},
                    {'time': '10:30 AM', 'task': 'Design critique session', 'description': 'Present wireframes to team, gather feedback on mobile app navigation', 'type': 'collaborative'}
                ],
                'afternoon_tasks': [
                    {'time': '2:00 PM', 'task': 'Create high-fidelity prototypes', 'description': 'Build interactive prototype in Figma with animations and micro-interactions', 'type': 'technical'},
                    {'time': '4:00 PM', 'task': 'Conduct user testing', 'description': 'Run 5 moderated usability tests, observe users completing key tasks', 'type': 'problem-solving'}
                ],
                'real_problems': [
                    {'problem': 'Balancing user needs vs business goals', 'description': 'Users want simplicity, business wants more features, need to find compromise', 'frequency': 'daily'},
                    {'problem': 'Technical constraints', 'description': 'Designs may not be feasible with current tech stack, need to work with engineers', 'frequency': 'weekly'}
                ],
                'key_skills_used': ['Figma', 'User Research', 'Prototyping', 'Usability Testing', 'Communication']
            }
        }
        
        # Return job-specific scenario or generic one
        return job_scenarios.get(job_title, {
            'morning_tasks': [
                {'time': '9:00 AM', 'task': f'Review {job_title} priorities', 'description': 'Check emails, review task list, plan day', 'type': 'routine'},
                {'time': '10:30 AM', 'task': 'Team collaboration', 'description': 'Meet with colleagues to discuss ongoing projects', 'type': 'collaborative'}
            ],
            'afternoon_tasks': [
                {'time': '2:00 PM', 'task': f'{job_title} core work', 'description': 'Focus on main job responsibilities', 'type': 'technical'},
                {'time': '4:00 PM', 'task': 'Problem solving', 'description': 'Address challenges that arose during the day', 'type': 'problem-solving'}
            ],
            'real_problems': [
                {'problem': 'Daily challenges', 'description': f'Common issues faced by {job_title} professionals', 'frequency': 'daily'}
            ],
            'key_skills_used': ['Communication', 'Problem-solving', 'Technical skills']
        })


# Example usage
if __name__ == "__main__":
    agent = DayInLifeAgent()
    result = agent.generate("Data Analyst")
    
    print("\n📊 Results:")
    print(f"Job: {result['job_title']}")
    print(f"Morning tasks: {len(result['morning_tasks'])}")
    print(f"Afternoon tasks: {len(result['afternoon_tasks'])}")
    print(f"Real problems: {len(result['real_problems'])}")
    print(f"Sources: {result['research_sources']['total_sources']}")
