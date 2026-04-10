"""
Application configuration module.

Uses Pydantic Settings to load configuration from environment variables
and .env files. This is the single source of truth for app configuration.

Usage:
    from app.core.config import settings
    secret = settings.secret_key.get_secret_value()
"""

from pydantic import SecretStr, Field
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """
    Application settings loaded from environment variables.

    All sensitive values should be set via environment variables
    or in a .env file (never commit secrets to version control).
    """
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        # Allow extra fields for flexibility
        extra="allow"
    )

    # Security settings
    secret_key: SecretStr = Field(
        default=...,
        description="Secret key for JWT signing. Generate with: openssl rand -hex 32"
    )
    algorithm: str = Field(
        default="HS256",
        description="JWT signing algorithm"
    )
    access_token_expire_minutes: int = Field(
        default=60,
        description="JWT token expiration time in minutes"
    )

    # Database settings
    db_username: str = Field(
        default="postgres",
        description="Database username"
    )
    db_password: SecretStr = Field(
        default=...,
        description="Database password"
    )
    db_host: str = Field(
        default="localhost",
        description="Database host"
    )
    db_port: int = Field(
        default=5432,
        description="Database port"
    )
    db_name: str = Field(
        default="Daily_log",
        description="Database name"
    )

    # Joplin integration
    joplin_token: SecretStr | None = Field(
        default=None,
        description="Joplin API token from Tools > Options > Web Clipper"
    )

    @property
    def database_url(self) -> str:
        """
        Construct the full database URL from components.

        Returns:
            str: PostgreSQL connection URL
        """
        password = self.db_password.get_secret_value() if self.db_password else ""
        return (
            f"postgresql://{self.db_username}:{password}"
            f"@{self.db_host}:{self.db_port}/{self.db_name}"
        )


# Global settings instance
# Load settings at module import time
settings = Settings()
