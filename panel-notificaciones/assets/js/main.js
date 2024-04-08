const markAll = document.querySelector('.mark');
const count = document.querySelector('#count');
const posts = document.querySelectorAll('.post');

posts.forEach(post => {
  post.addEventListener('click', () => {
    post.querySelector('.not-read').classList.remove('not-read');
    actualizarContador();
  });
});

markAll.addEventListener('click', () => {
  let notReadElements = document.querySelectorAll('.not-read');
  notReadElements.forEach((notReadElements) => {
    notReadElements.classList.remove('not-read');
  });
  actualizarContador();
});

function actualizarContador() {
  notReadElements = document.querySelectorAll('.not-read');
  count.innerText = notReadElements.length;
}
