//! Data cleansing and deserialization module.
//!
//! Handles fetching and deserializing note data from the API.

use serde::Deserialize;
use std::env;

/// Represents a Note from the API
#[derive(Deserialize, Debug)]
pub struct Note {
    /// Unique identifier for the note
    pub id: String,
    /// Parent folder/notebook ID
    pub parent_id: String,
    /// Note title
    pub title: String,
    /// Note body content (Markdown)
    pub body: String,
}

/// Configuration for API requests
struct ApiConfig {
    /// Base URL for the notes API
    base_url: String,
}

impl ApiConfig {
    /// Create configuration from environment variables
    ///
    /// Uses NOTES_API_URL env var, defaults to localhost:8000
    fn from_env() -> Self {
        let base_url = env::var("NOTES_API_URL")
            .unwrap_or_else(|_| "http://127.0.0.1:8000".to_string());

        Self {
            base_url,
        }
    }

    /// Get the full URL for fetching notes
    fn notes_url(&self) -> String {
        format!("{}/notes", self.base_url)
    }
}

/// Fetch and deserialize notes from the API
///
/// Makes an HTTP GET request to fetch notes and deserialize them
/// into Note structs.
///
/// # Errors
///
/// Returns an error if:
/// - The request fails
/// - The response cannot be parsed as JSON
/// - The JSON doesn't match the Note schema
pub async fn fetch_notes() -> Result<Vec<Note>, Box<dyn std::error::Error>> {
    // Load configuration from environment
    let config = ApiConfig::from_env();

    println!("Fetching notes from: {}", config.notes_url());

    // Make HTTP GET request to the notes endpoint
    let response = reqwest::get(&config.notes_url()).await?;

    // Check if request was successful
    if !response.status().is_success() {
        eprintln!("Request failed with status: {}", response.status());
        return Err(format!("HTTP error: {}", response.status()).into());
    }

    // Deserialize JSON response into Vec<Note>
    let notes: Vec<Note> = response.json().await?;

    println!("Successfully fetched {} notes", notes.len());

    Ok(notes)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_api_config_defaults() {
        // Ensure config can be created
        let config = ApiConfig {
            base_url: "http://localhost:3456".to_string(),
        };
        assert_eq!(config.notes_url(), "http://localhost:3456/notes");
    }
}
