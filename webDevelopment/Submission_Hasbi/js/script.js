document.addEventListener('DOMContentLoaded', function(){
  const navLinks = document.querySelector('.nav-links');
  const mobileMenu = document.querySelector('.mobile-menu');
  const dropdownToggles = document.querySelector('.dropdown-toggle');

  // Mobile Menu Button
  mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Desktop Dropdown Toggle
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('mouseenter', () => {
      if (window.innerWidth > 768) {
        toggle.parentElement.classList.add('dropdown-hover');
      }
    });
    toggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const dropdown=toggle.parentElement;
        dropdown.classList.toggle('open');

        dropdownToggles.forEach(otherToggle => {
          if (otherToggle != toggle && otherToggle.parentElement.classList.contains('open')){
            otherToggle.parentElement.classList.remove('open');
          }
        });
      }
    });
  });
  document.addEventListener('click', (e) => {
    if(window.innerWidth >768 && !e.target.closest('dropdown')) {
      document.querySelectorAll('.dropdown').forEach(dropdown =>{
        dropdown.classList.remove('dropdown-hover');
      });
    }
  });

  //Window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navLinks.classList.remove ('open');
      document.querySelectorAll('.dropdown').forEach(dropdown=> {
        dropdown.classList.remove('open');
      });
    }
  });
});