## 2026-08-08 - Font Pruning and CLS Reduction
**Learning:** Google Fonts include unneeded heavier weights like 700 when Oswald and Inter are requested, and standard images lack explicit width, height, or lazy-loading properties. By pruning Font weights and providing explicit image dimensions, we eliminate Cumulative Layout Shift (CLS) and save bandwidth.
**Action:** Prune font requests down to 400, 500, and 600, update CSS font weights referencing 700 to 600, insert preconnect connections, and set explicit physical dimensions and lazy loading properties on images.
