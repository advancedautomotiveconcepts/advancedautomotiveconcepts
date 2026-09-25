## 2026-09-25 - Dismissing Collapsible Navigation Overlays with Escape Key
**Learning:** For mobile navigation overlays, handling the `Escape` key to close the menu and returning focus to the toggle button (`#burgerBtn`) is critical for keyboard accessibility and predictable screen reader navigation.
**Action:** When implementing modal/collapsible overlays in lightweight JavaScript, always attach an `Escape` key listener that updates `aria-expanded` and returns focus to the triggering element.
