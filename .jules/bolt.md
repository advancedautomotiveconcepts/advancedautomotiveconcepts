# Bolt's Journal - Critical Learnings

## 2025-05-10 - Unobserve revealed DOM nodes in IntersectionObserver
**Learning:** Elements styled with scroll-reveal animations (`.fade-up`) only need to transition once into view. Without calling `obs.unobserve(e.target)` after applying the `.in` class, the browser continues tracking intersection events for every element as the user scrolls, leading to unnecessary main-thread observer callbacks on every scroll pass.
**Action:** Always call `obs.unobserve(e.target)` immediately after triggering one-time scroll animations or reveals in IntersectionObserver callbacks.
