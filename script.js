//  for the menu bar

 function toggleMenu() {
      document.getElementById('navLinks').classList.toggle('active');
    }
    function hideMenu() {
      document.getElementById('navLinks').classList.remove('active');
    }
    // Optional: Hide menu when clicking outside on mobile
    document.addEventListener('click', function(e) {
      const nav = document.getElementById('navLinks');
      const toggle = document.querySelector('.menu-toggle');
      if (window.innerWidth <= 900 && nav.classList.contains('active')) {
        if (!nav.contains(e.target) && !toggle.contains(e.target)) {
          nav.classList.remove('active');
        }
      }
    });