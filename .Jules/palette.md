# Palette UX Journal

## 2025-02-15 - Enhancing Mobile Menu Accessibility & Keyboard Navigation
**Learning:** Standard mobile menu toggles often lack screen reader updates (such as aria-label reflecting state) and keyboard dismissibility, which are essential for users relying on assistive technologies or keyboard navigation.
**Action:** Always ensure that any burger/mobile menu toggle dynamically switches its `aria-label` between 'Open menu' and 'Close menu', closes on escape key (returning focus to the button), and closes when clicking outside the menu area.
