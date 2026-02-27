from sqlmodel import Session, select, text
from db import engine, init_db
from models import Career, Section, Card

def get_or_create(session: Session, model, **kwargs):
    stmt = select(model)
    for k, v in kwargs.items():
        stmt = stmt.where(getattr(model, k) == v)
    obj = session.exec(stmt).first()
    if obj:
        return obj
    obj = model(**kwargs)
    session.add(obj)
    session.commit()
    session.refresh(obj)
    return obj

def run():
    init_db()
    with Session(engine) as session:
        # All 13 careers map (essential for the dynamic page)
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
        
        db_careers = {}
        for cdata in careers_data:
            cdata_kwargs = {k: v for k, v in cdata.items() if k not in ["salary_entry", "salary_median", "salary_top"]}
            db_careers[cdata["slug"]] = get_or_create(session, Career, **cdata_kwargs)

        marketing = db_careers["marketing-manager"]
        swe = db_careers["software-engineer"]
        
        # Sections
        degrees = get_or_create(session, Section, slug="degrees", name="Degrees")
        resources = get_or_create(session, Section, slug="resources", name="Resources")
        experiences = get_or_create(session, Section, slug="experiences", name="Experiences")

        # Clear existing cards to prevent duplicates when changing things
        session.exec(text("DELETE FROM card"))
        session.commit()

        # MARKETING MANAGER -> DEGREES (separate from SWE degrees)
        mm_degrees = [
            Card(
                title="BS in Marketing",
                description="W. P. Carey School of Business",
                tag="Degree",
                link_url=None,
                image_url="https://alumni.asu.edu/sites/g/files/litvpz591/files/styles/image/public/2023-04/52817334287_1253d57617_k.jpg?itok=gV8ZHWKg",
                career_id=marketing.id,
                section_id=degrees.id,
                sort_order=1,
            ),
            Card(
                title="BA in Communication (Strategic Communication)",
                description="Hugh Downs School of Human Communication",
                tag="Degree",
                link_url="https://asuonline.asu.edu/online-degree-programs/undergraduate/bachelor-science-communication/",
                image_url="https://news.asu.edu/sites/default/files/styles/asu_news_gallery_image/public/2025-10/sustainable%202.jpg?itok=k14g3Fq-",
                career_id=marketing.id,
                section_id=degrees.id,
                sort_order=2,
            ),
        ]

        # SOFTWARE ENGINEERING -> DEGREES (separate from marketing degrees)
        swe_degrees = [
            Card(
                title="BS in Software Engineering",
                description="Ira A. Fulton Schools of Engineering",
                tag="Degree",
                link_url="https://asuonline.asu.edu/online-degree-programs/undergraduate/bachelor-science-software-engineering/",
                image_url=None,
                career_id=swe.id,
                section_id=degrees.id,
                sort_order=1,
            ),
            Card(
                title="BS in Computer Science",
                description="Ira A. Fulton Schools of Engineering",
                tag="Degree",
                link_url=None,
                image_url="https://news.asu.edu/sites/default/files/2025-08/2025.02.21%20SparkChallenge-1080p--7%5B25%5D%5B2%5D%5B1%5D.jpg",
                career_id=swe.id,
                section_id=degrees.id,
                sort_order=2,
            ),
        ]

        # MARKETING MANAGER -> RESOURCES
        mm_resources = [
            Card(
                title="ASU Global Virtual Internships",
                description="Get internship credit by working as a marketing intern for a partnering company.",
                tag="Partnership",
                link_url="https://goglobal.asu.edu/global-virtual-internship",
                image_url="https://goglobal.asu.edu/sites/g/files/litvpz1456/files/2024-10/GVI.png",
                career_id=marketing.id,
                section_id=resources.id,
                sort_order=1,
            ),
            Card(
                title="Adworks",
                description="Work with real companies and a team of students to run a marketing campaign.",
                tag="Club",
                link_url="https://www.adworksasu.com/",
                image_url="https://static.wixstatic.com/media/76c0e1_7337faffea5b4b6f8c93a7844e37fad3~mv2.png/v1/fill/w_1080,h_1080,al_c/483ea675-c394-4eed-9ceb-da7bc023100b94f811b0-b2c8-41e8-9cfe-57a4f0600089%20-%20Alek%20Bustamante.png",
                career_id=marketing.id,
                section_id=resources.id,
                sort_order=2,
            ),
            Card(
                title="Adobe Creative Suite Access",
                description="All ASU students get free access to all Adobe programs.",
                tag="Partnership",
                link_url="https://uto.asu.edu/adobe",
                image_url="https://www.reuters.com/resizer/v2/XTMZDT5CVNMJPABD75VUYPVRFE.jpg?auth=f5cb70c2baf40253c1bedb3a657fa32a6a6d595127aec23f44f13d8eab709208",
                career_id=marketing.id,
                section_id=resources.id,
                sort_order=3,
            ),
            Card(
                title="American Marketing Association",
                description="Network with marketing professionals and socialize with other students.",
                tag="Club",
                link_url="https://amaazstate.org/",
                image_url="https://amaazstate.org/assets/who%20we%20are%20&%20meet%20the%20team.jpg",
                career_id=marketing.id,
                section_id=resources.id,
                sort_order=4,
            ),
        ]

        # SOFTWARE ENGINEERING -> EXPERIENCES/RESOURCES
        swe_experiences = [
            Card(
                title="Open Source Contribution",
                description="Contribute to ASU-affiliated or public open source projects to build portfolio.",
                tag="Competition",
                link_url="https://github.com/asu",
                image_url="https://tech.asu.edu/sites/g/files/litvpz4026/files/2025-10/2025.09.16%20AI%20Scholars%20Event-4k-4935.jpg",
                career_id=swe.id,
                section_id=resources.id,
                sort_order=1,
            ),
            Card(
                title="Hackathons (SunHacks)",
                description="Annual ASU hackathon where students build projects in 24 hours with industry mentors.",
                tag="Competition",
                link_url="https://sunhacks.io/",
                image_url="https://scai.engineering.asu.edu/wp-content/uploads/sites/31/2024/10/sunhacks-fall2024-2286-editv2-1536x864-1-1080x675.jpg",
                career_id=swe.id,
                section_id=resources.id,
                sort_order=2,
            ),
            Card(
                title="ASU Software Factory",
                description="Work on real client projects while earning academic credit.",
                tag="Internship",
                link_url="https://softwarefactory.asu.edu/",
                image_url="https://news.asu.edu/sites/default/files/2025-08/2025.02.21%20SparkChallenge-1080p--7%5B25%5D%5B2%5D%5B1%5D.jpg", 
                career_id=swe.id,
                section_id=resources.id,
                sort_order=3,
            ),
            Card(
                title="Software Developers Association",
                description="Attend tech talks from industry leaders and participate in coding workshops.",
                tag="Club",
                link_url="https://www.devlabs.club/",
                image_url="https://www.devlabs.club/team-collage.png",
                career_id=swe.id,
                section_id=resources.id,
                sort_order=4,
            ),
        ]

        # Fix: SWE Experiences section ID was previously mapping to "resources", should map to "experiences" if that's what we want
        # But looking at the user seed.py they also used experiences.id for swe_experiences!
        sweep = []
        for c in swe_experiences:
            c.section_id = experiences.id
            sweep.append(c)

        session.add_all(mm_degrees + swe_degrees + mm_resources + sweep)
        session.commit()
        print("Seeded database with specified images and text")

if __name__ == "__main__":
    run()
