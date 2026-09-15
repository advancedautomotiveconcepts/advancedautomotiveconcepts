# Bolt's Performance Journal

## Codebase Performance Notes
- Static HTML/CSS/JS site with no Node build pipeline or `package.json`.
- Uses `IntersectionObserver` in `assets/js/main.js` for `.fade-up` scroll animations. Unobserving targets after reveal reduces main-thread scroll callback overhead.
