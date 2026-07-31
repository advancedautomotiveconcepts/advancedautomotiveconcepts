document.addEventListener('DOMContentLoaded', function () {
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  var burgerBtn = document.getElementById('burgerBtn');
  var mobileMenu = document.getElementById('mobileMenu');
  if (burgerBtn && mobileMenu) {
    burgerBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = mobileMenu.classList.toggle('open');
      burgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      burgerBtn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        burgerBtn.setAttribute('aria-expanded', 'false');
        burgerBtn.setAttribute('aria-label', 'Open menu');
      });
    });
    // Keyboard support - Escape key closes the open menu
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        burgerBtn.setAttribute('aria-expanded', 'false');
        burgerBtn.setAttribute('aria-label', 'Open menu');
        burgerBtn.focus();
      }
    });
    // Click outside behavior - closes the menu
    document.addEventListener('click', function (e) {
      if (mobileMenu.classList.contains('open') && !mobileMenu.contains(e.target) && e.target !== burgerBtn) {
        mobileMenu.classList.remove('open');
        burgerBtn.setAttribute('aria-expanded', 'false');
        burgerBtn.setAttribute('aria-label', 'Open menu');
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
