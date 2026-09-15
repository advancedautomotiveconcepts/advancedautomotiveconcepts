## 2025-05-18 - Communicating Async Form Loading via ARIA Busy
**Learning:** Disabling a submit button and changing its text during async submission visually indicates loading, but setting `aria-busy="true"` explicitly communicates to screen readers and assistive technologies that an asynchronous action is currently in progress.
**Action:** Always set `aria-busy="true"` on submit buttons or status regions during active asynchronous operations, and reset it to `"false"` upon completion.
