const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('nav');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});