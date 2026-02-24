from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import os
import json
from datetime import datetime
import requests
from dotenv import load_dotenv

# Import agents
from day_in_life_agent import DayInLifeAgent
from ethical_dilemmas_agent import EthicalDilemmasAgent

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
    
    def analyze(self, job_title: str, ai_tools: List[str]) -> dict:
        if not self.enabled:
            return self._fallback(job_title, ai_tools)
        
        prompt = f"""Analyze automation risk for {job_title}.
AI tools: {', '.join(ai_tools) if ai_tools else 'None'}

Return JSON:
{{
  "risk_score": <0-100>,
  "explanation": "<detailed explanation>",
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
cache = {}

# Models
class AutomationRiskRequest(BaseModel):
    job_title: str
    job_description: str = ""

class DayInLifeRequest(BaseModel):
    job_title: str

class EthicalDilemmasRequest(BaseModel):
    job_title: str

# Endpoints
@app.get("/")
def root():
    return {"message": "Career Explorer API", "ai_enabled": ai_client.enabled}

@app.post("/api/calculate-automation-risk")
def calculate_risk(request: AutomationRiskRequest):
    cache_key = f"{request.job_title}:{request.job_description}"
    
    if cache_key in cache:
        return cache[cache_key]
    
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
    
    # AI analysis
    analysis = ai_client.analyze(request.job_title, ai_tools)
    
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
        }
    }
    
    result = {
        "job_title": request.job_title,
        "risk_percentage": analysis['risk_score'],
        "confidence_score": 0.8 if papers else 0.3,
        "explanation": analysis['explanation'],
        "ai_tools_identified": ai_tools,
        "tasks_at_risk": analysis['tasks_at_risk'],
        "tasks_safe": analysis['tasks_safe'],
        "research_sources_count": len(papers),
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

if __name__ == "__main__":
    import uvicorn
    print("✓ AI enabled" if ai_client.enabled else "⚠️  AI disabled (no HF_TOKEN)")
    uvicorn.run(app, host="0.0.0.0", port=8000)
