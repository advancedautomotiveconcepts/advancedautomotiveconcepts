## 2026-10-30 - Dynamic Mobile Navigation Menu ARIA and Focus Management
**Learning:** Toggling `aria-expanded` alone on mobile menu triggers is insufficient for screen readers and keyboard users if `aria-label` remains static ("Open menu") or if pressing `Escape` leaves focus stranded inside hidden menu items.
**Action:** Always synchronize `aria-label` ("Open menu" / "Close menu") and implement an `Escape` key listener that closes the menu overlay and explicitly restores focus to the menu toggle button.
