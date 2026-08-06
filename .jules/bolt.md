## 2025-01-25 - Image Dimension and Preconnect Performance Improvements
**Learning:** Adding explicit image width and height attributes in combination with a CSS auto-scaling rule prevents Cumulative Layout Shift (CLS) on static content-heavy sites without causing aspect ratio distortions.
**Action:** Always verify all image dimensions on the filesystem or via metadata, apply them explicitly, and define `max-width: 100%; height: auto; display: block;` in global stylesheets.
