## 2026-07-11 - Dynamic ARIA Labels for Interactive Toggles
**Learning:** For interactive elements like mobile menu toggles (burger buttons), providing a static `aria-label` (e.g., "Open menu") is insufficient once the state changes. Screen reader users need to know the current action the button will perform (e.g., "Close menu") when it is already open.
**Action:** Always ensure that toggle buttons dynamically update their `aria-label` in response to state changes, in addition to using `aria-expanded`.
