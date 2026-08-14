# Palette's Journal

## 2025-02-14 - Interactive and Accessible Mobile Menu
**Learning:** A standard burger-button mobile menu often lacks important accessibility markers during dynamic interactions. Updating `aria-expanded` is good, but dynamically updating `aria-label` (between 'Open menu' and 'Close menu'), listening for the Escape key to close and return focus, and allowing closing when clicking outside make the interaction fully intuitive, delighting keyboard and screen-reader users alike.
**Action:** Always implement comprehensive focus and keyboard event handling, along with context-aware ARIA attributes on mobile disclosure widgets.
