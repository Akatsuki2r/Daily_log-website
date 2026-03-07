from fastapi import APIRouter
from app.schemas.pydantic_models import *
from fastapi import Depends
from app.services.auth_service import *
from app.models.models import User

router = APIRouter(
    prefix="/v1",
    tags=['Directly_called']
)

@router.get("/user")
async def me(current_user: User = Depends(get_current_user)):
    return current_user


@router.get("/user/username")
async def get_user_username(current_user: User = Depends(get_current_user)):
    # current_user is the actual User object returned by the dependency
    return {"username": current_user.username}

