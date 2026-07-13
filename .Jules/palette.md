## 2026-07-13 - [Skip to Content]
**Learning:** A "Skip to Content" link is a critical accessibility feature that allows keyboard-only and screen reader users to bypass repetitive navigation menus. Using `tabindex="-1"` on the target `<main>` element ensures that focus is moved correctly even in browsers that don't natively shift focus to non-focusable elements.
**Action:** Implement a skip link as the first focusable element in the body and use a semantic `<main>` element as the target for every multi-page navigation project.
