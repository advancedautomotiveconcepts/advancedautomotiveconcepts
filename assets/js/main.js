document.addEventListener('DOMContentLoaded', function () {
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  var burgerBtn = document.getElementById('burgerBtn');
  var mobileMenu = document.getElementById('mobileMenu');
  if (burgerBtn && mobileMenu) {
    function toggleMenu(forceClose) {
      var isOpen = forceClose === true ? false : !mobileMenu.classList.contains('open');
      if (isOpen) {
        mobileMenu.classList.add('open');
        burgerBtn.setAttribute('aria-expanded', 'true');
        burgerBtn.setAttribute('aria-label', 'Close menu');
      } else {
        mobileMenu.classList.remove('open');
        burgerBtn.setAttribute('aria-expanded', 'false');
        burgerBtn.setAttribute('aria-label', 'Open menu');
      }
    }

    burgerBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      toggleMenu();
    });

    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        toggleMenu(true);
      });
    });

    // Close on click outside
    document.addEventListener('click', function (e) {
      if (mobileMenu.classList.contains('open') && !mobileMenu.contains(e.target) && !burgerBtn.contains(e.target)) {
        toggleMenu(true);
      }
    });

    // Close on Escape key press
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        toggleMenu(true);
        burgerBtn.focus();
      }
    });
  }

  // Scroll reveal
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-up').forEach(function (el) { observer.observe(el); });
});
