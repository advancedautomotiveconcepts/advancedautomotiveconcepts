## 2026-09-29 - Unobserving elements after scroll reveal animation
**Learning:** Scroll reveal elements observed with `IntersectionObserver` continue triggering observer callbacks during scroll events unless explicitly unobserved after their enter animation is triggered, causing unnecessary main-thread overhead.
**Action:** Always call `observer.unobserve(entry.target)` inside the `IntersectionObserver` callback immediately after applying the target's entry class.
