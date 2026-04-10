//! API request module.
//!
//! Handles HTTP requests to external APIs (e.g., Joplin API).

use std::env;

/// Configuration for API requests
pub struct ApiConfig {
    /// Base URL for the API
    pub base_url: String,
    /// Optional API token for authentication
    pub token: Option<String>,
}

impl ApiConfig {
    /// Create configuration from environment variables
    ///
    /// Uses:
    /// - `API_BASE_URL` for the base URL (defaults to http://localhost:3456)
    /// - `API_TOKEN` for authentication (optional)
    pub fn from_env() -> Self {
        let base_url = env::var("API_BASE_URL")
            .unwrap_or_else(|_| "http://localhost:3456".to_string());

        let token = env::var("API_TOKEN").ok();

        Self { base_url, token }
    }
}

/// Run the API request pipeline
///
/// This function demonstrates the API client functionality.
/// Currently just prints the configuration - implement actual
/// API calls as needed.
pub fn run() {
    let config = ApiConfig::from_env();

    println!("=== Pipeline API Client ===");
    println!("Base URL: {}", config.base_url);

    if config.token.is_some() {
        println!("Authentication: Configured");
    } else {
        println!("Authentication: None (set API_TOKEN env var)");
    }

    println!("\nTODO: Implement actual API calls here");
    println!("  - Fetch notes from Joplin");
    println!("  - Send data to FastAPI backend");
    println!("  - Handle errors and retries");
}

// TODO: Implement API client
// - Joplin API client
// - Error handling for API failures
// - Rate limiting
// - Authentication
