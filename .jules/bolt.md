## 2025-07-31 - Initializing Performance Optimizations
**Learning:** Found that layout shifts (CLS) on static landing pages are heavily impacted by missing image dimensions, and loading below-the-fold content images eagerly causes unnecessary initial resource requests and slows down DOMContentLoaded/First Contentful Paint.
**Action:** Always provide explicit width and height attributes on `<img>` elements alongside `loading="lazy"` for below-the-fold images to optimize FCP/CLS in lightweight, static environments.
