## 2026-09-26 - Keyboard dismissal and focus management for disclosure menus
**Learning:** When adding keyboard navigation shortcuts (such as pressing `Escape` to close interactive flyouts or mobile menus), closing the menu and resetting accessibility states (`aria-expanded="false"`) is not sufficient. Focus must be explicitly returned to the trigger button (`burgerBtn.focus()`) so keyboard users do not lose their focus position on the page.
**Action:** Always shift focus back to the triggering element when closing modal or disclosure UI elements via keyboard shortcuts.
