## 2026-10-23 - Unobserve revealed elements in IntersectionObserver
**Learning:** For static/one-time scroll reveal animations, keeping observed DOM elements inside `IntersectionObserver` after they intersect causes continuous main-thread evaluation during user scrolling.
**Action:** Always call `obs.unobserve(e.target)` immediately after applying the target visibility class in `IntersectionObserver` callbacks for one-time animations.
