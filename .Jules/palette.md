## 2026-07-13 - Accessible Mobile Navigation and Escape Key Dismissal
**Learning:** Toggling mobile drawer menus requires syncing both `aria-expanded` and state-reflective `aria-label` ("Open menu" vs "Close menu") on icon-only buttons, as well as providing an `Escape` key dismissal handler that returns focus to the toggle button for keyboard navigation.
**Action:** Always ensure disclosure buttons announce their active state/action properly and provide predictable Escape key keyboard dismissal with focus restoration.
