## 2026-09-02 - Skip to Main Content Landmark Structure
**Learning:** In static HTML sites with sticky top headers, a hidden skip link targeting `<main id="main-content" tabindex="-1">` provides essential keyboard accessibility. Ensure `<main>` closes before `<footer>` so site-wide footers remain in the `contentinfo` landmark scope rather than inside `main`.
**Action:** Always place `<a href="#main-content" class="skip-link">` as the first child of `<body>` and wrap page content up to `<footer>` in `<main id="main-content" tabindex="-1">`.
