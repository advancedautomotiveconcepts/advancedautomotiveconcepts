## 2026-09-16 - Focus management when closing mobile menus via Escape key
**Learning:** Closing modal overlays or mobile menus via the `Escape` key must restore focus to the triggering element (e.g. `burgerBtn`) so keyboard/screen reader users maintain focus position.
**Action:** When adding keydown listeners for `Escape` to close navigation menus, always include `triggerBtn.focus()` along with updating `aria-expanded` and visibility classes.
