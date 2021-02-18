---
title: Little Mix BRIT Awards GIF Generator
subtitle: >-
    Browser-based GIF generator for Little Mix's BRITs campaign.
date: 2019-02-01
thumb_image: images/projects/lm-woman-like-me.jpg
thumb_image_alt: Little Mix Woman Like Me
image: images/projects/lm-woman-like-me.jpg
image_alt: Little Mix Woman Like Me
badge: images/badges/brits.gif
badge_link: https://www.brits.co.uk/news/brits-2019-winners
badge_position: bottom-right
layout: project
featured: true
---

### Brief
In 2019, [Little Mix](https://little-mix.com) were nominated for Best Video at the 2019 [BRIT Awards](https://www.brits.co.uk) for ['Woman Like Me'](https://www.youtube.com/watch?v=fSOpiZo1BAA) featuring **Nicki Minaj**, with the winner to be decided by a public vote on Twitter. Any Tweet containing the hashtag [#BRITVIDLITTLEMIX](https://twitter.com/search?q=%23BRITVIDLITTLEMIX) would be counted as a qualifying vote (limited to one vote per user in any 24 hour period).  

The band's label, [RCA Records UK](https://www.rca-records.co.uk/), consulted with the team at [4th Floor Creative](https://4thfloorcreative.co.uk/) to brainstorm and deliver a browser mechanic that would encourage fans to vote. Rather than simply encouraging them to Tweet on their own, the band and label were keen for there to be an interactive element involving the video, which would deliver some value to the fan. Increasing the number of views on the official video on YouTube was desirable but not essential.

### Solution
We decided to build a GIF generator that allowed fans to create a GIF from their favourite section of the video, and share it on Twitter with the voting hashtag (thus constituting a vote). Fans would interact with an embed of the official video (via the [YouTube Player API](https://developers.google.com/youtube/iframe_api_reference)) via a custom scrub bar that allowed the user to select their desired starting point, and a dropdown menu to select their desired GIF duration. 

Once the user was happy with their selected GIF, they would click the call-to-action button and be taken to a pre-loaded Tweet (either in the app on mobile, or in browser on other devices). The Tweet contained a link to their created GIF, and some text promoting the mechanic (including the all-important voting hashtag). 

<iframe width="560" height="315" src="https://www.youtube.com/embed/51_ZHOdD3ZQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

We realised early-on that the compute cost of generating the GIFs on-the-fly could be astronomical because of the band's large fanbase. Instead we wrote a script that calculated all possible permutations ahead of time, and rendered the GIFs using FFmpeg. These pre-made GIFs were stored with an indexed naming convention that allowed us to identify the correct GIF based on a user's input decision.

The links contained in the pre-loaded Tweets pointed to a page that reads the referrer header and, if it's Twitter, renders the relevant Open Graph tags to display the GIF in the Twitter timeline. All other referrers would result in a redirect to the site's homepage.

### Results
* **Helped the band win a BRIT Award**
* **Generated 18k votes**
* **Responsible for 409% increase in website traffic**

**NB:** Unfortunately this experience is no longer available online