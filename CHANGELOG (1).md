# Sudaul 90-Day Digital Coach — Master Upgrade Changelog

## 1. Plan Structure Adherence (90-Day Coach Preserved)
- **User Preference Honored**: As strictly instructed, kept the plan locked to the selected **90-Day digital coach roadmap** (`3 Months / 13 Weeks / 90 Days`) without forcing unwanted extensions.
- **Phase Roadmap**:
  - **Month 1 (Days 1–28)**: Foundation, joint stabilization, correct exercise mechanics, and baseline stamina.
  - **Month 2 (Days 29–56)**: Strength progression, increased volume, curd/sprouts protein enrichment.
  - **Month 3 (Days 57–90)**: Muscle tone, peak work capacity, and recovery.

## 2. Package Completeness & Deployment Fixes
- **Single Entrypoint**: Unified entry as `index.html`. Removed `manifest.webmanifest` and redundant index references.
- **Single Standard Manifest**: Unified `manifest.json` configured for `#0B1626` dark gym theme, standalone PWA mode, and matching 192x192 / 512x512 launcher icons.
- **Service Worker (`sw.js`)**: Updated to cache version `sudaul-v7` caching shell (`index.html`, `styles.css`, `app.js`, `manifest.json`), icons, and all 29 HD exercise photos offline with network-first fallback.
- **No Broken Media**: Handled missing photos gracefully (e.g. `tri` smoothly displays animated SVG anatomical dummy without broken `<img>` tags). Videos only play if genuine MP4 files exist.

## 3. Interactive Digital Fitness Coach Tab (`Coach`)
- Added a dedicated **Coach** tab accessible directly from the bottom navigation and a prominent card on the Home screen.
- Answers real-time user questions in all 3 languages (EN, Hindi, Punjabi) based on user state:
  - *What is today's workout?*
  - *I only have 25–30 minutes today*
  - *My legs/muscles are very sore*
  - *I ate outside/junk food today*
  - *My weight is not dropping*
  - *How much protein should I eat daily?*
  - *I have knee or joint discomfort*
  - *How much water should I drink?*
- Provides direct deep-links from Coach answers to today's workout, diet, or calorie calculator.

## 4. Daily Workout Upgrades: Share, Download & Soft Skip
- **Share Workout**: Web Share API integration (or automatic clipboard copy) allowing users to share their daily routine.
- **Download Workout**: Downloads a structured `.txt` workout plan for offline printing or saving.
- **Soft Missed-Day Handling**: Added "Skip Day (रेस्ट लें)" button with comforting coach message: *"No problem. Your plan is adjusted. Your 90-day journey is not reset! Take rest, drink water, and bounce back tomorrow."*

## 5. Desi / Punjabi Diet Swaps
- Added **Healthy Desi Food Swaps** section in the Diet tab:
  - Paneer (100g) → 3 Boiled Eggs / 1 bowl thick Dal / 100g Tofu
  - Daliya → Rolled Oats or Poha with roasted peanuts
  - Curd → Fresh Buttermilk (Chaas) or 1 glass warm milk
  - Makhana / Chana → Roasted Moong or boiled sprouts
- Added **Share Diet** and **Download Diet (.txt)** buttons.

## 6. Exercise Form Guides
- Added **Beginner Alternatives** (e.g., knee/wall push-ups, chair squats).
- Added **Harder Progressions** (e.g., decline push-ups, pause squats).
- Added **Share Guide** and **Download (.txt)** for each individual exercise.
