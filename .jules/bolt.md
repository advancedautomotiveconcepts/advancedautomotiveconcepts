# Bolt's Performance Journal

This journal contains critical codebase-specific performance learnings.

## 2025-08-01 - Initial Setup
**Learning:** Found that the project is a static HTML/CSS website with no packaging/bundling pipeline. Standard `pnpm` command environment is not present because there is no `package.json`.
**Action:** Focus on direct, high-impact HTML/CSS frontend optimizations like explicit image dimensions (to prevent Cumulative Layout Shift - CLS) and lazy loading below-the-fold images.
