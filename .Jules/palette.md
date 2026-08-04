# Palette Journal

## 2026-08-04 - Mobile Menu Accessibility & Focus Management
**Learning:** In responsive sites without standard library components, custom-built mobile navigation menus often suffer from major accessibility and keyboard interaction gaps, such as lack of Escape key dismissal, focus trapping issues, dynamic label updates, and intuitive pointer interactions (clicking outside).
**Action:** Always implement a complete mobile menu handler that toggles `aria-label` dynamically, dismisses on Escape key (with focus restoration), and supports click-outside handling.
