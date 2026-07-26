# Palette's Journal - Critical UX/Accessibility Learnings

This journal documents critical, codebase-specific UX and accessibility insights discovered during development.

## 2026-07-26 - Mobile Menu Keyboard and Pointer Focus Trap Mitigation
**Learning:** Mobile menus often contain highly critical navigation targets, yet standard toggles only handle click events without managing ARIA states dynamically or offering intuitive dismissals (such as keyboard Escape keys and document-level background taps). Implementing a full focus-trap can sometimes feel overly restrictive on simpler sites, but dynamic aria-labels, Esc-to-close with focus restoration, and clicking outside are simple, non-intrusive micro-UX enhancements that dramatically boost the accessibility and flow of mobile layouts.
**Action:** Always ensure the mobile burger navigation buttons dynamically toggle `aria-label` along with `aria-expanded`, listen for the Escape key to close the menu (and return focus back to the triggering element to prevent lost keyboard states), and allow the user to click anywhere outside the navigation drawer to close the menu naturally.
