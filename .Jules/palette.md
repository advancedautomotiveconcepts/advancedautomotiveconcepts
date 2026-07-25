## 2025-07-25 - Mobile Menu Toggle Accessibility and Interaction
**Learning:** Mobile menu buttons require cohesive ARIA and keyboard/pointer event bindings to be fully accessible. Dynamically managing `aria-label` along with `aria-expanded`, implementing close-on-Escape with focus restoration, and adding click-outside logic ensures that keyboard and screen-reader users have an intuitive navigation experience without getting trapped in open menus.
**Action:** Always implement comprehensive event bindings for responsive overlays (like drawer menus) by:
- Toggling descriptive `aria-label` text matching the expanded state.
- Intercepting the Escape key to close and restore focus.
- Listening for outer clicks to dismiss the overlay gracefully.
