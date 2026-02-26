"""
Tavily Search Client
Provides real-time web search context for AI agents to generate relevant responses
"""
import os
from typing import List, Dict, Optional
from dotenv import load_dotenv

load_dotenv()


class TavilySearchClient:
    def __init__(self):
        api_key = os.environ.get("TAVILY_API_KEY")
        if api_key:
            try:
                from tavily import TavilyClient
                self.client = TavilyClient(api_key=api_key)
                self.enabled = True
                print("✓ Tavily search enabled")
            except ImportError:
                self.client = None
                self.enabled = False
                print("⚠️  tavily-python not installed, search disabled")
        else:
            self.client = None
            self.enabled = False
            print("⚠️  Tavily search disabled (no TAVILY_API_KEY)")

    def search(self, query: str, max_results: int = 5, search_depth: str = "advanced",
               include_domains: Optional[List[str]] = None) -> List[Dict]:
        """Search and return relevant results"""
        if not self.enabled:
            return []

        try:
            kwargs = {
                "query": query,
                "max_results": max_results,
                "search_depth": search_depth,
            }
            if include_domains:
                kwargs["include_domains"] = include_domains

            response = self.client.search(**kwargs)
            return response.get('results', [])
        except Exception as e:
            print(f"Tavily search error: {e}")
            return []

    def get_context(self, query: str, max_results: int = 5) -> str:
        """Get formatted context string from search results"""
        results = self.search(query, max_results)
        if not results:
            return ""

        context_parts = []
        for i, result in enumerate(results, 1):
            title = result.get('title', 'No title')
            content = result.get('content', '')
            url = result.get('url', '')
            context_parts.append(f"[{i}] {title}\n{content}\nSource: {url}")

        return "\n\n".join(context_parts)

    def search_career_day_in_life(self, job_title: str) -> Dict[str, str]:
        """Search for day-in-life content for a specific career"""
        queries = {
            "articles": f"day in the life of a {job_title} typical workday routine",
            "reddit": f"{job_title} typical day what do you do daily routine",
            "job_sites": f"{job_title} job description daily responsibilities tasks",
        }

        results = {}
        for category, query in queries.items():
            search_results = self.search(query, max_results=3)
            if search_results:
                parts = []
                for r in search_results:
                    content = r.get('content', '')
                    if content:
                        parts.append(f"- {r.get('title', '')}: {content}")
                results[category] = "\n".join(parts)

        return results

    def search_ethics(self, job_title: str) -> Dict[str, str]:
        """Search for AI ethics content related to a career"""
        queries = {
            "ethics_articles": f"AI ethics issues {job_title} dilemmas challenges",
            "controversies": f"artificial intelligence controversy {job_title} bias fairness",
            "case_studies": f"AI ethical case study {job_title} real world example",
        }

        results = {}
        for category, query in queries.items():
            search_results = self.search(query, max_results=3)
            if search_results:
                parts = []
                for r in search_results:
                    content = r.get('content', '')
                    if content:
                        parts.append(f"- {r.get('title', '')}: {content}")
                results[category] = "\n".join(parts)

        return results

    def search_skills(self, job_title: str) -> Dict[str, str]:
        """Search for skills and requirements for a career"""
        queries = {
            "job_postings": f"{job_title} required skills qualifications job posting 2024 2025",
            "career_guides": f"how to become {job_title} skills needed career path",
            "tools": f"{job_title} tools technologies software used daily",
        }

        results = {}
        for category, query in queries.items():
            search_results = self.search(query, max_results=3)
            if search_results:
                parts = []
                for r in search_results:
                    content = r.get('content', '')
                    if content:
                        parts.append(f"- {r.get('title', '')}: {content}")
                results[category] = "\n".join(parts)

        return results

    def search_automation_risk(self, job_title: str) -> Dict[str, str]:
        """Search for AI automation risk data for a career"""
        queries = {
            "automation_risk": f"AI automation risk {job_title} jobs replaced artificial intelligence",
            "ai_tools": f"AI tools used by {job_title} artificial intelligence software",
            "future_outlook": f"{job_title} job future AI impact employment outlook",
        }

        results = {}
        for category, query in queries.items():
            search_results = self.search(query, max_results=3)
            if search_results:
                parts = []
                for r in search_results:
                    content = r.get('content', '')
                    if content:
                        parts.append(f"- {r.get('title', '')}: {content}")
                results[category] = "\n".join(parts)

        return results

    def get_source_count(self, search_results: Dict[str, str]) -> int:
        """Count total sources from a categorized search result"""
        count = 0
        for category_text in search_results.values():
            count += category_text.count("\n- ") + (1 if category_text.startswith("- ") else 0)
        return count

    def format_as_context(self, search_results: Dict[str, str]) -> str:
        """Format categorized search results into a context string for AI prompts"""
        if not search_results:
            return ""

        parts = []
        for category, content in search_results.items():
            label = category.replace("_", " ").title()
            parts.append(f"=== {label} ===\n{content}")

        return "\n\n".join(parts)


# Global instance
tavily_client = TavilySearchClient()
