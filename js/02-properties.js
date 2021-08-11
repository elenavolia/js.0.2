const magicBtn = document.querySelector('.js-magic-btn');

/*
 * Свойства элемента (hero)
 * - Изображение
 * - Текст и textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

magicBtn.addEventListener('click', () => {
  const imageEl = document.querySelector('.hero__image');
  console.log('imageEl', imageEl);
  console.log('imageEl.src = ', imageEl.src);
  //переопределение:
  imageEl.src = 'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480'
  imageEl.alt = 'это новый котик!'

  const heroTitleEl = document.querySelector('.hero__title');
  console.log('heroTitleEl', heroTitleEl);
  heroTitleEl.textContent = 'поймался!'



/*
 * Атрибуты
 * - get(имя-атрибута)
 * - set(имя-атрибута)
 * - remove(имя-атрибута)
 * - has(имя-атрибута)
 */
console.log(imageEl.getAttribute('src'));
  console.log(imageEl.src);
  // imageEl.removeAttribute('src');
  console.log(imageEl.hasAttribute('src'));

});
/*
 * Data-атрибуты
 */
const actions = document.querySelectorAll('.js-actions button');
console.log('actions', actions);
console.log('actions2', actions[0].dataset.action);
//то же самое длиннее:
console.log('actions3', actions[2].getAttribute('data-action'));

const inputEl = document.querySelector('.js-input');
console.log('inputEl', inputEl.value);
inputEl.value = 'hgjh'

