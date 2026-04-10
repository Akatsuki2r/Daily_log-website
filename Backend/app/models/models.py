"""
SQLAlchemy database models.

Defines the database schema using SQLAlchemy ORM.
"""

import sqlalchemy as sa
from sqlalchemy import create_engine, String
from sqlalchemy.orm import declarative_base, Mapped, mapped_column, sessionmaker
from sqlalchemy.engine import URL

from app.database.database import url_object

# Initialize SQLAlchemy components
engine = sa.create_engine(url_object, echo=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()


def get_db():
    """
    Database session dependency generator.

    Yields a database session and ensures proper cleanup.
    Use with FastAPI Depends():
        async def endpoint(db: Session = Depends(get_db)):
            ...
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def create_db():
    """
    Create all database tables.

    WARNING: For development only. Use Alembic migrations in production.
    """
    Base.metadata.create_all(bind=engine)


class User(Base):
    """
    User model representing application users.

    Attributes:
        id: Primary key
        username: Display name
        email: Unique email address
        hashed_password: Argon2 hashed password
    """
    __tablename__ = 'user'

    id: Mapped[int] = mapped_column(
        primary_key=True,
        index=True,
        unique=True
    )
    username: Mapped[str] = mapped_column(
        String(45),
        nullable=False,
        unique=True   #We are using the username alot for authentication so its only reasonable to make it unique
    )
    email: Mapped[str] = mapped_column(
        String(60),
        nullable=False,
        unique=True
    )
    hashed_password: Mapped[str] = mapped_column(
        nullable=False
    )

    def __repr__(self) -> str:
        return (
            f"<User(id={self.id}, "
            f"username={self.username}, "
            f"email={self.email})>"
        )
