## 2026-08-21 - Dynamic ARIA Label and Keyboard Trapping in Mobile Navigation Menus
**Learning:** Toggle buttons with fixed ARIA labels (`aria-label="Open menu"`) cause confusion for screen reader users when expanded. Combining dynamic `aria-label` updates, `Escape` key listeners with focus restoration, and click-outside dismissal completes mobile overlay accessibility without requiring external modal libraries.
**Action:** Always pair `aria-expanded` updates on navigation toggles with dynamic `aria-label` changes, `Escape` key handlers that restore focus, and outside click listeners.
