## 2026-07-21 - Unobserving IntersectionObserver elements after triggering
**Learning:** In static pages with multiple scroll-reveal elements, leaving the `IntersectionObserver` active on already visible elements causes unnecessary main-thread overhead and scroll-bound calculations. Once an element has animated/transitioned in, there is no need to keep tracking its intersection status.
**Action:** Call `observer.unobserve(e.target)` once the transition-triggering class (e.g., `.in`) is added to the element. This reduces browser resource usage during subsequent scrolling.
