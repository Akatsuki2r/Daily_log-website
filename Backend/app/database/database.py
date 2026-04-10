"""
Database configuration module.

Handles database connection setup using SQLAlchemy.
Uses centralized configuration for connection parameters.
"""

from sqlalchemy.engine import URL

from app.core.config import settings


def create_database_url() -> URL:
    """
    Create a SQLAlchemy URL object from centralized config.

    Configuration loaded from:
        - settings.db_username: Database username
        - settings.db_password: Database password
        - settings.db_host: Database host (default: localhost)
        - settings.db_port: Database port (default: 5432)
        - settings.db_name: Database name (default: Daily_log)

    Returns:
        URL: SQLAlchemy database URL object

    Raises:
        ValueError: If required environment variables are not set
    """
    username = settings.db_username
    password = settings.db_password.get_secret_value()

    return URL.create(
        "postgresql",
        username=username,
        password=password,
        host=settings.db_host,
        port=settings.db_port,
        database=settings.db_name
    )


# Global database URL object
# Created at module import time
url_object = create_database_url()
