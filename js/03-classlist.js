const magicBtn = document.querySelector('.js-magic-btn');
/*
 * Интерфейс classList
 * - add(класс)
 * - remove(класс)
 * - toggle(класс)
 * - replace(старыйКласс, новыйКЛасс)
 * - contains(класс)
 */

const navEl = document.querySelector('.site-nav');
console.log(navEl.classList);
  navEl.classList.add('super-cool');
navEl.classList.remove('site-nav');
magicBtn.addEventListener('click', () => {
  

  navEl.classList.toggle('qew');
  navEl.classList.replace('qew', 'site-nav');

  console.log('contains: ', navEl.classList.contains('site-nav'));

  const currentPageUrl = '/about';

 const linkEl = document.querySelector(
  `.site-nav__link[href="${currentPageUrl}"]`,
);
 
  linkEl.classList.add('site-nav__link--current')


});


