# Bolt's Performance Journal

## 2025-08-05 - Image CLS and Connection Latency Optimization
**Learning:** In static websites without heavy JS runtime bundles or backend dynamic database queries, the most significant performance bottlenecks are Cumulative Layout Shift (CLS) from unmeasured images and network handshakes for external assets like Google Fonts. Specifying explicit dimensions on images allows the browser to pre-allocate aspect ratio boxes, reducing reflows, and using font preconnects reduces handshake latency.
**Action:** Always audit `<img>` tags for missing `width` and `height` attributes and ensure `height: auto` is set in CSS to keep responsive image sizing correct. Preconnect to external asset servers like `fonts.gstatic.com` to parallelize connection negotiation.
