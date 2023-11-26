'use strict';

let bodyAll = document.querySelectorAll('body');
const books = document.querySelectorAll('.book');
const nameBooks = document.querySelectorAll('h2>a');
const elems = document.querySelectorAll('li');
const ad = document.querySelector('.adv');

const newElems = document.createElement('li');

// 1. Восстановить порядок книг
books[0].before(books[1]);
books[3].before(books[4]);
books[5].after(books[2]);

// 2. аменить картинку заднего фона
bodyAll[0].style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

// 3. Исправить заголовок в книге 3
nameBooks[4].textContent = 'Книга 3. this и Прототипы Объектов';

// 4. Удалить рекламу со страницы
ad.remove();

// 5. Восстановить порядок глав во второй и пятой книг

// Книга 2
elems[3].after(elems[6]);
elems[6].after(elems[8]);
elems[9].after(elems[2]);

//Книга 5
elems[47].after(elems[55]);
elems[50].after(elems[48]);
elems[53].after(elems[51]);

// 6. В шестой книге добавить главу 8
elems[25].append(newElems);
newElems.textContent = 'Глава 8: За пределами ES6';

console.log(bodyAll);
console.log(books);
console.log(nameBooks);
console.log(elems);
console.log(ad);
console.log('Привет');
console.log('Странно');
