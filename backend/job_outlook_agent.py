"""
Job Outlook Agent
Researches job growth percentage and annual openings for careers
"""
import json
import os
from typing import Dict
from dotenv import load_dotenv
from tavily_search import tavily_client

load_dotenv()


class JobOutlookAgent:
    """Agent that researches job growth and openings"""

    def __init__(self):
        self.service = os.environ.get("AI_SERVICE", "huggingface_api")
        if self.service == "nvidia":
            self._init_nvidia()
        else:
            self._init_huggingface_api()

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
            self.enabled = False

    def research(self, job_title: str) -> Dict:
        """Research job growth and annual openings"""
        print(f"🔍 Researching job outlook for: {job_title}")

        # Use Tavily for real-time search
        tavily_results = {}
        if tavily_client.enabled:
            print("  📡 Using Tavily for job outlook data...")
            search_query = f"{job_title} job growth rate annual openings BLS statistics"
            tavily_results = tavily_client.client.search(search_query, max_results=5)
            print(f"  ✓ Found {len(tavily_results.get('results', []))} sources")

        # AI synthesis
        outlook_data = self._synthesize_with_ai(job_title, tavily_results)

        return {
            "job_title": job_title,
            "growth_rate": outlook_data.get("growth_rate", "N/A"),
            "annual_openings": outlook_data.get("annual_openings", "N/A"),
            "sources_found": len(tavily_results.get('results', [])) if tavily_results else 0
        }

    def _synthesize_with_ai(self, job_title: str, tavily_results: Dict) -> Dict:
        """Use AI to extract growth rate and openings from research"""
        if not self.enabled:
            return self._fallback(job_title)

        # Build context from Tavily
        context = ""
        if tavily_results and tavily_results.get('results'):
            context = "Real-time job outlook data:\n\n"
            for result in tavily_results['results'][:5]:
                context += f"- {result.get('content', '')}\n"
        else:
            context = f"Research job outlook for {job_title}."

        prompt = f"""{context}

Extract the 10-year job growth rate and annual job openings for {job_title}.

Return JSON:
{{
  "growth_rate": "[percentage like '15%' or 'Much faster than average']",
  "annual_openings": "[number like '50,000' or '50K']"
}}

If exact numbers aren't available, provide reasonable estimates based on similar roles.
Be concise - just the numbers/percentages."""

        try:
            if self.service == "nvidia":
                response = self._generate_nvidia(prompt)
            else:
                completion = self.client.chat.completions.create(
                    model="deepseek-ai/DeepSeek-R1-0528",
                    messages=[{"role": "user", "content": prompt}],
                    max_tokens=200,
                    temperature=0.3
                )
                response = completion.choices[0].message.content

            start = response.find('{')
            end = response.rfind('}') + 1
            if start != -1 and end > start:
                result = json.loads(response[start:end])
                print(f"  ✓ Found: {result.get('growth_rate')}, {result.get('annual_openings')} openings")
                return result
        except Exception as e:
            print(f"  ⚠️  AI error: {e}")

        return self._fallback(job_title)

    def _generate_nvidia(self, prompt: str) -> str:
        import requests
        headers = {
            "Authorization": f"Bearer {self.nvidia_token}",
            "Accept": "application/json"
        }
        payload = {
            "model": self.nvidia_model,
            "messages": [{"role": "user", "content": prompt}],
            "max_tokens": 200,
            "temperature": 0.3,
            "stream": False
        }
        response = requests.post("https://integrate.api.nvidia.com/v1/chat/completions",
                                headers=headers, json=payload)
        return response.json()["choices"][0]["message"]["content"]

    def _fallback(self, job_title: str) -> Dict:
        """Fallback estimates"""
        fallbacks = {
            "Data Analyst": {"growth_rate": "23%", "annual_openings": "40,500"},
            "Software Engineer": {"growth_rate": "25%", "annual_openings": "162,900"},
            "UX Designer": {"growth_rate": "16%", "annual_openings": "24,800"}
        }
        return fallbacks.get(job_title, {"growth_rate": "10%", "annual_openings": "10,000"})


if __name__ == "__main__":
    agent = JobOutlookAgent()
    result = agent.research("Data Analyst")
    print(f"\n📊 Growth: {result['growth_rate']}, Openings: {result['annual_openings']}")
