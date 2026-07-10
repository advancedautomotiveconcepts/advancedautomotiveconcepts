## 2024-07-10 - Initial Setup
**Learning:** The project is a single-page static website with a large inlined base64 image, causing a heavy initial HTML payload.
**Action:** Prioritize optimizations that reduce main-thread work or improve resource discovery, while being mindful of the large HTML size.
## 2024-07-10 - IntersectionObserver Optimization
**Learning:** For single-fire scroll animations, IntersectionObserver continues to monitor elements even after they have intersected, consuming main-thread cycles during scroll events.
**Action:** Always call `unobserve(entry.target)` inside the IntersectionObserver callback once the desired state (e.g., adding a CSS class) is reached.
