## 2025-03-05 - [IntersectionObserver optimization]
**Learning:** Initializing an IntersectionObserver to reveal elements on scroll can cause unnecessary background processing during continuous scrolling if elements remain observed after their animations are completed.
**Action:** Always call `observer.unobserve(element)` once the target element has intersected and completed its transition to keep the main thread clean during active scrolling.
