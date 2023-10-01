const tabNavItems = document.querySelectorAll('.navigation-career__title');
const tabItems = document.querySelectorAll('.body-tabs');

document.addEventListener('click', function (evt) {
  const targetElement = evt.target;
  let currentActiveIndex = null;
  let newActiveIndex = null;

  if (targetElement.closest('.navigation-career__title')) {
    tabNavItems.forEach((tabNavItem, index) => {
      if (tabNavItem.classList.contains('active')) {
        currentActiveIndex = index;
        tabNavItem.classList.remove('active');
      }
      if (tabNavItem === targetElement) {
        newActiveIndex = index;
      }
    });
    targetElement.classList.add('active');
    tabItems[currentActiveIndex].classList.remove('active');
    tabItems[newActiveIndex].classList.add('active');
  }
});


