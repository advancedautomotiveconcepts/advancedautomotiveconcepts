## 2025-03-05 - Enhancing Mobile Menu Keyboard & Pointer Accessibility
**Learning:** Standard mobile burger buttons toggle menu visibility but often lack screen-reader-friendly dynamic state descriptions (like toggling `aria-label` between 'Open menu' and 'Close menu'), keyboard traps prevention (allowing `Escape` key to dismiss the menu and restore focus to the trigger), and pointer flexibility (closing the menu on clicking outside).
**Action:** When implementing or editing navigation menus, always ensure:
- Dynamic `aria-label` updates on the burger button.
- Document-level `Escape` key listener to close and focus-restore.
- Outside-click dismiss support.
