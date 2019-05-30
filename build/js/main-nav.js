var navCont = document.querySelector('.main-nav__content');
var navToggle = document.querySelector('.main-nav__toggle');

navCont.classList.remove('main-nav__content--nojs');

navToggle.addEventListener('click', function() {
  if (navCont.classList.contains('main-nav__content--opened')) {
    navCont.classList.remove('main-nav__content--opened');
    navCont.classList.add('main-nav__content--closed');
  } else {
    navCont.classList.add('main-nav__content--opened');
    navCont.classList.remove('main-nav__content--closed');
  }
});
