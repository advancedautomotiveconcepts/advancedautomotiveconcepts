# Palette's UX & Accessibility Journal

## 2025-02-17 - Mobile Menu Toggle Accessibility and Interaction
**Learning:** For a truly robust responsive mobile layout, the burger button toggle requires not only changing classes and ARIA attributes (like `aria-expanded`), but also ensuring the experience is keyboard-navigable and behaves intuitively for pointer users. This means toggling the `aria-label` between 'Open menu' and 'Close menu', closing the menu on Escape key press (returning focus to the button), and closing on pointer click outside.
**Action:** Always implement these comprehensive mobile navigation handlers to provide seamless keyboard, screen-reader, and mouse/touch interactions.
