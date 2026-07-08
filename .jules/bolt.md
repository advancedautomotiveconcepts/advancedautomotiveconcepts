# Bolt's Journal - Critical Learnings

## 2025-07-08 - Font Weight Pruning Caution
**Learning:** Aggressive pruning of Google Font weights can lead to visual regressions if subtle usages (like browser-default bolding or specific UI components) are missed. Even if 'font-weight: 700' isn't explicitly in the CSS, tags like 'strong' or 'b' might trigger a need for it.
**Action:** Always perform a comprehensive audit of all font-family and font-weight declarations, including HTML tags that imply weight, before narrowing the font request.
