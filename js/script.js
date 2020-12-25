// MENU SHOW ET HIDDEN
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

//SHOW
navToggle.addEventListener('click', () => {
  navMenu.classList.add('show');
})

//HIDDEN
navClose.addEventListener('click', () => {
  navMenu.classList.remove('show');
})

//ACTIVE AND REMOVE MENU
const navLinks = document.querySelectorAll('.nav__link');

function linkAction() {
  //ACTIVE LINK
  navLinks.forEach( n => n.classList.remove('active'));
  this.classList.add('active');

  navMenu.classList.remove('show');
}

navLinks.forEach(n => n.addEventListener('click', linkAction));