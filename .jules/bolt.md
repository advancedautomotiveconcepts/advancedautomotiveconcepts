## 2026-10-25 - Unobserve elements in IntersectionObserver after reveal

**Learning:** `IntersectionObserver` callbacks continue tracking target elements even after CSS animation classes (such as `.in`) are applied. Calling `obs.unobserve(e.target)` immediately after revealing an element eliminates unnecessary main-thread observer callbacks on scroll.
**Action:** Always unobserve elements in scroll-reveal observers if animation/visibility transitions are one-way.
