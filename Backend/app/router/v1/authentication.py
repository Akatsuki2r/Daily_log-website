"""
Authentication router.

Handles user registration (signup) and login endpoints.
Uses JWT tokens for session management.
"""

from fastapi import APIRouter, HTTPException, Depends
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from sqlalchemy import select
from sqlalchemy.orm import Session
from typing import Annotated
from argon2.exceptions import VerifyMismatchError

# Import specific functions from services (avoid wildcard imports)
from app.services.auth_service import (
    password_hashing,
    verify_password,
    create_access_token,
    ACCESS_TOKEN_EXPIRE_MINUTES
)
from app.models.models import get_db, SessionLocal, User
from app.schemas.pydantic_models import Users, UserLogin

# Initialize router with prefix and tags
router = APIRouter(
    prefix="/v1/authentication",
    tags=['auth']
)


@router.post('/signup', status_code=201)
async def create_user(usrdata: Users, db: Session = Depends(get_db)):
    """
    Create a new user account.

    Args:
        usrdata: User registration data (username, email, password)
        db: Database session

    Returns:
        dict: Access token and token type

    Raises:
        HTTPException: 400 if user already exists
    """
    # Check if user already exists by email
    stmt = select(User).where(User.email == usrdata.email)
    existing_user = db.scalar(stmt)

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="User with this email already exists"
        )

    # Check if username is taken
    stmt = select(User).where(User.username == usrdata.username)
    existing_username = db.scalar(stmt)

    if existing_username:
        raise HTTPException(
            status_code=400,
            detail="Username already taken"
        )

    # Hash the password using Argon2
    hashed_password = password_hashing(usrdata.password)

    # Create new user record
    new_user = User(
        username=usrdata.username,
        email=usrdata.email,
        hashed_password=hashed_password
    )

    # Generate access token for immediate login after signup
    access_token = create_access_token(
        data={"sub": usrdata.username}
    )

    # Save user to database
    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "access_token": access_token,
        "token_type": "bearer"
    }


@router.post("/login")
async def user_auth(
    usrcredentials: UserLogin,
    db: Session = Depends(get_db)
):
    """
    Authenticate a user and return an access token.

    Args:
        usrcredentials: Login credentials (username, password)
        db: Database session

    Returns:
        dict: Access token and token type

    Raises:
        HTTPException: 401 if credentials are invalid
    """
    # Find user by username
    stmt = select(User).where(User.username == usrcredentials.username)
    user = db.scalar(stmt)

    if not user:
        raise HTTPException(
            status_code=401,
            detail="Invalid credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )

    # Verify password using Argon2
    try:
        verify_password(user.hashed_password, usrcredentials.password)
    except VerifyMismatchError:
        # Password doesn't match - use generic error message for security
        raise HTTPException(
            status_code=401,
            detail="Invalid credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )

    # Generate access token
    access_token = create_access_token(
        data={"sub": usrcredentials.username}
    )

    return {
        "access_token": access_token,
        "token_type": "bearer"
    }
