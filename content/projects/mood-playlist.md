---
title: MOOD Playlist
subtitle: >-
    Playlist generator tailored to both your mood and taste
date: 2021-02-15
thumb_image: images/projects/mood-playlist.jpg
thumb_image_alt: MOOD Playlist logo blue
image: images/projects/mood-playlist.jpg
image_alt: MOOD Playlist logo blue
link: https://moodplayl.ist/
link_icon: fa-globe
layout: project
featured: true
---

### Inspiration
Music is an incredibly emotive art form, and provides not only entertainment but also a means of regulating mood. Like many people working from home during the Coronavirus lockdown, I found that I was listening to music more often. This quickly led to tedium, hearing the same songs over and over again, but I found discovering new music difficult as I didn't want to invest time in music that may or may not fit with the mood I was in (or trying to create) at the time. 

I searched online for a tool that could solve this problem. I found some really great products, but nothing that really cracked the problem. The closest thing was probably Spotify's ___Daily Mix___ playlists, but these are geared towards creating playlists with specific subsets of artists and genres, rather than a cohesive mood. 

I decided to start researching whether or not it was possible and, after gaining some headway, pitched the idea internally at work. [MOOD Playlist](https://moodplayl.ist/) is the result.

### Solution
It was clear that accurately capturing the user's mood, without presenting them with a complicated interface, would be of the utmost importance. I worked with [Yasmina Aoun](https://yasminaaoun.com/), one of our incredibly talented in-house designers, to arrive at an innovative and intuitive experience that allows users to input their mood. 

The next step was to capture their taste profile. My first thought was to have the user to input songs and/or artists that they liked (or that matched the sonic aesthetic of the playlist they were trying to create), but I realised this would likely lead to choice paralysis. Instead, I leveraged the [Spotify Web API](https://developer.spotify.com/documentation/web-api/) to fetch the artists that the user listens to most frequently, display them in the UI, and invite the user to select the ones they thought matched the mood they were trying to create. 

These user's taste profile is then cross-referenced with other datasets to make further taste inferences, and to build several pools of potential tracks. I then wrote a suitability algorithm that filters the tracks and removes any unsuitable ones. Each track pool has a different level of confidence (based on the amount of inferences required in order to generate it), so the suitability algorithm is tweaked in real-time to reflect this. The tracks that successfully pass through the filter are then ranked in order of suitability, and only the best matches actually end up on the playlist, which is then saved into the user's Spotify account.

### Results
Coming soon