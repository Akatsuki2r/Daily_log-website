//! Pipeline - Data processing pipeline for Daily Log
//!
//! This is the main entry point for the Rust data pipeline.
//! It coordinates fetching data from external sources (Joplin),
//! cleansing, parsing, and shaping the data for the application.

mod api;
mod cleansing;
mod parsing;
mod shaping;

/// Main entry point for the pipeline
///
/// Currently demonstrates the module structure.
/// Run with: `cargo run` from the Pipeline directory
fn main() {
    println!("=== Daily Log Pipeline ===\n");

    // Run the API request module
    api::requests::run();

    println!("\nPipeline modules loaded:");
    println!("  - api: External API integration");
    println!("  - cleansing: Data cleaning");
    println!("  - parsing: Content parsing");
    println!("  - shaping: Data transformation");
}
