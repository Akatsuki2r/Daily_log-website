"""
Database configuration module.

Handles database connection setup using SQLAlchemy.
Uses environment variables for connection parameters.
"""

from sqlalchemy.engine import URL
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()


def create_database_url() -> URL:
    """
    Create a SQLAlchemy URL object from environment variables.

    Expected environment variables:
        - DB_USERNAME: Database username
        - DB_PASSWORD: Database password
        - DB_HOST: Database host (default: localhost)
        - DB_PORT: Database port (default: 5432)
        - DB_NAME: Database name (default: Daily_log)

    Returns:
        URL: SQLAlchemy database URL object

    Raises:
        ValueError: If required environment variables are not set
    """
    username = os.getenv("DB_USERNAME")
    password = os.getenv("DB_PASSWORD")

    if not username:
        raise ValueError("DB_USERNAME environment variable is required")
    if not password:
        raise ValueError("DB_PASSWORD environment variable is required")

    host = os.getenv("DB_HOST", "localhost")
    port = int(os.getenv("DB_PORT", "5432"))
    database = os.getenv("DB_NAME", "Daily_log")

    return URL.create(
        "postgresql",
        username=username,
        password=password,
        host=host,
        port=port,
        database=database
    )


# Global database URL object
# Created at module import time
url_object = create_database_url()
