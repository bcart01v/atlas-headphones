// JavaScript to handle the hamburger menu toggle
function toggleMenu() {
    const hamburger = document.getElementById('hamburgerMenu');
    const navigationMenu = document.getElementById('navigationMenu');
  
    hamburger.classList.toggle('change');
    navigationMenu.classList.toggle('active');
  }
  