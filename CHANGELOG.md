# Sudaul 90-Day Digital Fitness Coach — Release Audit & Changelog (v19.0)

## 1. Release Folder Hygiene & Structure
- **Zero Draft Pollutions**: All redundant test files, draft scripts (`app-2/3/4.js`, `index-2..5.html`, `styles-2.css`, `sw-2.js`), duplicate manifests, and temporary artifacts have been completely purged.
- **Canonical Release Root**: The project root contains strictly the necessary runtime files:
  - Core App Shell: `index.html`, `app.js`, `styles.css`, `sw.js` (Cache v19), `manifest.json`, `privacy.html`
  - Icons: Direct references to `icon-192.png` (1.5 KB) and `icon-512.png` (4.4 KB)
  - Workouts: Exactly 29 verified real athlete exercise photos (`p_*.jpg`) and 16 HD video clips (`v_*.mp4`)
  - Yoga & Postures: Master yoga poses (`y_*.jpg`) with graceful UI fallbacks
  - Documentation: `CHANGELOG.md` and `YOGA_MASTER_LOG.md`

## 2. Service Worker & Zero-404 Cache Integrity
- **100% Verified Assets**: `sw.js` precache `ASSETS` array lists strictly the 37 essential core assets on disk.
- **Cache Name Bump**: Bumped to `sudaul-v19` to guarantee immediate refresh and purge of stale worker caches.
- **Zero Install Failures**: Automated verification script confirmed 0 missing assets during `caches.open().addAll()`, preventing PWA installation drops.
- **Dynamic Caching**: All videos and supplementary assets are cached on-demand via the fetch handler.

## 3. Truthful Asset Audit
- **Photos**: Exactly 29 exercise photos (`p_*.jpg`) representing all 23 plan exercises plus dual-angle variations.
- **Videos**: Exactly 16 MP4 motion demonstrations (`v_*.mp4`) with smooth loop playback.
- **Yoga Poses**: 10 master yoga postures documented with step-by-step technique, breathing cues, and safety cautions.
- **Fallbacks**: Universal `onerror` handlers implemented on all images so no broken image box ever renders in the UI.

## 4. Strict 90-Day Program Branding
- **Zero 180 Copy**: Thorough regex audit confirms 0 leftover references to "180" or "180-day" in copy, metadata, tips, comments, and share text.
- **Consistent Timeline**: Standardized to 90 Days / 12 Weeks across English, Hindi ("90 दिन का प्लान"), and Punjabi ("90 ਦਿਨਾਂ ਦਾ ਪਲਾਨ").

## 5. Visual Consistency (Option B: Real Human Fitness Athletes)
- Unified visual style across all exercise media: real fitness athletes in dark gym performance wear, crisp contrast, and neutral lighting.
- Replaced missing external asset references in the Women's training card with canonical athlete photo (`p_stretch.jpg` with `p_bridge.jpg` fallback).

## 6. Multilingual & Platform Hardening
- **Anti-Auto-Translate**: Enforced `notranslate` tags and class attributes to prevent browsers from overriding selected Hindi or Punjabi text.
- **Safe-Area Layout**: Mobile notches, dynamic islands, and home indicator bars padded properly with CSS `env(safe-area-inset-*)`.
- **Offline Readiness**: Full functional support for offline training runner, nutrition tracking, water tracker, and progress logs.
