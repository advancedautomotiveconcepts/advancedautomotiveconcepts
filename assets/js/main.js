document.addEventListener('DOMContentLoaded', function () {
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle with full keyboard and pointer accessibility
  var burgerBtn = document.getElementById('burgerBtn');
  var mobileMenu = document.getElementById('mobileMenu');
  if (burgerBtn && mobileMenu) {
    function toggleMenu(isOpen) {
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
      var isOpen = mobileMenu.classList.contains('open');
      toggleMenu(!isOpen);
    });

    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        toggleMenu(false);
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        toggleMenu(false);
        burgerBtn.focus();
      }
    });

    document.addEventListener('click', function (e) {
      var isClickInsideMenu = mobileMenu.contains(e.target);
      var isClickOnBurger = burgerBtn.contains(e.target);
      if (!isClickInsideMenu && !isClickOnBurger && mobileMenu.classList.contains('open')) {
        toggleMenu(false);
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
