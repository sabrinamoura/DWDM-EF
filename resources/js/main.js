let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
let header = document.getElementsByTagName('header');

navBarToggle.addEventListener('click', function () {   
    mainNav.classList.toggle('active');
    header[0].classList.toggle('active');
});