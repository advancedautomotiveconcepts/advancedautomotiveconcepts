# Bolt's Performance Journal

## 2025-08-10 - Google Fonts Weight Pruning and Preconnect
**Learning:** Requesting unused font weights and styles from Google Fonts adds unnecessary overhead to page-load time. Moreover, referencing font-weight values in CSS that were not requested in the HTML `<link>` (e.g., requesting JetBrains Mono 400 and 600 but using `font-weight: 700` in style.css) forces the browser to synthesize bolding, which causes visual faux-bold rendering and layout inconsistencies. Also, adding a preconnect for `fonts.gstatic.com` with `crossorigin` reduces connection latency significantly.
**Action:** Prune Google Fonts requests in HTML to only the specific weights used on the site, add the necessary `gstatic` preconnect tag, and align CSS `font-weight` properties with the available pruned weights.
