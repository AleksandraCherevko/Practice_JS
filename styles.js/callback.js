// 1

// const fnA = function (message, callback) {
//   console.log(message);
//   console.log(callback);
//   callback(100);
// };

// const fnB = function (number) {
//   console.log("Это лог при вызове fnB", number);
// };

// fnA("dwijsiqw", fnB);

// 2
// const doMath = function (a, b, callback) {
//     const result = callback(a, b);

//     console.log(result);
//   };

//   const add = function (x, y) {
//     return x + y;
//   };

//   const sub = function (x, y) {
//     return x - y;
//   };

//   doMath(2, 3, add);
//   doMath(12, 3, sub);

// литерал функции

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };

// doMath(2, 3, function (x, y) {
//   return x + y;
// });

// doMath(12, 3, function (x, y) {
//   return x - y;
// });

// кнопке передаем задачу

// const buttonRef = document.querySelector(".js-button");
// const handleBtnClick = function () {
//   console.log("Клик по кнопкe");
// };

// buttonRef.addEventListener("click", handleBtnClick);

// надо передать функцию, которая будет проверять числа в массиве и если оно больше чем 3 - вернется true,
// меньше - false/ Функция - фильтр, которая вызывает callback. Наша задача сделать функцию, в которую нужна
// передать функцию, которая будет что-то проверять: фун-ция получает элемент массива, если он удовл. условие,
// то ф-ция вернет true: callback1 - это условие, коорое передается в коллбек фильтра р1 и вызывается
// как тест на каждой этерации кода

// const filter = function (array, test) {
//   const filteredArray = [];
//   for (const el of array) {
//     console.log(el);
//     const passed = test(el);

//     if (passed) {
//       filteredArray.push(el);
//     }
//   }
//   return filteredArray;
// };

// const callback1 = function (value) {
//   return value >= 3;
// };

// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);

// const callback2 = function (value) {
//   return value <= 4;
// };

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
// console.log(r2);
