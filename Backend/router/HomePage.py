from fastapi import APIRouter


router = APIRouter(
    prefix="v1/start",
    tags=['Directly_called']
)


#!@router.get('/user/username')