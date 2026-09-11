# Palette UX & Accessibility Journal

## 2025-05-15 - Mobile Navigation Escape Key & Dynamic ARIA Labels
**Learning:** Mobile navigation overlays without `Escape` key listeners or dynamic `aria-label` updates trap keyboard and screen reader users when trying to dismiss navigation menus.
**Action:** Always bind an `Escape` key listener on open modal/navigation menus to close the menu and return focus to the toggle button, and update `aria-label` dynamically between 'Open menu' and 'Close menu'.
