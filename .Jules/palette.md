## 2025-10-12 - Mobile Menu Escape Key & Focus Restoration
**Learning:** Adding an Escape key event listener to popover/overlay components like mobile navigation menus must always restore focus back to the trigger button (`#burgerBtn`) to preserve the screen reader & keyboard user's context in the DOM.
**Action:** Always verify focus restoration (`expect(trigger).to_be_focused()`) when implementing keyboard dismissal handlers for overlay elements.
