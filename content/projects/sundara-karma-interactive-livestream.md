---
title: Sundara Karma interactive live stream
subtitle: >-
    The world's first interactive live-streamed concert
date: 2017-05-26
thumb_image: images/projects/sundara-livestream.jpg
thumb_image_alt: Sundara Karma interactive live stream concert at Albert Hall Manchester for Dot To Dot Festival 2017. Take control of the show.
image: images/projects/sundara-livestream.jpg
image_alt: Sundara Karma interactive live stream concert at Albert Hall Manchester for Dot To Dot Festival 2017. Take control of the show.
layout: project
featured: true
---

### WORLD FIRST!
***This project was the world's first interactive live streamed concert.***

### Brief
In 2017, our team was approached by [RCA Records UK](https://www.rca-records.co.uk/) and Sony Music's in-house video production team, and asked if it would be possible to create an interface for an interactive live stream. [Sundara Karma](https://sundarakarma.com/) were booked to headline [Dot To Dot Festival](https://www.dottodotfestival.co.uk/), and their set was due to be live-streamed on the Facebook page of digital content publisher, [The Hook]().  

During the transmission of the concert, they wanted viewers to be presented with several multiple-choice questions as an overlay in the bottom-third of the screen, and to have some mechanism by which they could submit their vote. The questions would pertain to actions the band would carry out during the show.  

The desired outcomes were increased social engagement and viewer numbers on the live stream, as well as creating something new.

### Solution
After some testing, we realised that it would be possible to use Facebook's built-in reaction emojis (like, wow, haha etc.) as a way for viewers to respond to the questions being displayed on screen.  

<iframe width="560" height="315" src="https://www.youtube.com/embed/10T1Ef--kFE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Facebook reactions were only about a year old at the time, so they still had significant influence on virality in Facebook's news feed algorithm. Put simply, when a user reacted to a public post, it would be displayed in the news feeds of a subset of that user's friends. Each time they reacted to the post, it would be upweighted in those feeds. In these circumstances, encouraging users to react multiple times to a single post could exponentially increase its virality in a short space of time.  

We created a webpage that displayed the questions, answers and corresponding reactions over a transparent background. Each time the website was clicked it would alternately show the next set of questions/answers/reactions, or a blank page. The video director added this page as a layer in OBS, over the top of the live video feed, and this was sent out on the live feed. The webpage also used the post ID of the live stream to pull reaction stats in real-time from the Facebook API, so these could also be shown on screen to viewers.  

### Results
* **Over 100k streams**
* **15k unique interactions**
* **Over 1,000 hours of combined viewing time**