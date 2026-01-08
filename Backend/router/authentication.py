from fastapi import APIRouter, HTTPException, Depends
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from pydanticmodels.pydantic_models import *
from models.models import get_db, SessionLocal
from models.models import User
from sqlalchemy import select
from sqlalchemy.orm import Session


router = APIRouter(
    prefix="/v1/authentication"
)


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
