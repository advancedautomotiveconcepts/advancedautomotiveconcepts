document.addEventListener('DOMContentLoaded', function () {
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  var burgerBtn = document.getElementById('burgerBtn');
  var mobileMenu = document.getElementById('mobileMenu');
  if (burgerBtn && mobileMenu) {
    function toggleMenu(open) {
      var isOpen = typeof open === 'boolean' ? open : !mobileMenu.classList.contains('open');
      mobileMenu.classList.toggle('open', isOpen);
      burgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      burgerBtn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
      if (isOpen) {
        var firstLink = mobileMenu.querySelector('a');
        if (firstLink) firstLink.focus();
      } else if (document.activeElement && mobileMenu.contains(document.activeElement)) {
        burgerBtn.focus();
      }
    }

    burgerBtn.addEventListener('click', function () {
      toggleMenu();
    });

    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        toggleMenu(false);
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
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
