// напиши функцию add для сложения призвольного количества аргурментов (чисел) с помощью операции rest

// const add = function (a, b, ...args) {
//   console.log(args);
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5, 6, 7, 8));

// напиши функцию которая:
// первым аргументом принимает массив чисел
// после первого аргумента может быть произвольное количество других аргументов которые будут числами
// функция должна вернуть новый массив в котором будут те аргументы, начиная со второго для которых есть аналог в оригинальном массиве

// const filterNumbers = function (array, ...args) {
//   console.log("array:", array);
//   console.log("args:", args);
//   const uniqueElements = [];

//   for (const element of array) {
//     if (args.includes(element)) {
//       uniqueElements.push(element);
//       console.log(`${element} есть везде`);
//     }
//   }

//   return uniqueElements;
// };
// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
// console.log(filterNumbers([1, 2, 3, 4, 5], 1, 15, 2, 3, 18));
// console.log(filterNumbers([1, 2, 3, 4, 5], 68, 1, 4, 5));

// задача
// function foo(array) {
//     for (let i = 0; i < array.length; i++){
//         array[i] *= 2;
//     }
// }

// const numbers = [1, 2, 3, 4, 5];
// foo(numbers);
// console.log(numbers);

// function add(...args) {
//   console.log(args);
//   let total = 0;

//   for (let arg of args) {
//     total += arg;
//   }
//   return total;
// }

// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));

// function multiply(first, second, ...args) {
//   console.log(first, second, args);
// }

// multiply(1, 2); // 1 2
// multiply(1, 2, 3); // 1 2 [3]
// multiply(1, 2, 3, 4); // 1 2 [3, 4]

// function addOverNum(value, ...args) {
//   console.log(value, args);

//   let total = 0;
//   for (let arg of args) {
//     if (arg > value) {
//       total += arg;
//     }
//   }

//   return total;
// }

// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// console.log(allScores);

// const bestScore = Math.max(...allScores);
// console.log(bestScore);

// const worstScore = Math.min(...allScores);
// console.log(worstScore);

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// const finalSettings = {};

// console.log(finalSettings);

// function getExtremeScores(scores) {
//   const best = Object.keys(Math.max(...scores));
//   const worst = Object.keys(Math.min(...scores));

//   for (const key of scores) {
//     console.log(`${key}:${scores[best]}`);
//   }
// }

// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));
