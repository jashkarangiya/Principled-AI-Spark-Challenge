from sqlmodel import Session, select
from db import engine, init_db
from models import Career, Section, Card

def get_or_create(session: Session, model, **kwargs):
    stmt = select(model).where(getattr(model, 'slug') == kwargs.get('slug'))
    obj = session.exec(stmt).first()
    if obj:
        for k, v in kwargs.items():
            setattr(obj, k, v)
        session.add(obj)
        session.commit()
        session.refresh(obj)
        return obj
    obj = model(**kwargs)
    session.add(obj)
    session.commit()
    session.refresh(obj)
    return obj

def run():
    init_db()
    with Session(engine) as session:
        # All 13 careers
        careers_data = [
            {"slug": "data-analyst", "name": "Data Analyst", "field": "Technology", "image_url": "https://images.unsplash.com/photo-1657727534685-36b09f84e193?w=1200", "growth_rate": "+23%", "annual_openings": "13,500", "automation_risk_pct": 35, "salary_entry": "$52,000", "salary_median": "$76,000", "salary_top": "$118,000"},
            {"slug": "ux-designer", "name": "UX Designer", "field": "Technology", "image_url": "https://images.unsplash.com/photo-1612171742424-c31e0b4fe5db?w=1200", "growth_rate": "+16%", "annual_openings": "7,800", "automation_risk_pct": 28, "salary_entry": "$48,000", "salary_median": "$72,000", "salary_top": "$115,000"},
            {"slug": "software-engineer", "name": "Software Engineer", "field": "Technology", "image_url": "https://images.unsplash.com/photo-1581091872370-1c203d690c43?w=1200", "growth_rate": "+22%", "annual_openings": "19,400", "automation_risk_pct": 32, "salary_entry": "$68,000", "salary_median": "$102,000", "salary_top": "$162,000"},
            {"slug": "registered-nurse", "name": "Registered Nurse", "field": "Health & Nursing", "image_url": "https://images.unsplash.com/photo-1633488781325-d36e6818d0c8?w=1200", "growth_rate": "+6%", "annual_openings": "34,500", "automation_risk_pct": 18, "salary_entry": "$58,000", "salary_median": "$77,000", "salary_top": "$106,000"},
            {"slug": "k12-teacher", "name": "K-12 Teacher", "field": "Education", "image_url": "https://images.unsplash.com/photo-1758270704925-fa59d93119c1?w=1200", "growth_rate": "+4%", "annual_openings": "15,200", "automation_risk_pct": 22, "salary_entry": "$42,000", "salary_median": "$61,000", "salary_top": "$88,000"},
            {"slug": "financial-analyst", "name": "Financial Analyst", "field": "Business", "image_url": "https://images.unsplash.com/photo-1618044733300-9472054094ee?w=1200", "growth_rate": "+8%", "annual_openings": "10,500", "automation_risk_pct": 38, "salary_entry": "$54,000", "salary_median": "$74,000", "salary_top": "$112,000"},
            {"slug": "marketing-manager", "name": "Marketing Manager", "field": "Business", "image_url": "https://images.unsplash.com/photo-1630673582795-9781bc41b1a7?w=1200", "growth_rate": "+8%", "annual_openings": "8,900", "automation_risk_pct": 42, "salary_entry": "$52,000", "salary_median": "$85,000", "salary_top": "$142,000"},
            {"slug": "social-worker", "name": "Social Worker", "field": "Social Sciences", "image_url": "https://images.unsplash.com/photo-1678940807631-19344efc1349?w=1200", "growth_rate": "+9%", "annual_openings": "9,200", "automation_risk_pct": 12, "salary_entry": "$42,000", "salary_median": "$58,000", "salary_top": "$82,000"},
            {"slug": "cybersecurity-analyst", "name": "Cybersecurity Analyst", "field": "Technology", "image_url": "https://images.unsplash.com/photo-1662638600476-d563fffbb072?w=1200", "growth_rate": "+35%", "annual_openings": "6,200", "automation_risk_pct": 30, "salary_entry": "$62,000", "salary_median": "$94,000", "salary_top": "$142,000"},
            {"slug": "environmental-scientist", "name": "Environmental Scientist", "field": "Engineering", "image_url": "https://images.unsplash.com/photo-1639486649969-61296ce0a5ce?w=1200", "growth_rate": "+6%", "annual_openings": "3,100", "automation_risk_pct": 25, "salary_entry": "$48,000", "salary_median": "$73,000", "salary_top": "$118,000"},
            {"slug": "journalist-reporter", "name": "Journalist/Reporter", "field": "Arts & Media", "image_url": "https://images.unsplash.com/photo-1759659334772-c3a05b8178e9?w=1200", "growth_rate": "-3%", "annual_openings": "4,100", "automation_risk_pct": 45, "salary_entry": "$35,000", "salary_median": "$52,000", "salary_top": "$82,000"},
            {"slug": "physician-assistant", "name": "Physician Assistant", "field": "Health & Nursing", "image_url": "https://images.unsplash.com/photo-1753487050317-919a2b26a6ed?w=1200", "growth_rate": "+28%", "annual_openings": "3,800", "automation_risk_pct": 20, "salary_entry": "$88,000", "salary_median": "$108,000", "salary_top": "$142,000"},
        ]
        
        for career_data in careers_data:
            get_or_create(session, Career, **career_data)
        
        print(f"Seeded {len(careers_data)} careers successfully.")

if __name__ == "__main__":
    run()
