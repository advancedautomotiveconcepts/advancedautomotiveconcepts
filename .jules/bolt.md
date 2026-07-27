## 2024-07-27 - Unobserving in IntersectionObserver
**Learning:** In a static landing page with many scroll-reveal elements, keeping an IntersectionObserver actively watching all elements even after they have faded in creates unnecessary main-thread overhead during scrolling. Unobserving elements after their transitions are triggered frees up memory and CPU resources.
**Action:** Always call `observer.unobserve(target)` inside the IntersectionObserver callback once the target element has successfully transitioned.
