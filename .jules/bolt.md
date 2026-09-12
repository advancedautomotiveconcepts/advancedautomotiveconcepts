## 2026-03-31 - Unobserve Revealed Elements in IntersectionObserver
**Learning:** Elements using `IntersectionObserver` for one-time fade-in animations keep invoking callbacks on subsequent scroll events if they are not unobserved.
**Action:** Always call `obs.unobserve(e.target)` immediately after applying visual reveal CSS classes (`.in`) to stop unnecessary tracking and reduce main thread scroll overhead.
