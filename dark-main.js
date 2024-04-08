const darkModeCheck = document.querySelector('#darkmode');

darkModeCheck.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
});