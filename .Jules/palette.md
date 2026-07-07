## 2025-05-15 - [CSS Specificity and Motion Accessibility]
**Learning:** In a single-file project where CSS rules are defined sequentially, `prefers-reduced-motion` media queries can be overridden if the target element's animation is defined later in the file.
**Action:** Always place accessibility-related media queries at the very end of the style block or use `!important` to ensure they correctly suppress animations as requested by the user.
