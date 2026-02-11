from argon2 import PasswordHasher
from fastapi import HTTPException, Depends
from fastapi import  HTTPException, Depends
from pydanticmodels.pydantic_models import *
from models.models import get_db
from models.models import User
from sqlalchemy import select
from typing import Annotated
from sqlalchemy.orm import Session
from starlette import status
from jose import jwt, JWTError
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer
from passlib.context import CryptContext
import datetime
from datetime import timedelta, datetime, timezone
from jwt.exceptions import InvalidTokenError





ph = PasswordHasher()



#JWT
SECRET_KEY = 'Jx8mQF7VvCqP0e1nZ6yLhK9sD2RrT5UO4B3WcA_iYHkN-MaEbpSfGdXw'
ALGORITHM = 'HS256'
ACCESS_TOKEN_EXPIRE_MINUTES = 35


pwd_context = CryptContext(schemes=['bcrypt'], deprecated='auto')
oauth2_bearer = OAuth2PasswordBearer(tokenUrl='v1/authentication/Login')

def password_hashing(plain_password: str) -> str:
    hashed = ph.hash(plain_password)
    return hashed


def  verify_password(hashed_password, plain_password):
    return ph.verify(hashed_password, plain_password)    


def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()

    
    expire = datetime.now(timezone.utc) + (expires_delta or timedelta(minutes=15))
    to_encode.update({"exp": expire})

    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def get_current_user(
    token: Annotated[str, Depends(oauth2_bearer)],
    db: Session = Depends(get_db)
):
    try:
        payload = jwt.decode(
            token,
            SECRET_KEY,
            algorithms=[ALGORITHM]
        )
        usrname = payload.get("sub")
        if usrname is None:
            raise HTTPException(status_code=401)

    except JWTError:
        raise HTTPException(status_code=401)

    user = db.scalar(select(User).where(User.username == usrname))
    if not user:
        raise HTTPException(status_code=401)

    return user


def get_username(
    token: Annotated[str, Depends(oauth2_bearer)],
    db: Session = Depends(get_db)
):
    
    try:
        payload = jwt.decode(
            token,
            SECRET_KEY,
            algorithms=[ALGORITHM]
        )
        usrname = payload.get("sub")
        if usrname is None:
            raise HTTPException(status_code=401)

    except JWTError:
        raise HTTPException(status_code=401)
    
    usrname = db.scalar(select(User.username).where(User.username == usrname))
    if not usrname:
        raise HTTPException(status_code=401)
    
    return usrname