## 2024-07-27 - Accessible Interactive Navigation Overlays
**Learning:** For interactive overlays like mobile navigation menus, baseline accessibility (ARIA toggles) is insufficient if the user cannot naturally exit or control the state. Elevating the experience with Escape key dismissal (returning focus) and outside clicks ensures a fully intuitive and screen-reader/keyboard-friendly interaction.
**Action:** Always implement dynamic `aria-label` switching, outside-click close, and 'Escape' key escape-hatch handlers for overlay menus and panels.
