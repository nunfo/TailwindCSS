const hamburgerMenu =  document.querySelector('.hamburger-menu');
const navBack = document.querySelector('.back');
const navFront = document.querySelector('.front');

const btnFeatures = document.querySelector('.features-btn');
const imgFeatures = document.querySelector('#features-img');
const ulFeatures = document.querySelector('.features-ul');

const btnCompany = document.querySelector('.company-btn');
const imgCompany = document.querySelector('#company-img');
const ulCompany = document.querySelector('.company-ul');

hamburgerMenu.addEventListener('click', () => {  
  hamburgerMenu.classList.toggle('active');
  navBack.classList.toggle('active');
  navFront.classList.toggle('active');
});

btnFeatures.addEventListener('click', () => {   
  ulFeatures.classList.toggle('active');
  if (ulFeatures.classList.contains('active')) {
    imgFeatures.src = './images/icon-arrow-up.svg';
  } else {
    imgFeatures.src = './images/icon-arrow-down.svg';
  };
  if (ulCompany.classList.contains('active')) {
    ulCompany.classList.remove('active');
    imgCompany.src = './images/icon-arrow-down.svg';
  };
});

btnCompany.addEventListener('click', () => {   
  ulCompany.classList.toggle('active');
  if (ulCompany.classList.contains('active')) {
    imgCompany.src = './images/icon-arrow-up.svg';
  } else {
    imgCompany.src = './images/icon-arrow-down.svg';
  };
  if (ulFeatures.classList.contains('active')) {
    ulFeatures.classList.remove('active');
    imgFeatures.src = './images/icon-arrow-down.svg';
  };
});
