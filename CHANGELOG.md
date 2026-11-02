# Sudaul 90-Day Digital Fitness Coach — Changelog (v22.0)

## 1. Men & Women Dedicated Workouts Section
- **Primary Section**: Elevated Men & Women Workouts to the primary view of the Workouts hub.
- **1-Tap Gender Switcher**: Instant toggle between 👨 Men's Workouts and 👩 Women's Workouts with custom avatar badges.
- **Targeted Muscle Zones**:
  - **Men**: Chest & Arms Power (Bench, Incline, Fly, Pushups, Curls, Kickbacks), Six-Pack Abs & Core (Plank, Deadbug, Climbers, Bird Dog), Athletic Legs (Squats, Goblet, Lunges, Leg Press, RDL), and V-Taper Back & Shoulders (Rows, Cable Rows, Overhead Press, Lateral Raises, Pullover).
  - **Women**: Flat Belly & Slim Waist (Deadbug, Plank, Bird Dog, Climbers), Toned Arms & Posture (Light Curls, Lateral Raises, Shoulder Press, Knee Pushups, Kickbacks), Glute Sculpt & Booty Lift (Glute Bridge, Reverse Lunges, Squats, Goblet Squats), and Lean Thighs & Mobility (Squats, Gentle Stretch, Brisk Walk, RDL).
- **Home vs Gym Compatibility**: 1-tap switcher filters both Men's and Women's routines between bodyweight home exercises and gym equipment.

## 2. Redesigned Modern Exercise Card Display
- **Spacious & High-Contrast Layout (`.excard-clean`)**: Completely replaced the crowded, confusing legacy layout with clean, modern cards.
- **Clear Visual Hierarchy**:
  - High-res photo preview banner with step number badge and `▶ HD` badge.
  - Dedicated target muscle pill (`🎯 Chest & Arms`, `🎯 Flat Belly`, etc.).
  - Bold, high-contrast title in the selected language (Hindi, Punjabi, English).
  - High-visibility Sets & Reps badge (`⚡ 3–4 Sets × 10–12 Reps`) and rest timing (`⏱ 45–60s rest`).
  - Distinct technique guidance box (`💡 Hips back like sitting on a chair`).
  - Clear "Watch HD Video & Details ›" action button.

## 3. Dedicated Bottom Navigation Sections
- Reorganized the bottom navigation into 5 distinct, intuitive sections:
  1. 🏠 **Home (होम)**: Today's workout, streak, 90-day progress bar, 7-day quick calendar.
  2. 🏋️ **Workouts (कसरत)**: Dedicated Men & Women workouts, 90-day schedule, and stretching studio.
  3. 🧘 **Yoga (योगा)**: Dedicated Yoga Studio with Surya Namaskar (12 steps), 10 Master Asanas, Cool-down, Spine care, Pranayama breathwork, and 432Hz ambient sound drone.
  4. 🥗 **Diet (डाइट)**: 5 daily home meals, winter menu, water tracker, and food swaps.
  5. 🤖 **Coach (कोच)**: Instant answers for muscle soreness, low workout time, outside food, and joint care.

## 4. Cache & Offline Performance (v22.0)
- Bumped Service Worker cache name to `sudaul-v22` and asset queries to `?v=22`.
- Zero 404 cache aborts, resilient offline loading, and automatic PWA installation prompts.
