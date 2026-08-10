document.addEventListener('DOMContentLoaded', function () {
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  var burgerBtn = document.getElementById('burgerBtn');
  var mobileMenu = document.getElementById('mobileMenu');
  if (burgerBtn && mobileMenu) {
    function toggleMenu(open) {
      if (open) {
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

    // Close menu on Escape key, restoring focus to the burger button
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        toggleMenu(false);
        burgerBtn.focus();
      }
    });

    // Close menu on click outside
    document.addEventListener('click', function (e) {
      if (mobileMenu.classList.contains('open')) {
        var clickedInsideMenu = mobileMenu.contains(e.target);
        var clickedBurger = burgerBtn.contains(e.target);
        if (!clickedInsideMenu && !clickedBurger) {
          toggleMenu(false);
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
