---
title: Google News Scraper
subtitle: >-
    Lightweight asynchronous scraper for Google News, written in Node
date: 2019-10-15
thumb_image: images/projects/google-news-scraper.jpg
thumb_image_alt: Google News Scraper by Lewis Donovan
image: images/projects/google-news-scraper.jpg
image_alt: Google News Scraper by Lewis Donovan
link: https://github.com/lewisdonovan/google-news-scraper
link_icon: fa-github
layout: project
---

When Google announced they were deprecating their News API, I decided it would be fun to see if it could be partially replicated with a Node web-scraper. This project is the result. *Google News Scraper* uses headless Chrome (running in Puppeteer) to open a browser session with Google News, scrape the article data from the DOM, and return it as a JSON array.

When invoking the search, the user can pass a config object, giving them granular control over the search term, timeframe, URL structure, and even the arguments passed to Puppeteer.

The project has an active community of users, with over 150 stars and 50 forks (including a full translation into Python).