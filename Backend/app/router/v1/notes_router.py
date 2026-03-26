"""
Notes router.

Handles endpoints for retrieving and managing notes from external sources.
Currently integrates with Joplin note-taking application.
"""

from fastapi import APIRouter, Depends, HTTPException

from app.services.Notes import Note_JSON, NotesConfigurationError

# Initialize router with prefix and tags
router = APIRouter(
    prefix="/v1/notes",
    tags=['notes']
)


@router.get('/joplin')
async def get_joplin_notes():
    """
    Get all notes from Joplin.

    Fetches notes from the configured Joplin instance and returns them
    as a JSON string. The notes are filtered to remove null values.

    Returns:
        str: JSON string containing all notes

    Raises:
        HTTPException: 503 if Joplin is not configured or unavailable
        HTTPException: 500 if there is an error fetching notes
    """
    try:
        notes_json = Note_JSON()
        return {"notes": notes_json}
    except NotesConfigurationError:
        # Joplin not configured
        raise HTTPException(
            status_code=503,
            detail="Joplin integration not configured. Set JOPLIN_TOKEN environment variable."
        )
    except Exception as e:
        # Other errors (API failures, etc.)
        raise HTTPException(
            status_code=500,
            detail=f"Error fetching notes: {str(e)}"
        )


# TODO: Implement POST endpoint for creating notes in Joplin
# @router.post('/joplin', status_code=201)
# async def create_joplin_note(note_data: NoteCreate):
#     """
#     Create a new note in Joplin.
#
#     Args:
#         note_data: Note content and metadata
#
#     Returns:
#         dict: Created note details
#     """
#     pass
