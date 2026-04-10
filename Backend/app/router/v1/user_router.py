"""
User router.

Handles user profile endpoints for authenticated users.
All endpoints require a valid JWT token.
"""

from fastapi import APIRouter, Depends

# Import specific schemas and services
from app.schemas.pydantic_models import Users
from app.services.auth_service import get_current_user
from app.models.models import User

# Initialize router with prefix and tags
router = APIRouter(
    prefix="/v1",
    tags=['user']
)


@router.get("/user/me")
async def get_current_user_profile(current_user: User = Depends(get_current_user)):
    """
    Get the current authenticated user's full profile.

    Args:
        current_user: User object from JWT token (injected by Depends)

    Returns:
        User: Complete user object (excluding password hash in production)
    """
    return current_user


@router.get("/user/username")
async def get_user_username(current_user: User = Depends(get_current_user)):
    """
    Get just the username of the current authenticated user.

    Useful for displaying username in UI without exposing other data.

    Args:
        current_user: User object from JWT token (injected by Depends)

    Returns:
        dict: Object containing the username
    """
    return {"username": current_user.username}
