from typing import Optional, List
from sqlmodel import SQLModel, Field, Relationship

class Career(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    slug: str = Field(index=True, unique=True)  # "marketing-manager", "software-engineering"
    name: str                                  # "Marketing Manager", "Software Engineering"

    cards: List["Card"] = Relationship(back_populates="career")

class Section(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    slug: str = Field(index=True, unique=True)  # "degrees", "experiences", "resources"
    name: str                                  # "Degrees", "Experiences", "Resources"

    cards: List["Card"] = Relationship(back_populates="section")

class Card(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)

    title: str
    description: str = ""

    tag: str  # "Degree" / "Club" / "Partnership" / "Event" / "Program"
    link_url: Optional[str] = None
    image_url: Optional[str] = None

    sort_order: int = 0
    is_active: bool = True

    # IMPORTANT: degrees (and everything else) is tied to a career + section
    career_id: int = Field(foreign_key="career.id", index=True)
    section_id: int = Field(foreign_key="section.id", index=True)

    career: Optional[Career] = Relationship(back_populates="cards")
    section: Optional[Section] = Relationship(back_populates="cards")
