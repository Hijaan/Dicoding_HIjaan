document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelector('.nav-links');
  const mobileMenu = document.querySelector('.mobile-menu');
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

  // Mobile Menu Button
  mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Dropdown behavior
  dropdownToggles.forEach(toggle => {
    // Hover (desktop)
    toggle.addEventListener('mouseenter', () => {
      if (window.innerWidth > 768) {
        toggle.parentElement.classList.add('dropdown-hover');
      }
    });

    // Click (mobile)
    toggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const dropdown = toggle.parentElement;
        dropdown.classList.toggle('open');

        // Tutup dropdown lain kalau ada yang terbuka
        dropdownToggles.forEach(otherToggle => {
          if (otherToggle !== toggle && otherToggle.parentElement.classList.contains('open')) {
            otherToggle.parentElement.classList.remove('open');
          }
        });
      }
    });
  });

  // Klik di luar dropdown (desktop)
  document.addEventListener('click', (e) => {
    if (window.innerWidth > 768 && !e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.classList.remove('dropdown-hover');
      });
    }
  });

  // Window resize (reset state)
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navLinks.classList.remove('open');
      document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.classList.remove('open');
      });
    }
  });

  // Tutup menu setelah klik link di mobile
  document.querySelectorAll('.dropdown-menu a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove('open');
      }
    });
  });
});
