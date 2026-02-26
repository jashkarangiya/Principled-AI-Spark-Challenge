"""
Day in the Life Agent
Agentic module that researches real professionals online to generate authentic daily scenarios
Uses Tavily for real-time web search context
"""
import requests
import urllib.parse
import json
from typing import Dict, List
from datetime import datetime
import os
from dotenv import load_dotenv
from tavily_search import tavily_client

load_dotenv()


class DayInLifeAgent:
    """Agent that researches and generates realistic day-in-life scenarios"""

    def __init__(self):
        self.service = os.environ.get("AI_SERVICE", "huggingface_api")

        if self.service == "transformers":
            self._init_transformers()
        elif self.service == "nvidia":
            self._init_nvidia()
        else:
            self._init_huggingface_api()

    def _init_transformers(self):
        try:
            from transformers import AutoTokenizer, AutoModelForCausalLM
            import torch

            model_name = os.environ.get("MODEL_NAME", "meta-llama/Llama-3.2-3B-Instruct")
            self.tokenizer = AutoTokenizer.from_pretrained(model_name)
            self.model = AutoModelForCausalLM.from_pretrained(
                model_name,
                torch_dtype=torch.float16 if torch.cuda.is_available() else torch.float32,
                device_map="auto" if torch.cuda.is_available() else None
            )
            self.enabled = True
        except:
            self.enabled = False

    def _init_nvidia(self):
        token = os.environ.get("NVIDIA_API_KEY")
        if token:
            self.nvidia_token = token
            self.nvidia_model = os.environ.get("NVIDIA_MODEL", "mistralai/mistral-medium-3-instruct")
            self.enabled = True
        else:
            self.enabled = False

    def _init_huggingface_api(self):
        from huggingface_hub import InferenceClient

        token = os.environ.get("HF_TOKEN")
        if token:
            self.client = InferenceClient(api_key=token)
            self.enabled = True
        else:
            self.client = None
            self.enabled = False

    def generate(self, job_title: str) -> Dict:
        """Generate 5 bullet points about what you may do in this career"""
        print(f"🔍 Researching career activities for: {job_title}")

        # Use Tavily for real-time search if available
        tavily_results = {}
        if tavily_client.enabled:
            print("  📡 Using Tavily for real-time search...")
            tavily_results = tavily_client.search_career_day_in_life(job_title)
            tavily_source_count = tavily_client.get_source_count(tavily_results)
            print(f"  ✓ Tavily found {tavily_source_count} sources")

        # Also run basic searches as supplementary sources
        articles = self._search_articles(job_title)
        reddit_insights = self._search_reddit(job_title)
        career_sites = self._search_career_sites(job_title)

        basic_source_count = len(articles) + len(reddit_insights) + len(career_sites)
        tavily_source_count = tavily_client.get_source_count(tavily_results) if tavily_results else 0
        total_sources = basic_source_count + tavily_source_count
        print(f"  📊 Total sources found: {total_sources} ({tavily_source_count} from Tavily)")

        # AI synthesis with real search context
        bullet_points = self._synthesize_with_ai(
            job_title,
            articles,
            reddit_insights,
            career_sites,
            tavily_results
        )

        return {
            "job_title": job_title,
            "activities": bullet_points.get('activities', []),
            "research_sources": {
                "articles_found": len(articles),
                "reddit_discussions": len(reddit_insights),
                "career_sites": len(career_sites),
                "tavily_sources": tavily_source_count,
                "total_sources": total_sources,
                "tavily_enabled": tavily_client.enabled,
                "search_queries_used": 9 + (3 if tavily_client.enabled else 0)
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
        """Perform web search using DuckDuckGo as fallback"""
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
        career_sites: List[Dict],
        tavily_results: Dict[str, str] = None
    ) -> Dict:
        """Use AI to synthesize research into realistic scenarios"""

        if not self.enabled:
            return self._fallback(job_title)

        # Build context from Tavily real-time search results
        tavily_context = ""
        if tavily_results:
            tavily_context = tavily_client.format_as_context(tavily_results)

        total_sources = len(articles) + len(reddit_insights) + len(career_sites)

        if tavily_context:
            context = f"""Here is REAL-TIME research data about what {job_title} professionals do daily:

{tavily_context}

Additionally, {total_sources} other web sources were found about {job_title} daily work:
- {len(articles)} articles about daily work
- {len(reddit_insights)} Reddit discussions from professionals
- {len(career_sites)} job descriptions from career sites

Use the research data above to generate ACCURATE, SPECIFIC scenarios."""
        elif total_sources > 0:
            context = f"""Based on {total_sources} web sources about {job_title}:
- {len(articles)} articles about daily work
- {len(reddit_insights)} Reddit discussions from professionals
- {len(career_sites)} job descriptions from career sites"""
        else:
            context = f"""Using your knowledge about {job_title} professionals:
Generate realistic scenarios based on what you know about this role."""

        prompt = f"""{context}

Generate exactly 5 SPECIFIC bullet points describing what a {job_title} may do in this career.

IMPORTANT:
- Use REAL tools and technologies for this role
- Include SPECIFIC activities, not generic ones
- Be detailed and authentic
- Each point should be a complete sentence

Return JSON:
{{
  "activities": [
    "[Specific activity with real tools/tech and details]",
    "[Another specific activity with details]",
    "[Third specific activity with details]",
    "[Fourth specific activity with details]",
    "[Fifth specific activity with details]"
  ]
}}

Examples of GOOD vs BAD:

BAD: "Analyze data"
GOOD: "Analyze customer behavior data using SQL and Python to identify trends and create dashboards in Tableau"

BAD: "Write code"
GOOD: "Develop and maintain web applications using React, Node.js, and PostgreSQL while following agile methodologies"

BAD: "Meet with clients"
GOOD: "Conduct user research interviews and usability testing sessions to gather feedback and improve product design"

Make it AUTHENTIC and SPECIFIC for {job_title}!"""

        try:
            if self.service == "transformers":
                response = self._generate_transformers(prompt, max_tokens=2000)
            elif self.service == "nvidia":
                response = self._generate_nvidia(prompt, max_tokens=2000)
            else:
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

                print(f"  ✓ AI generated {len(result.get('activities', []))} activity points")
                return result
        except Exception as e:
            print(f"  ⚠️  AI error: {e}")

        return self._fallback(job_title)



    def _generate_transformers(self, prompt: str, max_tokens: int = 2000) -> str:
        inputs = self.tokenizer(prompt, return_tensors="pt")
        if hasattr(self.model, 'device'):
            inputs = {k: v.to(self.model.device) for k, v in inputs.items()}

        outputs = self.model.generate(
            **inputs,
            max_new_tokens=max_tokens,
            temperature=0.7,
            do_sample=True
        )
        return self.tokenizer.decode(outputs[0], skip_special_tokens=True)

    def _generate_nvidia(self, prompt: str, max_tokens: int = 2000) -> str:
        headers = {
            "Authorization": f"Bearer {self.nvidia_token}",
            "Accept": "application/json"
        }
        payload = {
            "model": self.nvidia_model,
            "messages": [{"role": "user", "content": prompt}],
            "max_tokens": max_tokens,
            "temperature": 0.7,
            "stream": False
        }
        response = requests.post("https://integrate.api.nvidia.com/v1/chat/completions",
                                headers=headers, json=payload)
        return response.json()["choices"][0]["message"]["content"]

    def _fallback(self, job_title: str) -> Dict:
        """Job-specific fallback with 5 bullet points"""
        job_activities = {
            "Data Analyst": {
                'activities': [
                    "Analyze customer behavior data using SQL and Python to identify trends and create interactive dashboards in Tableau",
                    "Build and maintain ETL pipelines using tools like Airflow to ensure data quality and reliability across systems",
                    "Collaborate with stakeholders to define KPIs and present insights that drive business decisions",
                    "Develop predictive models using machine learning libraries like scikit-learn to forecast customer churn and revenue",
                    "Clean and validate data from multiple sources, fixing inconsistencies and ensuring accuracy for reporting"
                ]
            },
            "Software Engineer": {
                'activities': [
                    "Design and develop web applications using modern frameworks like React, Node.js, and PostgreSQL",
                    "Review code from team members, ensuring quality, security, and adherence to best practices",
                    "Debug production issues using monitoring tools and logs, implementing fixes to maintain system reliability",
                    "Participate in agile ceremonies including daily standups, sprint planning, and retrospectives",
                    "Write automated tests and documentation to ensure code maintainability and facilitate team collaboration"
                ]
            },
            "UX Designer": {
                'activities': [
                    "Conduct user research through interviews, surveys, and usability testing to understand user needs and pain points",
                    "Create wireframes, prototypes, and high-fidelity designs using tools like Figma and Adobe XD",
                    "Collaborate with product managers and engineers to ensure designs are feasible and aligned with business goals",
                    "Analyze user behavior data and feedback to iterate on designs and improve user experience",
                    "Develop and maintain design systems to ensure consistency across products and streamline the design process"
                ]
            }
        }

        return job_activities.get(job_title, {
            'activities': [
                f"Perform core responsibilities specific to {job_title} using industry-standard tools and methodologies",
                f"Collaborate with team members and stakeholders to achieve project goals and deliverables",
                f"Analyze problems and develop solutions that align with organizational objectives",
                f"Stay current with industry trends and best practices relevant to {job_title}",
                f"Communicate findings and recommendations to various audiences through reports and presentations"
            ]
        })


# Example usage
if __name__ == "__main__":
    agent = DayInLifeAgent()
    result = agent.generate("Data Analyst")

    print("\n📊 Results:")
    print(f"Job: {result['job_title']}")
    print(f"Activities: {len(result['activities'])}")
    for i, activity in enumerate(result['activities'], 1):
        print(f"  {i}. {activity}")
    print(f"Sources: {result['research_sources']['total_sources']}")
    print(f"Tavily enabled: {result['research_sources']['tavily_enabled']}")
