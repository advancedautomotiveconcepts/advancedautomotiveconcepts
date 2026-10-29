## 2026-10-29 - Fixed Skip Link Visibility Over Sticky Headers
**Learning:** Standard `position: absolute` skip links can be covered by sticky navigation headers (`position: sticky; z-index: 50`) when focused if no stacking context is established. Using `position: fixed` and `z-index: 9999` ensures the skip link slides into view at the top of the viewport over all header elements.
**Action:** Always use `position: fixed` with a high `z-index` for skip-to-content links on pages with sticky or fixed headers.
