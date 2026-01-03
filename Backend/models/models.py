from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from Backend.database.database import Base
from ..pydanticmodels import pydantic_models
import bcrypt







class Users(Base):
    __tablename__ = 'users'
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, nullable=False)
    email = Column(String, unique=True, nullable=False)
    password_hash = Column(String, nullable=False)

