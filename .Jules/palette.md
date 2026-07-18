# Palette's Journal

## 2024-07-18 - Mobile Menu Keyboard Accessibility
**Learning:** In responsive sites without complex frameworks, mobile menus often lack dynamic ARIA states and keyboard interactions (like the Escape key to close). Enhancing these with vanilla JavaScript provides an immediate boost to accessibility and UX without adding file size or dependency overhead.
**Action:** When working on static sites, audit the mobile menu implementation to ensure `aria-expanded` and `aria-label` are synchronized, and the `Escape` key closes the overlay.
