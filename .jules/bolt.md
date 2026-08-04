# Bolt's Performance Journal

## 2024-08-04 - Google Fonts Load Latency & Weight Pruning
**Learning:** In static, package.json-less static websites, Google Fonts request payloads are often unoptimized by default and can fetch redundant font weights. By explicitly defining only the required weights (Oswald: 500, 600; Inter: 400; JetBrains Mono: 600) and adding `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`, handshake latency and page FCP are significantly improved. Corresponding CSS selectors with weight 700 must be modified to 600 to prevent layout-costly faux-bold rendering.
**Action:** Always audit font weight usages in CSS and HTML when optimizing Google Fonts connections, change 700 weight references to match pruned 600 weights, and verify with a python-based `html.parser.HTMLParser` syntax check.
