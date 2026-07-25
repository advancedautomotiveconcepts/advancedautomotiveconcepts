## 2026-07-25 - IntersectionObserver Unobserve Optimization
**Learning:** Continuous tracking of elements via IntersectionObserver triggers continuous main-thread evaluation even after transitions have completed. This causes unnecessary main-thread overhead during scroll. Unobserving elements after they transition dramatically reduces this processing.
**Action:** Always call `observer.unobserve(entry.target)` in the intersection callback when the transition/revelation is a one-time event.
