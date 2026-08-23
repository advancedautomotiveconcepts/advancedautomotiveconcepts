## 2026-08-23 - Audit CSS/HTML font weight usage before pruning font files
**Learning:** Pruning font weights from Google Fonts imports without keeping standard weights (like 500, 600, 700) for body fonts (e.g. Inter) causes browser faux-bolding on tags (`<strong>`, `<b>`, `<button>`).
**Action:** Always audit both CSS declarations and HTML elements for weight dependencies before removing font weights.
