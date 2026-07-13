## 2026-07-13 - [IntersectionObserver Optimization]
**Learning:** For one-time "fade-in" or scroll-reveal animations, failing to call `unobserve` means the browser continues to perform intersection calculations for elements already revealed, wasting main-thread cycles during every scroll.
**Action:** Always call `observer.unobserve(target)` inside the callback as soon as the reveal state is triggered for one-time animations.

## 2026-07-13 - [Single Optimization Scope]
**Learning:** Combining multiple optimizations (e.g., fonts, lazy loading, JS logic) into a single PR complicates review and increases visual regression risks.
**Action:** Strictly adhere to the mission constraint of ONE small performance improvement per mission.

## 2026-07-13 - [Environment Artifact Cleanup]
**Learning:** Verification scripts, logs, and temporary test results can be accidentally committed if not explicitly deleted before submission.
**Action:** Ensure all temporary files and directories created during the verification process are deleted.
