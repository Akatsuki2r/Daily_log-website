from pydantic import BaseModel
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from Backend.database.database import Base


class User(BaseModel):
    NAME: str
    EMAIL: str
    PASSWORD: str
    

class Users(Base):
    __tablename__ = 'users'
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String)
