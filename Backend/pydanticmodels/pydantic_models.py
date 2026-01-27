from pydantic import BaseModel
from argon2 import PasswordHasher
from fastapi import APIRouter, HTTPException, Depends, status
from fastapi.security import HTTPBasic, HTTPBasicCredentials

ph = PasswordHasher()




class Users(BaseModel):
    username: str
    email: str
    hashed_password: str
    
class UserLogin(BaseModel):
    email: str
    password: str
    
    
def passworrd_hashing(password):
    hashed = ph.hash(password)
    return hashed

def verify_password(password, hashed_password):
    PasswordFromUser = passworrd_hashing(password)
    
    if not PasswordFromUser == hashed_password :
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid credentials"
        )
    
        

  