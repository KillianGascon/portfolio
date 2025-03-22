use actix_cors::Cors;
use actix_web::{get, web, App, HttpResponse, HttpServer, Responder};
use anyhow::Result;
use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use std::time::Duration;
use std::sync::Mutex;
use futures::future::join_all;
use std::collections::HashMap;
use std::time::SystemTime;
use std::env;
use actix_web::http;

#[derive(Debug, Serialize, Deserialize, Clone)]
struct Article {
    title: String,
    description: String,
    link: String,
    pub_date: String,
    image_url: Option<String>,
}

#[derive(Debug, Clone)]
struct CachedArticles {
    articles: Vec<Article>,
    timestamp: SystemTime,
}

struct AppState {
    cache: Mutex<HashMap<String, CachedArticles>>,
}

fn extract_image_url(content: &str) -> Option<String> {
    // Try to find wp-post-image first (WordPress style)
    let wp_regex = regex::Regex::new(r#"<img[^>]+class="[^"]*wp-post-image[^"]*"[^>]+src="([^"]+)"#).unwrap();
    if let Some(cap) = wp_regex.captures(content) {
        return cap.get(1).map(|m| m.as_str().to_string());
    }

    // Try to find any image with specific classes
    let class_regex = regex::Regex::new(r#"<img[^>]+class="[^"]*(?:featured|main|hero|thumbnail)[^"]*"[^>]+src="([^"]+)"#).unwrap();
    if let Some(cap) = class_regex.captures(content) {
        return cap.get(1).map(|m| m.as_str().to_string());
    }

    // Try data-src attribute (common in lazy-loaded images)
    let data_src_regex = regex::Regex::new(r#"<img[^>]+data-src="([^"]+)"#).unwrap();
    if let Some(cap) = data_src_regex.captures(content) {
        return cap.get(1).map(|m| m.as_str().to_string());
    }

    // Fallback: try to find any image
    let img_regex = regex::Regex::new(r#"<img[^>]+src="([^"]+)"#).unwrap();
    img_regex.captures(content)
        .and_then(|cap| cap.get(1))
        .map(|m| m.as_str().to_string())
}

fn clean_html(html: &str) -> String {
    // Remove HTML tags but keep the content
    let tag_regex = regex::Regex::new(r"<[^>]+>").unwrap();
    let cleaned = tag_regex.replace_all(html, "");
    
    // Decode HTML entities
    let entities = [
        ("&amp;", "&"),
        ("&lt;", "<"),
        ("&gt;", ">"),
        ("&quot;", "\""),
        ("&#8217;", "'"),
        ("&#8216;", "'"),
        ("&#8220;", "\""),
        ("&#8221;", "\""),
        ("&nbsp;", " "),
    ];
    
    let mut result = cleaned.to_string();
    for (entity, replacement) in entities.iter() {
        result = result.replace(entity, replacement);
    }
    
    // Trim whitespace and normalize spaces
    let space_regex = regex::Regex::new(r"\s+").unwrap();
    space_regex.replace_all(&result, " ").trim().to_string()
}

async fn fetch_feed(url: &str, client: &reqwest::Client) -> Result<Vec<Article>> {
    let content = client.get(url)
        .timeout(Duration::from_secs(5)) // Reduced timeout for faster failure
        .send()
        .await?
        .bytes()
        .await?;
    
    let channel = rss::Channel::read_from(&content[..])?;

    let articles: Vec<Article> = channel
        .items()
        .iter()
        .map(|item| {
            let content = item.content().unwrap_or_default();
            let description = item.description().unwrap_or_default();
            
            let image_url = extract_image_url(content)
                .or_else(|| extract_image_url(description));

            let full_description = if content.is_empty() {
                clean_html(description)
            } else {
                clean_html(content)
            };

            Article {
                title: clean_html(item.title().unwrap_or("No title")),
                description: full_description,
                link: item.link().unwrap_or("#").to_string(),
                pub_date: item.pub_date().unwrap_or("No date available").to_string(),
                image_url,
            }
        })
        .collect();

    Ok(articles)
}

#[get("/api/feeds")]
async fn get_feeds(data: web::Data<AppState>) -> impl Responder {
    let feeds = vec![
        "https://www.defensenews.com/rss/",
        "https://breakingdefense.com/feed/",
        "https://www.darkreading.com/rss/all.xml",
        "https://www.world-nuclear-news.org/rss.aspx",
        "https://www.cyberdefensemagazine.com/feed/",
        "https://threatpost.com/feed/",
    ];

    let cache_duration = Duration::from_secs(300); // 5 minutes cache

    // Check cache first
    let all_articles = {
        let cache = data.cache.lock().unwrap();
        let now = SystemTime::now();
        
        let mut cached_articles = Vec::new();
        let mut feeds_to_fetch = Vec::new();

        for feed_url in &feeds {
            if let Some(cached) = cache.get(*feed_url) {
                if let Ok(elapsed) = now.duration_since(cached.timestamp) {
                    if elapsed < cache_duration {
                        cached_articles.extend(cached.articles.clone());
                        continue;
                    }
                }
            }
            feeds_to_fetch.push(*feed_url);
        }

        drop(cache); // Release the lock before the async operations

        if feeds_to_fetch.is_empty() {
            cached_articles
        } else {
            let mut all_articles = cached_articles;
            
            // Create a shared client for all requests
            let client = reqwest::Client::builder()
                .timeout(Duration::from_secs(10))
                .build()
                .unwrap();

            // Fetch remaining feeds in parallel
            let feed_urls = feeds_to_fetch.clone(); // Clone for later use
            let fetch_futures: Vec<_> = feeds_to_fetch
                .into_iter()
                .map(|url| fetch_feed(url, &client))
                .collect();

            let results = join_all(fetch_futures).await;

            // Update cache and collect articles
            let mut cache = data.cache.lock().unwrap();
            for (feed_url, result) in feed_urls.iter().zip(results) {
                if let Ok(articles) = result {
                    cache.insert(
                        feed_url.to_string(),
                        CachedArticles {
                            articles: articles.clone(),
                            timestamp: SystemTime::now(),
                        },
                    );
                    all_articles.extend(articles);
                }
            }
            all_articles
        }
    };

    // Sort by date
    let mut sorted_articles = all_articles;
    sorted_articles.sort_by(|a, b| {
        let date_a = DateTime::parse_from_rfc2822(&a.pub_date).unwrap_or_else(|_| Utc::now().into());
        let date_b = DateTime::parse_from_rfc2822(&b.pub_date).unwrap_or_else(|_| Utc::now().into());
        date_b.cmp(&date_a)
    });

    // Take only the first 6 articles
    let articles = sorted_articles.into_iter().take(6).collect::<Vec<_>>();

    HttpResponse::Ok().json(articles)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    // Get configuration from environment variables with defaults
    let host = env::var("HOST").unwrap_or_else(|_| "127.0.0.1".to_string());
    let port = env::var("PORT")
        .unwrap_or_else(|_| "8080".to_string())
        .parse::<u16>()
        .expect("PORT must be a number");
    
    println!("Starting server at http://{}:{}", host, port);
    
    let app_state = web::Data::new(AppState {
        cache: Mutex::new(HashMap::new()),
    });
    
    HttpServer::new(move || {
        let cors = Cors::default()
            .allowed_origin("https://portfolio.syntaxlab.fr")  // Allow your frontend domain
            .allowed_methods(vec!["GET", "POST", "PUT", "DELETE", "OPTIONS"])
            .allowed_headers(vec![http::header::AUTHORIZATION, http::header::ACCEPT])
            .allowed_header(http::header::CONTENT_TYPE)
            .max_age(3600)
            .supports_credentials();

        App::new()
            .app_data(app_state.clone())
            .wrap(cors)
            .service(get_feeds)
    })
    .bind((host, port))?
    .run()
    .await
}
