## 2024-07-22 - Mobile Drawer Menu Accessibility and Interactivity
**Learning:** For mobile drawer menus toggle buttons, keeping ARIA states synchronized dynamically is critical. Also, screen-reader and keyboard users benefit greatly when clicking/tapping outside of the menu or pressing the Escape key closes the drawer menu and returns keyboard focus to the toggle button.
**Action:** When working on toggle-based mobile drawer navigation menus, ensure that:
1. `aria-expanded` and `aria-label` are dynamically synchronized on open/close.
2. Clicking outside of the drawer or pressing the Escape key dismisses the menu.
3. Escape key closure returns keyboard focus back to the toggle button to maintain a sensible focus cycle.
4. Legacy JavaScript conventions (using `var` and classic functions instead of ES6 syntax) are maintained when updating legacy projects.
