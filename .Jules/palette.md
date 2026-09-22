# Palette's Journal - Critical UX & Accessibility Learnings

## 2026-09-22 - Dynamic ARIA Labels and Escape Key Dismissal on Mobile Navigation
**Learning:** Mobile navigation hamburger toggles require both `aria-expanded` state changes and clear `aria-label` dynamic updates ('Open menu' / 'Close menu') to provide contextual clarity to screen reader users. Furthermore, keyboard users expect `Escape` key dismissal for modal/overlay style mobile menus to easily return focus to the trigger element without traversing the entire link list.
**Action:** When working on overlay or dropdown navigation menus, ensure state toggles update both `aria-expanded` and `aria-label`, and always implement global `keydown` handling for `Escape` to close the overlay and restore focus to `#burgerBtn`.
