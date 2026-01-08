import sqlalchemy as sa
from sqlalchemy import create_engine, select, String, Integer
from sqlalchemy.orm import Session, declarative_base, Mapped, mapped_column, relationship
from sqlalchemy.engine import URL
from pydanticmodels.pydantic_models import *
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from database.database import url_object


engine =  sa.create_engine(url_object, echo=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()
    

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def create_db():
    Base.metadata.create_all(bind=engine)


class User(Base):
    __tablename__ = 'user'
    id : Mapped[int] = mapped_column(primary_key=True, index=True, unique=True)
    username: Mapped[str] = mapped_column(String(45), nullable=False)
    email: Mapped[str] = mapped_column(String(60), nullable=False, unique=True)
    hashed_password: Mapped[str] = mapped_column(nullable=False)
    #id = Column(Integer, primary_key=True, index=True)
    #name = Column(String, unique=True, nullable=False)
    #email = Column(String, unique=True, nullable=False)
    #password_hash = Column(Text, nullable=False)

    def __rep__(self) -> str:
        return f'<User(id={self.id}, username={self.username}, email={self.email}, hashed_password={self.hashed_password})>'
        
