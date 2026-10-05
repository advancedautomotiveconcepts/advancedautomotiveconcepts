## 2025-10-05 - Escape Key & Focus Restoration for Mobile Overlays
**Learning:** For overlay menus and flyouts, keydown listeners for `Escape` must explicitly close the element, sync ARIA attributes (`aria-expanded`), and call `.focus()` on the toggle button to ensure keyboard focus isn't lost in the DOM.
**Action:** Always pair `Escape` key close handlers with explicit focus restoration to the trigger element (`burgerBtn.focus()`).
