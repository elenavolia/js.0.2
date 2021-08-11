const magicBtn = document.querySelector('.js-magic-btn');

/*
 * document.querySelector(selector) и document.querySelectorAll(selector)
 *   selector - любой валидный CSS-селектор
 *
 * Что возвращают?
 */

magicBtn.addEventListener('click', () => {
  const navEl = document.querySelector('.site-nav__item');
console.log('navEl', navEl);

const navlinksEl = document.querySelectorAll('.site-nav__item');
console.log('navlinksEl', navlinksEl);
})



/*
 * Document.querySelector* и Element.querySelector*
 */
