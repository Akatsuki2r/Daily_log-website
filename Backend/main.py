from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from models.models import Base, engine, SessionLocal, get_db, Session
from models.models import User
from pydanticmodels.pydantic_models import *
from router import  authentication


app = FastAPI()

Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(authentication.router)


