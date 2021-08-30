/*
 * - Создание элементов
 * - Вставка узлов: appendChild(elem), insertBefore(elem, nextSibling), append(...elems), prepend(...elems)
 */

/*
 * Создаём заголовок
 */


const titelEl = document.createElement('h1');
titelEl.classList.add('page-title');
titelEl.textContent = 'Это заголовок страницы :)';
console.log(titelEl);
// методы добавления на страницу

//appendChild(elem) - последним эл-том
// document.body.appendChild(titelEl);



/*
 * Создаём изображение
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */

const imageEl = document.createElement('img');
imageEl.src = 'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg';
imageEl.alt = 'valais-alpine-mountains-glacier';
imageEl.width = 320;
// то же самое но длинно:
//imageEl.setAttribute('height', 340);

//console.log('imageEl', imageEl);

//добавление на страницу
//document.body.appendChild(imageEl);

const heroEl = document.querySelector('.hero');

//добавили по одному:
// heroEl.appendChild(titelEl);
// heroEl.appendChild(imageEl);

//добавить всех сразу но независимых:

heroEl.append(titelEl, imageEl);


/*
 * Создаём и добавляем новый пункт меню
 */

const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'Личный кабинет';
navLinkEl.href = '/profile';


//console.log('navItemEl: ', navItemEl);
//console.log('navLinkEl: ', navLinkEl);

navItemEl.appendChild(navLinkEl);
console.log('navItemEl: ', navItemEl);

const navEl = document.querySelector('.site-nav');
//navEl.appendChild(navItemEl);
// присоединять все одним действием!!!!

//сработает как end child:
//navEl.insertBefore(navItemEl, null);

//сработает как first child:
// navEl.insertBefore(navItemEl, navEl.firstElementChild);

//перед последним
//navEl.insertBefore(navItemEl, navEl.lastElementChild);

//перед вторым -- на второе место

navEl.insertBefore(navItemEl, navEl.children[2]);



