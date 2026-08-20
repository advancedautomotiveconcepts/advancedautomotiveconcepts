## 2026-08-20 - Mobile Nav Toggle Accessibility in Vanilla JS

**Learning:** Static HTML/JS sites with burger menu toggles often maintain static `aria-label="Open menu"` attributes while toggling `aria-expanded="true"`, causing screen reader confusion. Additionally, keyboard users can become trapped or lose focus context without `Escape` key handling and focus restoration.

**Action:** Always pair `aria-expanded` state changes with dynamic `aria-label` updates ("Open menu" / "Close menu"), explicit `Escape` key listeners that return focus to `#burgerBtn`, and click-outside dismissal handlers.
