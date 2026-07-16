# BOLT'S JOURNAL - CRITICAL LEARNINGS ONLY

## 2025-07-16 - IntersectionObserver Pruning
**Learning:** The `IntersectionObserver` in `assets/js/main.js` was observing all `.fade-up` elements indefinitely. For a single-entrance animation, this is wasteful as it keeps the browser's intersection engine tracking elements that have already transitioned.
**Action:** Always call `observer.unobserve(target)` once the transition-triggering intersection has occurred to minimize main-thread overhead during scroll.
