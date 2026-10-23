## 2023-10-23 - Dynamic ARIA Labeling and Escape Key Handling for Overlay Mobile Menus
**Learning:** Mobile navigation drawers that open over existing content should provide dynamic `aria-label` states ("Open menu" vs "Close menu") and handle the `Escape` key to close the drawer while restoring focus back to the toggle button.
**Action:** Always bind a keydown listener for `Escape` when managing toggled modal/overlay states and return focus to the trigger element when closed.
