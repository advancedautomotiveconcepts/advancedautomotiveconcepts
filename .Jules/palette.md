## 2026-09-30 - Focus restoration on mobile navigation overlay dismiss
**Learning:** When dismissing full-width or toggle-based mobile navigation menus via keyboard (`Escape`), screen reader and keyboard focus can be lost or reset to `document.body` unless explicitly restored to the triggering element (`#burgerBtn`).
**Action:** Always pair `Escape` key listeners on navigation overlays with focus restoration (`triggerEl.focus()`) and ARIA state updates (`aria-expanded="false"`).
