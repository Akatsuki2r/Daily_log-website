"""
Pydantic models (schemas) for request/response validation.

Defines the data structures used for API input validation and serialization.
"""

from pydantic import BaseModel, Field, EmailStr


class Users(BaseModel):
    """
    User registration/signup model.

    Used for validating new user registration data.
    """
    username: str = Field(
        min_length=2,
        max_length=50
    )
    email: str = Field(
        max_length=130
    )
    password: str = Field(
        min_length=4,
        max_length=120
    )


class UserLogin(BaseModel):
    """
    User login model.

    Used for validating login credentials.
    """
    username: str = Field(
        min_length=2,
        max_length=50
    )
    password: str = Field(
        min_length=4,
        max_length=130
    )


class Token(BaseModel):
    """
    JWT Token response model.

    Returned after successful authentication.
    """
    access_token: str
    token_type: str = "bearer"


class TokenData(BaseModel):
    """
    Token payload data model.

    Represents the data encoded in a JWT token.
    """
    email: str | None = None
