## 2024-07-29 - Mobile Menu Toggle Enhancements
**Learning:** Adding dynamic ARIA label state, outside pointer click listeners, and Escape-key listener to mobile menus provides a highly tactile and accessible experience for all keyboard, screen reader, and pointer users on mobile viewports.
**Action:** When implementing mobile burger menu toggles, always ensure: (1) `aria-label` updates dynamically between "Open menu" and "Close menu", (2) pressing "Escape" closes the menu and returns focus to the trigger button, and (3) clicking outside closes the menu seamlessly.
