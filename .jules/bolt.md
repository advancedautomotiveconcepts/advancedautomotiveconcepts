## 2025-05-15 - Optimize scroll-reveal IntersectionObserver
**Learning:** For scroll-reveal animations using `IntersectionObserver`, continuing to observe elements after they have already been revealed consumes unnecessary main-thread resources, especially on pages with many animated sections.
**Action:** Always call `unobserve(target)` within the intersection callback once the desired transition or state change has been triggered to improve scrolling performance.
