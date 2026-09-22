## 2026-09-22 - IntersectionObserver Unobserve Optimization
**Learning:** In scroll reveal animations using `IntersectionObserver`, failing to call `obs.unobserve(e.target)` after revealing elements keeps the observer active throughout the browsing session, firing unnecessary callbacks on scroll.
**Action:** Always call `obs.unobserve(e.target)` in `IntersectionObserver` callbacks as soon as one-time scroll reveal targets enter the viewport.
