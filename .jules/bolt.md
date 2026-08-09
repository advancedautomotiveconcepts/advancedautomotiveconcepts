# Bolt Performance Journal

## 2026-07-11 - Initial Setup & Base Performance Auditing
**Learning:** Found that the static HTML site does not have layout dimensions set on images, resulting in high CLS (Cumulative Layout Shift) when images load. Furthermore, unnecessary Google Font weights (Oswald 400, 700; Inter 500, 600, 700) are requested but unused, and preconnect to the font delivery domain is missing.
**Action:** Add explicit `width` and `height` attributes to all image elements, add `height: auto` globally to the image CSS to avoid distortion, implement native `loading="lazy"` on all below-the-fold images, preconnect to `fonts.gstatic.com` with `crossorigin`, and prune Google Font weights to Oswald (500, 600), Inter (400), and JetBrains Mono (600).
