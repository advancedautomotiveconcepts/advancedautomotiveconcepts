## 2025-08-11 - [Mobile Menu Accessibility & Interaction]
**Learning:** Mobile burger buttons often leave ARIA labels static ('Open menu') or lack keyboard/pointer accessibility when open. Dynamically toggling the ARIA label between 'Open menu' and 'Close menu', closing on Escape key press (while restoring focus to the button), and closing on outside clicks ensures a seamless, highly accessible user experience.
**Action:** Always verify mobile navigation menus support dynamic ARIA attributes, keyboard-driven exit patterns (Escape), and pointer-driven exit patterns (outside click).
