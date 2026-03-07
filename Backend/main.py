from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.middleware.cors import CORSMiddleware

from app.router.v1 import user_router
from app.models.models import Base, engine, SessionLocal, get_db, Session
from app.models.models import User
from app.schemas.pydantic_models import *
from app.router.v1 import  authentication


app = FastAPI()

Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(authentication.router)
app.include_router(user_router.router)



