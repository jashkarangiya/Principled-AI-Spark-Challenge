from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from fastapi import Depends
from sqlmodel import Session, select
from models import Career, Section, Card
from db import get_session
import os
import json
from datetime import datetime
import requests
from dotenv import load_dotenv

# Import agents and Tavily search
from day_in_life_agent import DayInLifeAgent
from ethical_dilemmas_agent import EthicalDilemmasAgent
from skills_research_agent import SkillsResearchAgent
from tavily_search import tavily_client

load_dotenv()

app = FastAPI(title="Career Explorer API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# AI Client
class AIClient:
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
            print(f"Loading model: {model_name}")

            self.tokenizer = AutoTokenizer.from_pretrained(model_name)
            self.model = AutoModelForCausalLM.from_pretrained(
                model_name,
                torch_dtype=torch.float16 if torch.cuda.is_available() else torch.float32,
                device_map="auto" if torch.cuda.is_available() else None
            )
            self.enabled = True
            print(f"✓ Transformers service enabled with {model_name}")
        except Exception as e:
            print(f"⚠️  Transformers init failed: {e}")
            self.enabled = False

    def _init_nvidia(self):
        token = os.environ.get("NVIDIA_API_KEY")
        if token:
            self.nvidia_token = token
            self.nvidia_model = os.environ.get("NVIDIA_MODEL", "mistralai/mistral-medium-3-instruct")
            self.enabled = True
            print(f"✓ NVIDIA API service enabled with {self.nvidia_model}")
        else:
            self.enabled = False
            print("⚠️  NVIDIA API disabled (no NVIDIA_API_KEY)")

    def _init_huggingface_api(self):
        from huggingface_hub import InferenceClient

        token = os.environ.get("HF_TOKEN")
        if token:
            self.client = InferenceClient(api_key=token)
            self.enabled = True
            print("✓ HuggingFace API service enabled")
        else:
            self.client = None
            self.enabled = False
            print("⚠️  HuggingFace API disabled (no HF_TOKEN)")

    def analyze(self, job_title: str, ai_tools: List[str], search_context: str = "") -> dict:
        if not self.enabled:
            return self._fallback(job_title, ai_tools)

        # Build prompt with real-time search context if available
        context_section = ""
        if search_context:
            context_section = f"""Here is REAL-TIME research data about AI automation for {job_title}:

{search_context}

Use this research data to provide an ACCURATE, DATA-DRIVEN analysis."""

        prompt = f"""{context_section}

Analyze automation risk for {job_title}.
AI tools currently used: {', '.join(ai_tools) if ai_tools else 'None identified'}

Return JSON:
{{
  "risk_score": <0-100>,
  "explanation": "<detailed explanation based on research data>",
  "tasks_at_risk": ["task1", "task2"],
  "tasks_safe": ["task1", "task2"]
}}"""

        try:
            if self.service == "transformers":
                response = self._generate_transformers(prompt, max_tokens=800)
            elif self.service == "nvidia":
                response = self._generate_nvidia(prompt, max_tokens=800)
            else:
                completion = self.client.chat.completions.create(
                    model="deepseek-ai/DeepSeek-R1-0528",
                    messages=[{"role": "user", "content": prompt}],
                    max_tokens=800
                )
                response = completion.choices[0].message.content

            start = response.find('{')
            end = response.rfind('}') + 1
            if start != -1 and end > start:
                return json.loads(response[start:end])
        except:
            pass

        return self._fallback(job_title, ai_tools)

    def _generate_transformers(self, prompt: str, max_tokens: int = 800) -> str:
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

    def _generate_nvidia(self, prompt: str, max_tokens: int = 800) -> str:
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

    def _fallback(self, job_title: str, ai_tools: List[str]) -> dict:
        risk = 30 + min(len(ai_tools) * 5, 30)
        return {
            'risk_score': min(risk, 100),
            'explanation': f"Based on {len(ai_tools)} AI tools available for {job_title}.",
            'tasks_at_risk': ["Routine tasks", "Data processing"],
            'tasks_safe': ["Strategic work", "Communication"]
        }

ai_client = AIClient()
day_in_life_agent = DayInLifeAgent()
ethical_dilemmas_agent = EthicalDilemmasAgent()
skills_research_agent = SkillsResearchAgent()
cache = {}

# Models
class AutomationRiskRequest(BaseModel):
    job_title: str
    job_description: str = ""

class DayInLifeRequest(BaseModel):
    job_title: str

class EthicalDilemmasRequest(BaseModel):
    job_title: str

class SkillsResearchRequest(BaseModel):
    job_title: str

# Endpoints
@app.get("/")
def root():
    return {
        "message": "Career Explorer API",
        "ai_enabled": ai_client.enabled,
        "tavily_enabled": tavily_client.enabled
    }

@app.get("/api/cards")
def get_cards(career_slug: str, section_slug: str, session: Session = Depends(get_session)):
    """Fetch cards for a specific career and section"""
    # 1. Find Career
    career = session.exec(select(Career).where(Career.slug == career_slug)).first()
    if not career:
        raise HTTPException(status_code=404, detail="Career not found")
        
    # 2. Find Section
    section = session.exec(select(Section).where(Section.slug == section_slug)).first()
    if not section:
        raise HTTPException(status_code=404, detail="Section not found")
        
    # 3. Get Cards
    cards = session.exec(
        select(Card)
        .where(Card.career_id == career.id)
        .where(Card.section_id == section.id)
        .where(Card.is_active == True)
        .order_by(Card.sort_order)
    ).all()
    
    return cards

@app.post("/api/calculate-automation-risk")
def calculate_risk(request: AutomationRiskRequest):
    cache_key = f"{request.job_title}:{request.job_description}"

    if cache_key in cache:
        return cache[cache_key]

    # Use Tavily for real-time automation risk research
    tavily_results = {}
    tavily_context = ""
    tavily_source_count = 0
    if tavily_client.enabled:
        print(f"📡 Using Tavily for automation risk research: {request.job_title}")
        tavily_results = tavily_client.search_automation_risk(request.job_title)
        tavily_source_count = tavily_client.get_source_count(tavily_results)
        tavily_context = tavily_client.format_as_context(tavily_results)
        print(f"  ✓ Tavily found {tavily_source_count} automation risk sources")

    # Search papers
    papers = []
    try:
        url = "https://api.semanticscholar.org/graph/v1/paper/search"
        params = {
            'query': f"AI automation {request.job_title}",
            'limit': 10,
            'fields': 'title,year'
        }
        response = requests.get(url, params=params, timeout=10)
        if response.status_code == 200:
            papers = response.json().get('data', [])
    except:
        pass

    # Identify AI tools
    tool_map = {
        "Data Analyst": ["ChatGPT", "Tableau AI", "Power BI AI"],
        "Software Engineer": ["GitHub Copilot", "Tabnine", "Amazon CodeWhisperer"],
        "UX Designer": ["Figma AI", "Midjourney", "Adobe Firefly"],
        "Registered Nurse": [],
        "K-12 Teacher": [],
        "Marketing Manager": ["Jasper", "Copy.ai", "HubSpot AI"],
    }
    ai_tools = tool_map.get(request.job_title, [])

    # AI analysis with Tavily search context
    analysis = ai_client.analyze(request.job_title, ai_tools, search_context=tavily_context)

    # Calculate transparency breakdown
    breakdown = {
        "research_papers": {
            "count": len(papers),
            "contribution": min(len(papers) * 3, 30),
            "description": "Academic research on AI automation"
        },
        "ai_tools": {
            "count": len(ai_tools),
            "tools": ai_tools,
            "contribution": min(len(ai_tools) * 5, 30),
            "description": "AI tools available for this role"
        },
        "ai_analysis": {
            "enabled": ai_client.enabled,
            "model": os.environ.get("MODEL_NAME", "DeepSeek-R1") if ai_client.service == "transformers" else "DeepSeek-R1",
            "service": ai_client.service,
            "contribution": 40,
            "description": "AI-powered task analysis"
        },
        "real_time_search": {
            "enabled": tavily_client.enabled,
            "source_count": tavily_source_count,
            "contribution": min(tavily_source_count * 3, 20),
            "description": "Real-time web search via Tavily for current AI automation data"
        }
    }

    total_sources = len(papers) + tavily_source_count

    result = {
        "job_title": request.job_title,
        "risk_percentage": analysis['risk_score'],
        "confidence_score": 0.9 if (papers and tavily_source_count > 0) else 0.8 if papers else 0.5 if tavily_source_count > 0 else 0.3,
        "explanation": analysis['explanation'],
        "ai_tools_identified": ai_tools,
        "tasks_at_risk": analysis['tasks_at_risk'],
        "tasks_safe": analysis['tasks_safe'],
        "research_sources_count": total_sources,
        "tavily_enabled": tavily_client.enabled,
        "calculation_breakdown": breakdown,
        "calculated_at": datetime.now().isoformat()
    }

    cache[cache_key] = result
    return result

@app.post("/api/generate-day-in-life")
def generate_day_in_life(request: DayInLifeRequest):
    """Generate realistic day-in-life scenarios from online research"""
    cache_key = f"day_in_life:{request.job_title}"

    if cache_key in cache:
        return cache[cache_key]

    result = day_in_life_agent.generate(request.job_title)
    cache[cache_key] = result
    return result

@app.post("/api/generate-ethical-dilemmas")
def generate_ethical_dilemmas(request: EthicalDilemmasRequest):
    """Generate AI ethics dilemmas from research"""
    cache_key = f"ethical_dilemmas:{request.job_title}"

    if cache_key in cache:
        return cache[cache_key]

    result = ethical_dilemmas_agent.generate(request.job_title)
    cache[cache_key] = result
    return result

@app.post("/api/research-skills")
def research_skills(request: SkillsResearchRequest):
    """Research required skills from public sources"""
    cache_key = f"skills:{request.job_title}"

    if cache_key in cache:
        return cache[cache_key]

    result = skills_research_agent.generate(request.job_title)
    cache[cache_key] = result
    return result

if __name__ == "__main__":
    import uvicorn
    print("✓ AI enabled" if ai_client.enabled else "⚠️  AI disabled (no HF_TOKEN)")
    print("✓ Tavily search enabled" if tavily_client.enabled else "⚠️  Tavily search disabled (no TAVILY_API_KEY)")
    uvicorn.run(app, host="0.0.0.0", port=8000)
