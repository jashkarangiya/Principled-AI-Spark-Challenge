from sqlmodel import Session, select
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
        # Careers
        marketing = get_or_create(session, Career, slug="marketing-manager", name="Marketing Manager")
        swe = get_or_create(session, Career, slug="software-engineering", name="Software Engineering")

        # Sections
        degrees = get_or_create(session, Section, slug="degrees", name="Degrees")
        resources = get_or_create(session, Section, slug="resources", name="Resources")
        experiences = get_or_create(session, Section, slug="experiences", name="Experiences")

        # MARKETING MANAGER -> DEGREES (separate from SWE degrees)
        mm_degrees = [
            Card(
                title="BS in Marketing",
                description="",
                tag="Degree",
                link_url=None,
                image_url="https://alumni.asu.edu/sites/g/files/litvpz591/files/styles/image/public/2023-04/52817334287_1253d57617_k.jpg?itok=gV8ZHWKg",
                career_id=marketing.id,
                section_id=degrees.id,
                sort_order=1,
            ),
            Card(
                title="BS in Communication",
                description="",
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
                description="",
                tag="Degree",
                link_url="https://asuonline.asu.edu/online-degree-programs/undergraduate/bachelor-science-software-engineering/",
                image_url=None,
                career_id=swe.id,
                section_id=degrees.id,
                sort_order=1,
            ),
            Card(
                title="BS in Computer Science",
                description="",
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
                link_url="https://tech.asu.edu/adobe",
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

        # SOFTWARE ENGINEERING -> EXPERIENCES
        swe_experiences = [
            Card(
                title="AI Scholars Program",
                description="Build hands-on AI projects and strengthen your technical portfolio.",
                tag="Program",
                link_url="https://tech.asu.edu/aischolars",
                image_url="https://tech.asu.edu/sites/g/files/litvpz4026/files/2025-10/2025.09.16%20AI%20Scholars%20Event-4k-4935.jpg",
                career_id=swe.id,
                section_id=experiences.id,
                sort_order=1,
            ),
            Card(
                title="DevLabs",
                description="Work on real software projects with a team of student developers.",
                tag="Club",
                link_url="https://www.devlabs.club/",
                image_url="https://www.devlabs.club/team-collage.png",
                career_id=swe.id,
                section_id=experiences.id,
                sort_order=2,
            ),
            Card(
                title="ACM Chapter at ASU",
                description="Attend workshops, hackathons, and networking events for computing students.",
                tag="Partnership",
                link_url="https://students.engineering.asu.edu/clubs/acm-student-chapter-at-asu/",
                image_url="https://pbs.twimg.com/media/Gh8x__1XQAA-NKd.jpg",
                career_id=swe.id,
                section_id=experiences.id,
                sort_order=3,
            ),
            Card(
                title="SunHacks",
                description="Build and pitch a software project at ASU’s annual hackathon.",
                tag="Event",
                link_url="https://sunhacks.io/",
                image_url="https://scai.engineering.asu.edu/wp-content/uploads/sites/31/2024/10/sunhacks-fall2024-2286-editv2-1536x864-1-1080x675.jpg",
                career_id=swe.id,
                section_id=experiences.id,
                sort_order=4,
            ),
        ]

        # Insert only if empty (so re-running seed doesn't duplicate)
        any_card = session.exec(select(Card).limit(1)).first()
        if any_card:
            print("Seed skipped: cards already exist.")
            return

        session.add_all(mm_degrees + swe_degrees + mm_resources + swe_experiences)
        session.commit()
        print("Seeded careers/sections/cards successfully.")

if __name__ == "__main__":
    run()
