document.addEventListener('DOMContentLoaded', function () {
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  var burgerBtn = document.getElementById('burgerBtn');
  var mobileMenu = document.getElementById('mobileMenu');
  if (burgerBtn && mobileMenu) {
    function closeMenu() {
      mobileMenu.classList.remove('open');
      burgerBtn.setAttribute('aria-expanded', 'false');
      burgerBtn.focus();
    }

    burgerBtn.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.toggle('open');
      burgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (isOpen) {
        var firstFocusable = mobileMenu.querySelector('a');
        if (firstFocusable) firstFocusable.focus();
      }
    });

    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        closeMenu();
      });
    });

    document.addEventListener('keydown', function (e) {
      if (!mobileMenu.classList.contains('open')) return;
      if (e.key === 'Escape' || e.key === 'Esc') {
        closeMenu();
        return;
      }
      if (e.key === 'Tab') {
        var focusables = Array.prototype.slice.call(mobileMenu.querySelectorAll('a, button'));
        if (focusables.length === 0) return;
        var first = focusables[0];
        var last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
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
