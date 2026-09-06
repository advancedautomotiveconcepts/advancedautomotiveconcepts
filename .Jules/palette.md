## 2026-09-06 - Mobile menu keyboard dismiss and ARIA state sync
**Learning:** Toggle components like mobile navigation drawers often manage visual state without updating screen reader accessible labels or providing standard keyboard dismiss controls (e.g., `Escape` key).
**Action:** When working with expandable UI overlays, ensure dynamic toggling of `aria-label` / `aria-expanded` and wire an `Escape` key handler that restores focus to the trigger element.
