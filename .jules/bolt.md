# Bolt's Performance Journal

## 2024-07-19 - Scroll Reveal IntersectionObserver Optimization
**Learning:** Retaining observed elements in an `IntersectionObserver` after they have already transitioned to their visible state (`.in` class added) results in unnecessary main-thread overhead. Every scroll/intersection event continues to invoke the callback for all registered elements, even though they only need to transition once.
**Action:** Unobserve elements (`observer.unobserve(e.target)`) immediately after they trigger the scroll transition to free up browser main-thread resources during page scrolling.
