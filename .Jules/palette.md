## 2025-07-17 - Form Field and Validation Clarity in Dealer Inquiries
**Learning:** Asynchronous form status containers (like `#formStatus`) that update dynamically on submission can leave screen reader users disoriented if the container lacks appropriate ARIA live regions (`aria-live="polite"`). In addition, relying purely on HTML5 `required` constraints without visible star indicators (`*`) or standard `aria-required="true"` attributes degrades form usability for both visual and screen reader users alike. Hiding honeypot inputs with `tabindex="-1"` is insufficient for screen readers; they must be explicitly set to `aria-hidden="true"`.
**Action:** When auditing legacy HTML forms, always ensure:
1. `aria-live="polite"` is placed on any dynamic feedback status element.
2. Required fields have explicit visual asterisks and `aria-required="true"` attributes.
3. Anti-spam bot honeypots are fully hidden from screen readers using `aria-hidden="true"`.
