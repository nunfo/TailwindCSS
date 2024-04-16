const hamburgerMenu =  document.querySelector('#hamburger-menu');
const navMenu = document.querySelector('nav');



hamburgerMenu.addEventListener('click', () => {  
  hamburgerMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
});
