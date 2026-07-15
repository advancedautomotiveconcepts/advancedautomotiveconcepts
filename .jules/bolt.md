# Bolt's Performance Journal

## 2025-05-15 - Eliminating CLS and IntersectionObserver Overhead
**Learning:** In static sites without sophisticated build pipelines, Cumulative Layout Shift (CLS) is often caused by missing image dimensions. Adding explicit `width` and `height` to `<img>` tags, even when CSS handles responsiveness, provides the browser with the aspect ratio needed to reserve space. Additionally, `IntersectionObserver` instances that continue to watch elements after they've already transitioned cause unnecessary main-thread load during scrolls.
**Action:** Always audit for missing `width`/`height` on images and ensure `observer.unobserve(entry.target)` is called once the transition state is reached.

## 2025-05-15 - Font Optimization without Build Tools
**Learning:** Google Fonts can be a source of significant render-blocking delay. Using `preconnect` to `fonts.gstatic.com` and manually pruning font weights in the URL (instead of loading entire families) significantly reduces the critical path. Also, missing required weights (like JetBrains Mono 700 for bold code) leads to "faux-bold" which can cause minor layout shifts and poor legibility.
**Action:** Audit font usage and strictly define only required weights in the `<link>` tag.
