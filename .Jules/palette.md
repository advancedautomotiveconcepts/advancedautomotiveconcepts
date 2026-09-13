# Palette's Journal - UX & Accessibility Learnings

## 2026-09-13 - Focus Trapping & Keyboard Navigation in Mobile Menus
**Learning:** When mobile menus overlay page content without closing modal states, keyboard users can accidentally tab out of the menu into background content, causing confusion and focus loss. Trapping focus within the active menu and handling the Escape key to close and return focus to the toggle button completes the accessibility loop.
**Action:** Always ensure overlay/modal mobile menus handle `Escape` key close and cycle tab focus strictly within interactive menu items.
