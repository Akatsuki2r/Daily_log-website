from fastapi import APIRouter, HTTPException, Depends
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from pydanticmodels.pydantic_models import *
from services.auth_service import password_hashing, verify_password, ph
from models.models import get_db, SessionLocal
from models.models import User
from sqlalchemy import select
from typing import Annotated
from sqlalchemy.orm import Session
from services.auth_service import *

router = APIRouter(
    prefix="/v1/authentication",
    tags=['auth']
)








@router.post('/SignUp')
async def create_user(usrdata: Users, db: Session = Depends(get_db)):
    
    stmt = select(User).where(User.email == usrdata.email)
    user = db.scalar(stmt)
    
    if user:
        raise HTTPException(status_code=401, detail="User exists")
        
    
    hashed_password = password_hashing(usrdata.password)



    new_user = User(
        username=usrdata.username,
        email=usrdata.email,
        hashed_password=hashed_password
    )
    
    access_token = create_access_token(
        data={"sub": usrdata.email},
        expires_delta=timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user) 
    
    return {
        "access_token": access_token,
        "token_type": "bearer"
    }

    
    
@router.post("/Login")
async def user_auth(
    usrcredentials: UserLogin,
    db: Session = Depends(get_db)
):
    stmt = select(User).where(User.email == usrcredentials.email)
    user = db.scalar(stmt)

    if not user:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    try:
        verify_password(user.hashed_password, usrcredentials.password)
    except Exception:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    access_token = create_access_token(
        data={"sub": usrcredentials.email},
        expires_delta=timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    )

    return {
        "access_token": access_token,
        "token_type": "bearer"
    }

@router.get("/me")
def me(current_user: User = Depends(get_current_user)):
    return current_user
