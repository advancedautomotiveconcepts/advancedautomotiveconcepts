# Bolt's Journal - Critical Learnings

## 2026-10-19 - Unobserve IntersectionObserver targets post-reveal
**Learning:** Continuing to observe DOM elements after one-way CSS animations (like `.fade-up` scroll reveals) adds unnecessary main-thread intersection checks on scroll events.
**Action:** Always call `observer.unobserve(entry.target)` in `IntersectionObserver` callbacks immediately after applying final animation classes.
