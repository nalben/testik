const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu_mobile');
const closeBtn = document.querySelector('.menu-close');

menuBtn.addEventListener('click', e => {
  e.stopPropagation();
  menu.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('active');
});

document.addEventListener('click', e => {
  if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
    menu.classList.remove('active');
  }
});
