## 2026-07-11 - IntersectionObserver unobserve on scroll reveal
**Learning:** In static content sites with scroll-reveal classes (.fade-up), leaving elements attached to the IntersectionObserver after they have entered the viewport causes the browser to continuously perform intersection calculations against each observed element during every scroll event, wasting main-thread cycles.
**Action:** Always call `obs.unobserve(e.target)` immediately once the element intersects and the entrance class is applied.
