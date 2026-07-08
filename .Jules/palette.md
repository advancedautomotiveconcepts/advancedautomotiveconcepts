## 2024-07-08 - [Accessibility] Honeypot and Dynamic ARIA Labels
**Learning:** Honeypot fields (class="hp") should be explicitly hidden from screen readers using `aria-hidden="true"` to prevent confusion for assistive technology users. Additionally, interactive elements like mobile menu toggles must have dynamic `aria-label` attributes that reflect their current state (e.g., "Open menu" vs. "Close menu").
**Action:** Always check for hidden form fields and ensuring dynamic interactive elements update their accessibility labels during state transitions.

## 2024-07-08 - [Performance/UX] Typography Optimization
**Learning:** Requesting unused font weights (like 700 when only 400-600 are used) increases page weight and TTFB. Ensuring `preconnect` links use the `crossorigin` attribute is critical for avoiding double connection overhead for Google Fonts.
**Action:** Audit CSS for actual font-weight usage before defining font import URLs and always include `crossorigin` on font preconnects.
