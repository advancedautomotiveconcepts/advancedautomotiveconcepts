# Bolt's Performance Journal

## 2025-05-18 - Unobserve IntersectionObserver targets on single-trigger animation
**Learning:** For entrance scroll animations (`.fade-up`) that only trigger once, keeping elements observed by `IntersectionObserver` consumes unnecessary observer callbacks and memory during scroll events.
**Action:** Always call `observer.unobserve(entry.target)` immediately after applying the target visibility state/class for single-occurrence scroll animations.
