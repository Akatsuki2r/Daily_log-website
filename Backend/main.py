"""
Main FastAPI application entry point.

Initializes the FastAPI application, configures middleware,
and includes API routers.
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Import routers explicitly (avoid wildcard imports)
from app.router.v1 import user_router
from app.router.v1 import notes_router
from app.router.v1 import authentication

# Import database models for initialization
from app.models.models import Base, engine

# Initialize FastAPI application
app = FastAPI(
    title="Daily Log API",
    description="API for Daily Log application with user authentication and notes management",
    version="1.0.0"
)

# Create database tables on startup
# NOTE: For production, use Alembic migrations instead of create_all
Base.metadata.create_all(bind=engine)

# CORS Configuration
# SECURITY: In production, restrict to your actual frontend domains
# Current settings allow all origins for development convenience
origins = [
    "http://localhost:3000",     # React dev server
    "http://localhost:5173",     # Vite dev server
    "http://127.0.0.1:3000",
    "http://127.0.0.1:5173",
    # TODO: Add your production frontend URL here
    # "https://yourdomain.com",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Restricted to known origins for security
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
    max_age=3600,  # Cache preflight requests for 1 hour
)

# Include API routers
# All routers use /v1 prefix for API versioning
app.include_router(authentication.router)
app.include_router(user_router.router)
app.include_router(notes_router.router)
