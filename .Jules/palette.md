## 2025-02-12 - Mobile Menu Toggle Accessibility
**Learning:** Burger-button mobile menus can be keyboard traps and screen reader blind spots if they don't dynamically update their ARIA labels, close on Escape (returning focus to the toggle), or close when clicking outside.
**Action:** Always implement full keyboard and pointer interactions for mobile menu toggles: toggle aria-expanded, toggle aria-label, close on Escape key, close on clicking outside, and return focus to the toggle.
