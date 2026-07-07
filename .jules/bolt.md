## 2025-05-15 - [Google Fonts Optimization]
**Learning:** Google Fonts should be optimized by requesting only the exact weights used in the CSS and adding a preconnect hint for the gstatic CDN to improve Time to First Byte (TTFB).
**Action:** Always audit font weight usage in CSS and ensure both `fonts.googleapis.com` and `fonts.gstatic.com` (with `crossorigin`) have preconnect hints.
