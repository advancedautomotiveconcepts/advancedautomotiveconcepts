# Palette UX Journal

## 2025-01-24 - Form Feedback Accessibility
**Learning:** Asynchronous form feedback (e.g., `#formStatus`) must utilize `aria-live="polite"` to ensure status updates are announced to assistive technologies.
**Action:** Always check for status message containers and ensure they have appropriate ARIA live regions.

## 2025-01-24 - Interactive Toggle Labels
**Learning:** Interactive components like mobile menu toggles (e.g., `#burgerBtn`) must dynamically update their `aria-label` (e.g., toggling between 'Open menu' and 'Close menu') to provide clear context for screen reader users.
**Action:** Ensure `aria-label` is updated in the same logic that toggles the `aria-expanded` attribute.

## 2025-01-24 - Honeypot Field Hiding
**Learning:** The form in `index.html` uses a honeypot input field (`name="_honey"`, class="hp"); it must be hidden from assistive technologies using `aria-hidden="true"` and `tabindex="-1"`.
**Action:** Audit forms for honeypot fields and ensure they are properly hidden from both visual users and screen readers.
