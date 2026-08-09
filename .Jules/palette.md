## 2025-08-09 - Mobile Navigation Accessibility
**Learning:** For mobile menu toggles like the burger button, changing aria-expanded is only the baseline. Accessible mobile navigation also requires updating the aria-label dynamically (e.g., 'Open menu' vs 'Close menu'), keyboard esc key trapping to close on escape and return focus, and pointer-outside click handling for standard expectations.
**Action:** Always implement comprehensive aria-label synchronization, keyboard focus recovery, and click-outside checks whenever editing navigation code in legacy or static apps.
