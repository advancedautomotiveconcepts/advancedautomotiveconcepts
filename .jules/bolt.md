## 2026-08-21 - Unobserve Revealed Elements in IntersectionObserver
**Learning:** Scroll reveal IntersectionObservers that do not call `obs.unobserve(e.target)` upon element intersection continue firing callbacks for every observed node during page scroll, causing unnecessary main-thread overhead.
**Action:** Always call `obs.unobserve(e.target)` inside IntersectionObserver callbacks for one-time visual animations (such as `.fade-up` scroll reveals).
