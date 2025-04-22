---
title: Mat Plus
subtitle: >-
    A consumer rewards app, giving cashback for purchases in Swedish supermarkets
date: 2024-11-01
thumb_image: images/projects/matplus.jpg
thumb_image_alt: Mat Plus - Swedish consumer rewards app
image: images/projects/matplus.jpg
image_alt: Mat Plus - Swedish consumer rewards app
link: https://matplus.se/
link_icon: fa-globe
layout: project
featured: true
---

### Brief
I was approached by the team at Mat Plus, a Swedish consumer rewards startup, to build their consumer-facing mobile app. The brief was to create an app that enabled users to connect their various supermarket loyalty accounts, import their receipts, earn cashback rewards for certain purchases, and pay that money out to their bank account.

### Solution
[Mat Plus](https://apps.apple.com/se/app/mat-plus/id6504274755) launched in the AppStore in November 2024, and enables users to automatically pull their receipts from ICA, Coop, Willys, and Lidl, with more stores on the way. 

Using a combination of headless browsing, PDF parsing and GTIN-based product mapping, we turn messy receipt data into structured records, down to each individual line item. 

Every week, we load new cashback offers into the app. If you buy a product that matches an active offer — and we can verify the purchase via your connected receipt stream — you earn cashback. That’s it. No hoops to jump through, no scanning barcodes at the till. 

We support logins via BankID and OIDC, and users can link their Swish account to withdraw their cashback balance to their bank account instantly. 

### Tech
Mat Plus is built on a modern stack:
- React Native (Expo) for the iOS app
- Supabase for auth, database and storage
- Ts.ED running in EC2 for our API layer
- Lambdas + SQS to process uploaded receipts using OCR, computer vision, and rule-based filtering
- Swish API for payouts
- Supabase Realtime + Legend State for UI sync and offer updates

Everything is stitched together to feel seamless for the user — connect your stores, go shopping like usual, and get money back if you bought something that happened to be on offer.

### Results
It's still early days, but the response has been promising. In the five months since launch, the app has attracted thousands of users, hundres of thousands of receipts, and millions of data points. Mat Plus was also accepted into the [SSE Business Lab](https://www.hhs.se/en/outreach/sse-initiatives/sse-business-lab) incubator program. 