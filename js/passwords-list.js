const navButton = document.getElementById('nav-toggler-button');
const navCollapse = document.getElementById('navbarNav');


navButton.addEventListener('click', function() {
  navCollapse.classList.toggle('show');
});