# Palette UX Journal

## 2024-07-23 - Interactive Mobile Navigation Menu Accessibility
**Learning:** Mobile burger menus styled natively without focus/blur handlers or escape-key listeners leave screen readers and keyboard users stranded once the menu is open, as they cannot naturally escape the overlay or know that clicking the button will close it without dynamic ARIA labels.
**Action:** Always complement physical class-toggles (like `.open`) with dynamic updates to `aria-label` ('Open menu' <-> 'Close menu'), close-on-escape event listeners, and close-on-outside-click handlers to make mobile overlays accessible, intuitive, and consistent across keyboard/touch modalities.
