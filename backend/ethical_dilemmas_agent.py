"""
Ethical Dilemmas Agent
Researches real AI ethics issues and generates profession-specific ethical questions
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


class EthicalDilemmasAgent:
    """Agent that researches AI ethics issues for professions"""

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
        """Generate ethical dilemmas from research"""
        print(f"🔍 Researching AI ethics for: {job_title}")

        # Use Tavily for real-time ethics research
        tavily_results = {}
        if tavily_client.enabled:
            print("  📡 Using Tavily for real-time ethics research...")
            tavily_results = tavily_client.search_ethics(job_title)
            tavily_source_count = tavily_client.get_source_count(tavily_results)
            print(f"  ✓ Tavily found {tavily_source_count} ethics sources")

        # Basic searches as supplementary
        ethics_articles = self._search_ethics_articles(job_title)
        academic_papers = self._search_academic_ethics(job_title)
        news_articles = self._search_ai_controversies(job_title)

        basic_source_count = len(ethics_articles) + len(academic_papers) + len(news_articles)
        tavily_source_count = tavily_client.get_source_count(tavily_results) if tavily_results else 0
        total_sources = basic_source_count + tavily_source_count
        print(f"  📊 Total sources found: {total_sources} ({tavily_source_count} from Tavily)")

        # AI synthesis with real search context
        dilemmas = self._synthesize_with_ai(
            job_title,
            ethics_articles,
            academic_papers,
            news_articles,
            tavily_results
        )

        return {
            "job_title": job_title,
            "ethical_dilemmas": dilemmas,
            "research_sources": {
                "ethics_articles": len(ethics_articles),
                "academic_papers": len(academic_papers),
                "news_articles": len(news_articles),
                "tavily_sources": tavily_source_count,
                "total_sources": total_sources,
                "tavily_enabled": tavily_client.enabled
            },
            "generated_at": datetime.now().isoformat()
        }

    def _search_ethics_articles(self, job_title: str) -> List[Dict]:
        """Search for AI ethics articles"""
        articles = []
        queries = [
            f"AI ethics {job_title}",
            f"artificial intelligence ethical issues {job_title}",
            f"AI bias {job_title}"
        ]

        for query in queries:
            if self._web_search(query, 'ethics'):
                articles.append({'query': query, 'found': True})
                print(f"  ✓ Found ethics articles")

        return articles

    def _search_academic_ethics(self, job_title: str) -> List[Dict]:
        """Search academic papers on AI ethics"""
        papers = []
        try:
            url = "https://api.semanticscholar.org/graph/v1/paper/search"
            params = {
                'query': f"AI ethics {job_title}",
                'limit': 5,
                'fields': 'title,year'
            }
            response = requests.get(url, params=params, timeout=10)
            if response.status_code == 200:
                data = response.json().get('data', [])
                papers = [{'title': p.get('title')} for p in data]
                print(f"  ✓ Found {len(papers)} academic papers")
        except:
            pass

        return papers

    def _search_ai_controversies(self, job_title: str) -> List[Dict]:
        """Search news about AI controversies"""
        news = []
        queries = [
            f"AI controversy {job_title} site:techcrunch.com",
            f"artificial intelligence problems {job_title} site:wired.com"
        ]

        for query in queries:
            if self._web_search(query, 'AI'):
                news.append({'query': query, 'found': True})
                print(f"  ✓ Found AI controversy news")

        return news

    def _web_search(self, query: str, keyword: str) -> bool:
        """Perform web search"""
        try:
            encoded_query = urllib.parse.quote(query)
            search_url = f"https://lite.duckduckgo.com/lite/?q={encoded_query}"

            response = requests.get(search_url, timeout=5, headers={
                'User-Agent': 'Mozilla/5.0'
            })

            return response.status_code == 200 and keyword.lower() in response.text.lower()
        except:
            return False

    def _synthesize_with_ai(
        self,
        job_title: str,
        ethics_articles: List[Dict],
        academic_papers: List[Dict],
        news_articles: List[Dict],
        tavily_results: Dict[str, str] = None
    ) -> List[Dict]:
        """Use AI to generate ethical dilemmas with real search context"""

        if not self.enabled:
            return self._fallback(job_title)

        # Build context from Tavily real-time search
        tavily_context = ""
        if tavily_results:
            tavily_context = tavily_client.format_as_context(tavily_results)

        total = len(ethics_articles) + len(academic_papers) + len(news_articles)

        if tavily_context:
            context = f"""Here is REAL-TIME research data about AI ethics issues for {job_title}:

{tavily_context}

Additionally found {total} other sources (articles, papers, news) about AI ethics in this field.

Use the research data above to generate SPECIFIC, REAL ethical dilemmas based on actual events and issues."""
        else:
            context = f"""Based on research about AI ethics in {job_title}:
Sources: {total} articles, papers, and news stories about AI ethics"""

        prompt = f"""{context}

Generate 3 REAL ethical dilemmas that {job_title} professionals face with AI.

IMPORTANT:
- Use REAL scenarios from the profession
- Include SPECIFIC details and context
- Present as genuine ethical conflicts
- Make them thought-provoking

Return JSON:
{{
  "dilemmas": [
    {{
      "title": "Specific Ethical Issue",
      "question": "Detailed scenario presenting the dilemma with specific context and conflicting values",
      "context": "Why this matters in {job_title}"
    }}
  ]
}}

Examples for Data Analyst:

GOOD:
{{
  "title": "The Biased Dataset",
  "question": "Your model shows certain ZIP codes have higher loan default rates, which correlates with racial demographics. Do you include this feature knowing it could perpetuate discriminatory lending practices, or omit it and reduce model accuracy?",
  "context": "Balancing model performance with fairness"
}}

BAD:
{{
  "title": "Data Ethics",
  "question": "Should you use data ethically?",
  "context": "Ethics are important"
}}

Generate 3 SPECIFIC dilemmas for {job_title}!"""

        try:
            if self.service == "transformers":
                response = self._generate_transformers(prompt, max_tokens=1500)
            elif self.service == "nvidia":
                response = self._generate_nvidia(prompt, max_tokens=1500)
            else:
                completion = self.client.chat.completions.create(
                    model="deepseek-ai/DeepSeek-R1-0528",
                    messages=[{"role": "user", "content": prompt}],
                    max_tokens=1500,
                    temperature=0.7
                )
                response = completion.choices[0].message.content

            start = response.find('{')
            end = response.rfind('}') + 1
            if start != -1 and end > start:
                result = json.loads(response[start:end])
                dilemmas = result.get('dilemmas', [])
                if len(dilemmas) >= 3:
                    print(f"  ✓ AI generated {len(dilemmas)} ethical dilemmas")
                    return dilemmas
        except Exception as e:
            print(f"  ⚠️  AI error: {e}")

        return self._fallback(job_title)

    def _generate_transformers(self, prompt: str, max_tokens: int = 1500) -> str:
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

    def _generate_nvidia(self, prompt: str, max_tokens: int = 1500) -> str:
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

    def _fallback(self, job_title: str) -> List[Dict]:
        """Job-specific ethical dilemmas"""

        dilemmas_map = {
            "Data Analyst": [
                {
                    "title": "The Biased Dataset",
                    "question": "Your model shows certain ZIP codes have higher loan default rates, which correlates with racial demographics. Do you include this feature knowing it could perpetuate discriminatory lending practices, or omit it and reduce model accuracy?",
                    "context": "Balancing model performance with fairness and avoiding discrimination"
                },
                {
                    "title": "Selective Reporting",
                    "question": "Your analysis shows a company initiative is failing, but leadership wants a positive narrative for investors. How do you balance data integrity with organizational pressure?",
                    "context": "Maintaining honesty while navigating corporate politics"
                },
                {
                    "title": "Privacy vs. Insight",
                    "question": "Combining employee badge swipe data with productivity metrics could optimize office space, but also enables surveillance. Where do you draw the line on workplace analytics?",
                    "context": "Balancing business value with employee privacy rights"
                }
            ],
            "Software Engineer": [
                {
                    "title": "The Addictive Algorithm",
                    "question": "Your recommendation algorithm increases user engagement by 40%, but analysis shows it's creating filter bubbles and increasing time spent on the platform beyond healthy levels. Do you optimize for engagement or user wellbeing?",
                    "context": "Business metrics vs. social responsibility"
                },
                {
                    "title": "Security vs. Deadline",
                    "question": "You discovered a security vulnerability that would take 2 weeks to fix properly, but the product launches in 3 days. Leadership says to ship now and patch later. What do you do?",
                    "context": "Technical debt and user safety vs. business pressure"
                },
                {
                    "title": "Open Source Dilemma",
                    "question": "Your company's AI model was trained on open-source code from GitHub. Should you open-source your model in return, or keep it proprietary for competitive advantage?",
                    "context": "Community contribution vs. business interests"
                }
            ],
            "UX Designer": [
                {
                    "title": "Dark Patterns for Growth",
                    "question": "A/B testing shows that making the 'unsubscribe' button harder to find increases retention by 15%. Marketing wants to implement it. Do you prioritize user autonomy or business metrics?",
                    "context": "User respect vs. growth targets"
                },
                {
                    "title": "Accessibility vs. Aesthetics",
                    "question": "Your beautiful minimalist design doesn't meet WCAG accessibility standards for color contrast. Fixing it makes the design less visually striking. What takes priority?",
                    "context": "Inclusive design vs. visual appeal"
                },
                {
                    "title": "Personalization vs. Privacy",
                    "question": "AI-powered personalization requires tracking user behavior across sessions. Users get better experiences but less privacy. How much tracking is too much?",
                    "context": "User experience enhancement vs. data collection"
                }
            ]
        }

        return dilemmas_map.get(job_title, [
            {
                "title": "AI Ethics in Practice",
                "question": f"As a {job_title}, how do you balance the benefits of AI automation with potential negative impacts on workers, privacy, and fairness?",
                "context": "Navigating AI implementation responsibly"
            }
        ])


if __name__ == "__main__":
    agent = EthicalDilemmasAgent()
    result = agent.generate("Data Analyst")

    print("\n📊 Results:")
    print(f"Job: {result['job_title']}")
    print(f"Dilemmas: {len(result['ethical_dilemmas'])}")
    print(f"Tavily enabled: {result['research_sources']['tavily_enabled']}")
    for d in result['ethical_dilemmas']:
        print(f"\n  • {d['title']}")
        print(f"    {d['question'][:100]}...")
