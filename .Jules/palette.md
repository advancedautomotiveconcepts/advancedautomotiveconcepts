# Palette's UX and Accessibility Journal

## 2025-08-05 - Mobile Menu Focus Management and Escape Key Support
**Learning:** When building modern responsive websites, mobile navigation overlays often lack keyboard accessibility. Screen reader users and keyboard-only users can find themselves trapped or unable to close menus unless standard expectations are met, such as closing on Escape press and returning focus to the trigger button, as well as changing the button's ARIA label.
**Action:** Always implement explicit Escape key and click-outside handling for modal overlays and mobile menus, and dynamically update `aria-label` attributes to accurately reflect the element's current toggled state.
