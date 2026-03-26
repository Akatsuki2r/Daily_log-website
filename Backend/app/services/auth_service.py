"""
Authentication service module.

Handles password hashing, JWT token creation/validation, and user authentication.
Uses Argon2 for password hashing and PyJWT for token management.
"""

from argon2 import PasswordHasher
from argon2.exceptions import VerifyMismatchError
from fastapi import HTTPException, Depends
from sqlalchemy import select
from sqlalchemy.orm import Session
from typing import Annotated
from jose import jwt, JWTError
from fastapi.security import OAuth2PasswordBearer
from datetime import timedelta, datetime, timezone
import os
from dotenv import load_dotenv

from app.models.models import get_db, User

# Load environment variables
load_dotenv()

# Initialize Argon2 password hasher
ph = PasswordHasher()

# JWT Configuration - loaded from environment variables
# SECURITY: These should be properly set in production via env vars
SECRET_KEY = os.getenv("SECRET_KEY")
if not SECRET_KEY:
    raise ValueError("SECRET_KEY environment variable is required")

ALGORITHM = os.getenv("ALGORITHM", "HS256")
ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", "60"))

# OAuth2 scheme for token URL
oauth2_bearer = OAuth2PasswordBearer(tokenUrl='v1/authentication/login')


def password_hashing(plain_password: str) -> str:
    """
    Hash a plain text password using Argon2.

    Args:
        plain_password: The password to hash

    Returns:
        str: The hashed password
    """
    return ph.hash(plain_password)


def verify_password(hashed_password: str, plain_password: str) -> bool:
    """
    Verify a password against its hash using Argon2.

    Args:
        hashed_password: The stored password hash
        plain_password: The plain text password to verify

    Returns:
        bool: True if password matches, False otherwise

    Raises:
        VerifyMismatchError: If password verification fails
    """
    return ph.verify(hashed_password, plain_password)


def create_access_token(data: dict, expires_delta: timedelta | None = None) -> str:
    """
    Create a JWT access token.

    Args:
        data: Dictionary containing claims to encode (e.g., {"sub": username})
        expires_delta: Optional custom expiration time, defaults to ACCESS_TOKEN_EXPIRE_MINUTES

    Returns:
        str: The encoded JWT token

    Raises:
        ValueError: If SECRET_KEY or ALGORITHM is not configured
    """
    to_encode = data.copy()

    # Calculate expiration time
    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)

    to_encode.update({"exp": expire})

    if not SECRET_KEY or not ALGORITHM:
        raise ValueError("Missing required environment variables: SECRET_KEY or ALGORITHM")

    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


def get_current_user(
    token: Annotated[str, Depends(oauth2_bearer)],
    db: Session = Depends(get_db)
) -> User:
    """
    Dependency to get the current authenticated user from a JWT token.

    Args:
        token: The JWT access token from the request
        db: Database session dependency

    Returns:
        User: The authenticated user object

    Raises:
        HTTPException: 401 if token is invalid or user not found
    """
    credentials_exception = HTTPException(
        status_code=401,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )

    try:
        # Decode the JWT token
        payload = jwt.decode(
            token,
            SECRET_KEY,
            algorithms=[ALGORITHM]
        )
        username = payload.get("sub")
        if username is None:
            raise credentials_exception

    except JWTError:
        raise credentials_exception

    # Query the database for the user
    user = db.scalar(select(User).where(User.username == username))
    if not user:
        raise credentials_exception

    return user


def get_username(
    token: Annotated[str, Depends(oauth2_bearer)],
    db: Session = Depends(get_db)
) -> str:
    """
    Dependency to get the current username from a JWT token.

    Args:
        token: The JWT access token from the request
        db: Database session dependency

    Returns:
        str: The username extracted from the token

    Raises:
        HTTPException: 401 if token is invalid or user not found
    """
    credentials_exception = HTTPException(
        status_code=401,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )

    try:
        # Decode the JWT token
        payload = jwt.decode(
            token,
            SECRET_KEY,
            algorithms=[ALGORITHM]
        )
        username = payload.get("sub")
        if username is None:
            raise credentials_exception

    except JWTError:
        raise credentials_exception

    # Verify user exists in database
    db_username = db.scalar(select(User.username).where(User.username == username))
    if not db_username:
        raise credentials_exception

    return db_username
