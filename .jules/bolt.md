## 2024-07-11 - Font Weight Pruning Safety
**Learning:** Pruning Google Font weights based only on `font-weight` searches in CSS can lead to visual regressions. HTML elements like `<strong>`, `<b>`, or even `<h1>`-`<h6>` (which might not have an explicit weight set in CSS but inherit browser defaults) may require specific weights (like 700) to avoid 'faux bold' rendering.
**Action:** Always audit both CSS and HTML for weight-implying tags before pruning font requests.
