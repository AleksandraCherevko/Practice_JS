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

const buttonRef = document.querySelector(".js-button");
const handleBtnClick = function () {
  console.log("Клик по кнопкe");
};

buttonRef.addEventListener("click", handleBtnClick);
