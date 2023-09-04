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
