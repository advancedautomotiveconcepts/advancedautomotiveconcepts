## 2026-08-29 - Unobserving Scroll Reveal Elements
**Learning:** Continuous tracking of elements with IntersectionObserver after scroll-reveal animations completes unnecessarily consumes main-thread layout and intersection calculation cycles during scrolling.
**Action:** Always call `observer.unobserve(element)` immediately after applying reveal classes to elements that only animate into view once.
