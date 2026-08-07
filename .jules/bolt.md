# Bolt Performance Journal

This journal records critical performance insights and codebase-specific patterns for the Safelink website.

## 2025-03-04 - Cumulative Layout Shift & Resource Optimization
**Learning:** Adding explicit image dimensions and lazy loading below-the-fold images is a non-breaking, standard performance optimization that drastically reduces CLS and reduces initial page load size for static sites.
**Action:** Always provide explicit width and height on img tags in static sites alongside global max-width: 100% and height: auto in the stylesheet to avoid layout reflows during image loading.
