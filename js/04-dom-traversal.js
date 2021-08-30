/*
 * Свойства «навигации» по DOM-узлам (взять список)
 * http://fecore.net.ua/books/m5ph3r-javascript/module-07/dom-traversal.html
 */

const navEl = document.querySelector('.site-nav');
//const firstNavItem = navEl.querySelector('site-nav__item');
//быстрый доступ к элементам:
//выбрать 1го
const firstNavItem = navEl.firstElementChild;
console.log('firstNavItem: ', firstNavItem);
//выбрать всех детей
console.log('Children: ', navEl.children);
// последний
console.log('lastNavItem: ', navEl.lastElementChild);




