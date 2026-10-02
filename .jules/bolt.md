## 2026-10-02 - Unobserve elements in IntersectionObserver after animation trigger

**Learning:** `IntersectionObserver` callbacks continue to fire on scroll for observed elements even after CSS animation classes (such as `.in`) are added.
**Action:** Always call `obs.unobserve(entry.target)` as soon as the element enters the viewport when performing one-off entrance animations to free main-thread callback overhead and reduce observer memory tracking.
