---
title: SonX
subtitle: >-
    A community app for musicians and their superfans
date: 2022-01-14
thumb_image: images/projects/sonx-purple.jpg
thumb_image_alt: SonX mobile app
image: images/projects/sonx.jpg
image_alt: SonX mobile app
link: https://apps.apple.com/in/app/sonx/id6444367391
link_icon: fa-apple
layout: project
featured: true
---

### Inspiration
These days it seems the whole world is talking about "superfans", especially in the music industry, but back in January 2022, it was hard to find anyone who had any idea what they were. Except for myself and [Lee Gray](https://www.linkedin.com/in/lee-gray-b7372156), who realised there was a gap in the market for a platform that brought together stars and their most dedicated hardcore fans. 

Our thesis was simple: **That musicians could make more money per month from a small group of fans on SonX than they could from their whole fanbase on Spotify.**

With our mission defined, Lee and I raised a little capital, packed up our jobs at Sony Music, and set out into the startup world. 

### Solution
The goal of SonX was to empower artists to identify, reward and monetize their biggest fans; giving them meaningful digital relationships without all the noise and trolling of social media, plus an extra monthly revenue stream, while providing fans with unique content and experiences, social proof of their fandom, and a level of access to their favourite artists that just isn't possible on traditional social media.

<iframe width="560" height="315" src="https://www.youtube.com/embed/oQOeHm-2xNk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Tech
SonX and all of its infrastructure was built entirely in AWS. As it was a greenfield project, I first had to create the DevOps artefacts, consisting of a bespoke CI/CD pipeline which managed deployments of back-end infrastructure and a separate pipeline for app builds and submissions. The whole back-end infrastructure was also written in IAC to ensure portability.

The back-end consisted of a Node.js microservice architecture for the business logic, a NoJS database fronted by a GraphQL API to manage the complex user and entity relationships, global app caching and multi-region availability, and custom auth. An implementation of the [Amazon Chime SDK](https://aws.amazon.com/chime/chime-sdk/) enabled artists to host real-time audio chat rooms, and SNS was used for email and push notifications.

For payments, we built out a deep integration with the Stripe API to manage payments and inventory, plus a custom integration with both app stores to manage user subscriptions.

The front-end was built in React Native, with little bits of Kotlin and Objective-C to manage custom features (such as audio and Bluetooth management).

### Results
SonX was accepted into the globally-renowned [Techstars accelerator program](https://www.techstars.com/newsroom/announcing-the-techstars-web3-class-of-2023), and was also selected as a finalist for the [Music Ally SI:X competition](https://musically.com/2022/10/26/music-ally-six-2022-finalists/). After closing a pre-seed funding round of $750,000 and building out the platform, SonX launched in both app stores in May 2023. 

During our beta period we were able to prove our thesis: **all of the artists in our beta earned more money from SonX than they did from Spotify in the same period.**

Over the next 11 months, we onboarded hundreds of artists and thousands of users, and held real-world meet-and-greet events where SonX users spent time hanging out with their favourite artists.

We had some killer features in development, including AI-driven gamification, messaging and campaign management, as well as expanding our offering to venues and festivals. Unfortunately, these never saw the light of day. As with many startups, we ran out of runway, and decided to wind-down the platform in April 2024.

Despite the disappointingly-early end, I'll always be immensely proud of the product and brand that we built. Thanks for the memories, SonX 💜🥲