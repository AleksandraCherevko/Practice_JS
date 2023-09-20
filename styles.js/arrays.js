// const cart = [45, 78, 454, 323, 54];
// let total = 0;

// for (const value of cart) {
//   total += value;
// }

// console.log("Total:", total);

// function

// const calculateTotalPrice = function (items) {
//   console.log(items);

//   let total = 0;

//   for (const item of items) {
//     total += item;
//   }

//   return total;
// };

// console.log(calculateTotalPrice([1, 2, 3]));

// задача 2

// напиши функцию logItems(items) для перебора и логирования массива

// const logItems = function (items) {
//     for (const item of items) {
//         console.log(item);

//     }
// };

// logItems(['x', 'z', 'w', 'a']);

// задача 3
// написать функцию для поиска логина
// если логина нет, ввести сообщение "пользователь [логин] не найден",
// если логин есть, ввести сообщение "пользователь [логин] найден",

// const logins = ["fwfdwfw", "cwdqwwede", "dwdqwdqww", "dwfqdfwdw"];

// const findLogin = function (allLogins, loginToFind) {
//   console.log(logins);
//   let message = `пользователь ${loginToFind} не найден`;

//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       message = `пользователь ${loginToFind} найден`;
//     }
//   }

//   return message;
// };

// console.log(findLogin(logins, "hdwygdwhdwh"));
// console.log(findLogin(logins, "dwdqwdqww"));

// уменьшить код
// то есть мы сначала перебираем все что в списке логинс
// потом проверяем если логин совпадает со значением которое нам нужно ввести, то мы возвращаем сообщение, что логин найден
// в любом другом случае, сообщение возвращаем, что логин не найден
// const logins = ["fwfdwfw", "cwdqwwede", "dwdqwdqww", "dwfqdfwdw"];

// const findLogin = function (allLogins, loginToFind) {
//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       return `пользователь ${loginToFind} найден`;
//     }

//   }

//     return `пользователь ${loginToFind} не найден`;
// };
// console.log(findLogin(logins, "hdwygdwhdwh"));
// console.log(findLogin(logins, "dwdqwdqww"));

// используем тернарный оператор

// const findLogin = function (allLogins, loginToFind) {
//   return allLogins.includes(loginToFind)
//     ? `пользователь ${loginToFind} найден`
//     : `пользователь ${loginToFind} не найден`;

//   return message;
// };

// console.log(findLogin(logins, "cwdqwwede"));
// console.log(findLogin(logins, "dfuwhuwh"));

// задача 4 - найти самое маленькое число
// const findSmallestNumber = function (numbers) {
//   let smallestNumber = numbers[0];
//   for (const number of numbers) {
//     if (number < smallestNumber) {
//       smallestNumber = number;
//     }
//   }

//   return smallestNumber;
// };

// console.log(findSmallestNumber([5, 7, 2, 89, 4]));
// console.log(findSmallestNumber([6, 3, 5, 62, -5]));


// spread - распыление
// const numbers = [...[1,2,3], ...[4, 5 ]];
// console.log(numbers);


// const temps = [15, 4,5,34,23,45,78];
// console.log(Math.max(...temps));
// console.log(Math.min(...temps));

// const lastWeekTemp = [1,2,3];
// const currentTemp = [4,5,6];
// const nextWeek = [7,8,9];

// const allTemps = [...lastWeekTemp, ...currentTemp, ...nextWeek];
// console.log(allTemps);


// /дестроктуризация

// const rgb = [293, 995, 89];
// const [red, green, blue] = rgb;

// console.log(red, green, blue);