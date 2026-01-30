from fastapi import APIRouter, HTTPException, Depends
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from pydanticmodels.pydantic_models import *
from services.services import passworrd_hashing, verify_password, ph
from models.models import get_db, SessionLocal
from models.models import User
from sqlalchemy import select
from typing import Annotated
from sqlalchemy.orm import Session
from starlette import status
from jose import jwt, JWTError
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from passlib.context import CryptContext
from datetime import timedelta, datetime, timezone
from jwt.exceptions import InvalidTokenError


router = APIRouter(
    prefix="/v1/authentication",
    tags=['auth']
)


SECRET = 'Jx8mQF7VvCqP0e1nZ6yLhK9sD2RrT5UO4B3WcA_iYHkN-MaEbpSfGdXw'
ALGORITHM = 'HS256'
ACCESS_TOKEN_EXPIRE_MINUTES = 15


bcrypt_context = CryptContext(schemes=['bcrypt'], deprecated='auto')
oauth2_bearer = OAuth2PasswordBearer(tokenUrl='v1/authentication/token')

@router.post('/SignUp')
async def create_user(usrdata: Users, db: Session = Depends(get_db)):
    hashed_password = passworrd_hashing(usrdata.hashed_password)

    new_user = User(
        username=usrdata.username,
        email=usrdata.email,
        hashed_password=hashed_password
    )
    
    db.add(new_user)
    db.commit()
    db.refresh(new_user) 
    
    return new_user

    
    
@router.post('/Login')
async def user_auth(usrcredentials: UserLogin, db: Session = Depends(get_db)):
    # 1. Find user by email
    stmt = select(User).where(User.email == usrcredentials.email)
    user = db.scalar(stmt)
    
    if not user:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    # 2. Verify password using the Argon2 instance
    try:
        ph.verify(user.hashed_password, usrcredentials.password)
    except Exception:
        raise HTTPException(status_code=401, detail="Invalid credentials")
        
    return {"message": "Login successful", "email": user.email}
