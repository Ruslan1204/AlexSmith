const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
  iconMenu.addEventListener('click', function (evt) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_menu-open');
    menuBody.classList.toggle('_menu-open');
  });
}

if (iconMenu.classList.contains('_menu-open')) {
  document.body.classList.remove('_lock');
  iconMenu.classList.remove('_menu-open');
  menuBody.classList.remove('_menu-open');
}
