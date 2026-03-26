"""
Notes service module.

Handles integration with external note-taking applications (Joplin).
Provides functions to fetch and format notes for the API.

For more info on Joplin API: https://github.com/marph91/joppy
"""

import json
import os
from functools import lru_cache
from typing import List, Dict, Any

from joppy.client_api import ClientApi
from dotenv import load_dotenv

# Load environment variables
load_dotenv()


# Custom exception for configuration errors
class NotesConfigurationError(RuntimeError):
    """Raised when notes service is not properly configured."""
    pass


# Joplin API configuration from environment variables
JOPLIN_TOKEN = os.getenv("JOPLIN_TOKEN")
if not JOPLIN_TOKEN:
    # Provide a fallback for development, but warn
    import warnings
    warnings.warn(
        "JOPLIN_TOKEN not set. Notes functionality will not work. "
        "Set JOPLIN_TOKEN in your .env file.",
        RuntimeWarning
    )


@lru_cache(maxsize=1)
def get_joplin_client() -> ClientApi | None:
    """
    Get or create a cached Joplin API client.

    Returns:
        ClientApi instance if token is configured, None otherwise
    """
    token = os.getenv("JOPLIN_TOKEN")
    if not token:
        return None
    return ClientApi(token=token)


def fetch_joplin_notes(fields: str = "title,id,parent_id,body") -> List[Any]:
    """
    Fetch all notes from Joplin.

    Args:
        fields: Comma-separated list of fields to retrieve

    Returns:
        List of note objects from Joplin

    Raises:
        NotesConfigurationError: If Joplin client is not configured
        Exception: If API call fails
    """
    client = get_joplin_client()
    if not client:
        raise NotesConfigurationError(
            "Joplin client not configured. Set JOPLIN_TOKEN environment variable."
        )

    return client.get_all_notes(fields=fields)


def format_notes_to_json(notes: List[Any]) -> str:
    """
    Convert note objects to JSON string, filtering out None values.

    Args:
        notes: List of note objects from Joplin API

    Returns:
        JSON string representation of the notes
    """
    # Filter out None values from each note's __dict__
    dict_notes = [
        {k: v for k, v in note.__dict__.items() if v is not None}
        for note in notes
    ]
    return json.dumps(dict_notes)


def Note_JSON() -> str:
    """
    Main entry point to get all Joplin notes as JSON.

    Fetches notes from Joplin and converts them to JSON format.
    This replaces the previous module-level API call which caused
    issues at application startup.

    Returns:
        str: JSON string containing all notes

    Example:
        >>> from app.services.Notes import Note_JSON
        >>> notes_json = Note_JSON()
        >>> print(notes_json)
        '[{"id": "...", "title": "...", ...}]'
    """
    notes = fetch_joplin_notes()
    return format_notes_to_json(notes)


# TODO: Add endpoint for posting notes to Joplin
# def create_joplin_note(title: str, body: str, parent_id: str = None) -> dict:
#     """
#     Create a new note in Joplin.
#
#     Args:
#         title: Note title
#         body: Note content (Markdown)
#         parent_id: Optional notebook ID
#
#     Returns:
#         dict: Created note data
#     """
#     client = get_joplin_client()
#     if not client:
#         raise NotesConfigurationError("Joplin client not configured")
#     return client.add_note(title=title, body=body, parent_id=parent_id)
