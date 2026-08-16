document.addEventListener('DOMContentLoaded', function () {
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  var burgerBtn = document.getElementById('burgerBtn');
  var mobileMenu = document.getElementById('mobileMenu');
  if (burgerBtn && mobileMenu) {
    function setMenuState(open) {
      if (open) {
        mobileMenu.classList.add('open');
      } else {
        mobileMenu.classList.remove('open');
      }
      burgerBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      burgerBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }

    burgerBtn.addEventListener('click', function () {
      var isOpen = !mobileMenu.classList.contains('open');
      setMenuState(isOpen);
    });

    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        setMenuState(false);
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        setMenuState(false);
        burgerBtn.focus();
      }
    });

    document.addEventListener('click', function (e) {
      if (mobileMenu.classList.contains('open') && !mobileMenu.contains(e.target) && !burgerBtn.contains(e.target)) {
        setMenuState(false);
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
