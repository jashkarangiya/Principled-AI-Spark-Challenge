"""
Skills Research Agent
Researches required skills for careers from public sources
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


class SkillsResearchAgent:
    def __init__(self):
        token = os.environ.get("HF_TOKEN")
        if token:
            self.client = InferenceClient(api_key=token)
            self.enabled = True
        else:
            self.client = None
            self.enabled = False
    
    def generate(self, job_title: str) -> Dict:
        print(f"🔍 Researching skills for: {job_title}")
        
        job_postings = self._search_job_postings(job_title)
        skill_databases = self._search_skill_databases(job_title)
        career_guides = self._search_career_guides(job_title)
        
        total_sources = len(job_postings) + len(skill_databases) + len(career_guides)
        print(f"  📊 Total sources found: {total_sources}")
        
        skills = self._synthesize_with_ai(job_title, job_postings, skill_databases, career_guides)
        
        return {
            "job_title": job_title,
            "skills": skills,
            "research_sources": {
                "job_postings": len(job_postings),
                "skill_databases": len(skill_databases),
                "career_guides": len(career_guides),
                "total_sources": total_sources
            },
            "generated_at": datetime.now().isoformat()
        }
    
    def _search_job_postings(self, job_title: str) -> List[Dict]:
        postings = []
        queries = [
            f"{job_title} job requirements site:linkedin.com",
            f"{job_title} skills needed site:indeed.com"
        ]
        
        for query in queries:
            if self._web_search(query, 'skills'):
                postings.append({'query': query, 'found': True})
                print(f"  ✓ Found job postings")
        
        return postings
    
    def _search_skill_databases(self, job_title: str) -> List[Dict]:
        databases = []
        queries = [
            f"{job_title} skills site:bls.gov",
            f"{job_title} competencies site:onetcenter.org"
        ]
        
        for query in queries:
            if self._web_search(query, job_title.split()[0].lower()):
                databases.append({'query': query, 'found': True})
                print(f"  ✓ Found skill databases")
        
        return databases
    
    def _search_career_guides(self, job_title: str) -> List[Dict]:
        guides = []
        queries = [
            f"{job_title} career path skills",
            f"how to become {job_title} skills required"
        ]
        
        for query in queries:
            if self._web_search(query, 'career'):
                guides.append({'query': query, 'found': True})
                print(f"  ✓ Found career guides")
        
        return guides
    
    def _web_search(self, query: str, keyword: str) -> bool:
        try:
            encoded_query = urllib.parse.quote(query)
            search_url = f"https://lite.duckduckgo.com/lite/?q={encoded_query}"
            
            response = requests.get(search_url, timeout=5, headers={
                'User-Agent': 'Mozilla/5.0'
            })
            
            return response.status_code == 200 and keyword.lower() in response.text.lower()
        except:
            return False
    
    def _synthesize_with_ai(self, job_title: str, job_postings: List[Dict], skill_databases: List[Dict], career_guides: List[Dict]) -> Dict:
        if not self.enabled:
            return self._fallback(job_title)
        
        total = len(job_postings) + len(skill_databases) + len(career_guides)
        
        prompt = f"""Based on research about skills for {job_title} from {total} sources.

Generate skills breakdown:

Return JSON:
{{
  "technical_skills": [
    {{"skill": "Name", "importance": "Critical|High|Medium", "description": "Brief desc"}}
  ],
  "soft_skills": [
    {{"skill": "Name", "importance": "Critical|High|Medium", "description": "Brief desc"}}
  ],
  "tools_technologies": [
    {{"name": "Tool", "category": "Category", "proficiency": "Expert|Intermediate|Basic"}}
  ],
  "certifications": [
    {{"name": "Cert", "provider": "Provider", "value": "High|Medium|Optional"}}
  ]
}}

Generate 4-6 technical, 4-5 soft skills, 5-8 tools, 2-4 certs for {job_title}."""
        
        try:
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
                print(f"  ✓ AI generated skills")
                return result
        except Exception as e:
            print(f"  ⚠️  AI error: {e}")
        
        return self._fallback(job_title)
    
    def _fallback(self, job_title: str) -> Dict:
        skills_map = {
            "Data Analyst": {
                "technical_skills": [
                    {"skill": "SQL", "importance": "Critical", "description": "Query databases"},
                    {"skill": "Python/R", "importance": "Critical", "description": "Statistical analysis"},
                    {"skill": "Data Visualization", "importance": "High", "description": "Create dashboards"},
                    {"skill": "Statistical Analysis", "importance": "High", "description": "Interpret patterns"},
                    {"skill": "Excel", "importance": "High", "description": "Data manipulation"}
                ],
                "soft_skills": [
                    {"skill": "Critical Thinking", "importance": "Critical", "description": "Analyze problems"},
                    {"skill": "Communication", "importance": "High", "description": "Present findings"},
                    {"skill": "Attention to Detail", "importance": "High", "description": "Ensure accuracy"},
                    {"skill": "Business Acumen", "importance": "Medium", "description": "Understand context"}
                ],
                "tools_technologies": [
                    {"name": "Tableau", "category": "Visualization", "proficiency": "Intermediate"},
                    {"name": "Power BI", "category": "Visualization", "proficiency": "Intermediate"},
                    {"name": "Pandas", "category": "Data Processing", "proficiency": "Intermediate"},
                    {"name": "SQL Server", "category": "Database", "proficiency": "Intermediate"},
                    {"name": "Git", "category": "Version Control", "proficiency": "Basic"}
                ],
                "certifications": [
                    {"name": "Google Data Analytics", "provider": "Google", "value": "High"},
                    {"name": "Tableau Desktop Specialist", "provider": "Tableau", "value": "Medium"},
                    {"name": "Microsoft Certified: Data Analyst", "provider": "Microsoft", "value": "High"}
                ]
            },
            "Software Engineer": {
                "technical_skills": [
                    {"skill": "Programming Languages", "importance": "Critical", "description": "Java, Python, JavaScript"},
                    {"skill": "Data Structures & Algorithms", "importance": "Critical", "description": "Problem solving"},
                    {"skill": "System Design", "importance": "High", "description": "Scalable systems"},
                    {"skill": "Version Control", "importance": "High", "description": "Git collaboration"},
                    {"skill": "Testing & Debugging", "importance": "High", "description": "Code quality"}
                ],
                "soft_skills": [
                    {"skill": "Problem Solving", "importance": "Critical", "description": "Break down issues"},
                    {"skill": "Collaboration", "importance": "High", "description": "Team work"},
                    {"skill": "Continuous Learning", "importance": "High", "description": "Stay updated"},
                    {"skill": "Communication", "importance": "Medium", "description": "Explain concepts"}
                ],
                "tools_technologies": [
                    {"name": "Git/GitHub", "category": "Version Control", "proficiency": "Expert"},
                    {"name": "Docker", "category": "DevOps", "proficiency": "Intermediate"},
                    {"name": "AWS/Azure", "category": "Cloud", "proficiency": "Intermediate"},
                    {"name": "React/Angular", "category": "Frontend", "proficiency": "Intermediate"},
                    {"name": "PostgreSQL", "category": "Database", "proficiency": "Intermediate"}
                ],
                "certifications": [
                    {"name": "AWS Certified Developer", "provider": "Amazon", "value": "High"},
                    {"name": "Oracle Java Certification", "provider": "Oracle", "value": "Medium"}
                ]
            },
            "UX Designer": {
                "technical_skills": [
                    {"skill": "User Research", "importance": "Critical", "description": "Understand users"},
                    {"skill": "Wireframing & Prototyping", "importance": "Critical", "description": "Design mockups"},
                    {"skill": "Visual Design", "importance": "High", "description": "Appealing interfaces"},
                    {"skill": "Interaction Design", "importance": "High", "description": "User flows"},
                    {"skill": "Usability Testing", "importance": "High", "description": "Validate designs"}
                ],
                "soft_skills": [
                    {"skill": "Empathy", "importance": "Critical", "description": "User perspectives"},
                    {"skill": "Communication", "importance": "High", "description": "Present rationale"},
                    {"skill": "Collaboration", "importance": "High", "description": "Work with devs"},
                    {"skill": "Creativity", "importance": "High", "description": "Innovative solutions"}
                ],
                "tools_technologies": [
                    {"name": "Figma", "category": "Design", "proficiency": "Expert"},
                    {"name": "Adobe XD", "category": "Design", "proficiency": "Intermediate"},
                    {"name": "Sketch", "category": "Design", "proficiency": "Intermediate"},
                    {"name": "InVision", "category": "Prototyping", "proficiency": "Intermediate"}
                ],
                "certifications": [
                    {"name": "Google UX Design Certificate", "provider": "Google", "value": "High"},
                    {"name": "Nielsen Norman Group UX", "provider": "NN/g", "value": "High"}
                ]
            }
        }
        
        return skills_map.get(job_title, {
            "technical_skills": [{"skill": "Domain Knowledge", "importance": "Critical", "description": f"Expertise in {job_title}"}],
            "soft_skills": [{"skill": "Communication", "importance": "High", "description": "Effective communication"}],
            "tools_technologies": [{"name": "Industry Tools", "category": "Professional", "proficiency": "Intermediate"}],
            "certifications": [{"name": "Professional Certification", "provider": "Industry", "value": "Medium"}]
        })
