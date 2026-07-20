## 2024-07-20 - Unobserve IntersectionObserver Elements After Transition
**Learning:** In static single-page or simple multi-page sites with scroll animation libraries, keeping elements observed after they have finished their transition leads to continuous, redundant IntersectionObserver callbacks during scrolling. Unobserving these elements once triggered prevents overhead and keeps main-thread scrolling responsive.
**Action:** When implementing IntersectionObserver scroll transitions, always call `observer.unobserve(e.target)` as soon as the element is in-view and the state is updated.
