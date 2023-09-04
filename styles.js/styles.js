// const apples = 45;
// const grape = 135;

// const total = "apples" + " grape";
// console.log(total);
// console.log(apples + grape);
// console.log(apples - grape);

// Задача 2
// Скрипт массы тела: раздели вес в кг на квадрат высоты в метрах. Вес и высота хранятся в переменной
// не как число, а как строка. Индекс массы тела округлить до одной цифры после запятной

// const weight = '88,3'
// const height = '1,98'

// const numberWeight = Number(weight.replace(",", "."));
// const numberHeight = Number(height.replace(",", "."));
// // заменяет строку на цифру, используя Number и запятую меняем на точку через replace

// const bmi = Number(numberWeight / numberHeight ** 2).toFixed(1);
// // numberHeight ** 2 - ввели в квадрат,
// // .toFixed(1) - округлили до 1 цифры
// // Number() - привели к числу

// console.log(bmi);

// Задача 3 - Arrays

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.table(fruits);

// const lastIndex = fruits[1];
// console.log(lastIndex);

// for (let i = 0; i >= lastIndex; i += 1){
// fruits[i] = -1
// };

// for (fruit of fruits) {
//     console.log(fruit);
// }

// Задача 4 - вычислить общую сумма массива

// const cart = [7993, 44, 321, 33455, 2122, 959505, 2293993];
// let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//   total += cart[i];
// }

// console.log("Total:", total);

// Задача 5 - вычислить общую сумма четных чисел в массике

// const carts = [3, 6, 8, 9, 3, 2, 1, 2];
// total = 0;

// for (let i = 0; i < carts.length; i += 1){
//     const cart = carts[i];
//     console.log(cart);

//     if (cart % 2 === 0) {
//         console.log('chetnoe');

//         total += cart;
//         console.log(total);

// }
// }

// cрипт поиска логина

// const logins = ["jhcjen", "diwhdjwmds", "idjuiwjdklw", "duwhudhjwkds"];
// const loginToFind = "diwhdjwmds";
// let message = ` `;

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];
// }

// a)
//   if (login !== loginToFind) {
//     message = `user ${loginToFind} not found!`;
//   } else {
//     message = `user ${loginToFind} found!`;
//   }

// b)

//   if (login === loginToFind) {
//     message = `user ${loginToFind} found!`;
//     break;
//   }

// }
// console.log(message);

// c) - чтобы проверить включает в себя или нет массив значение

// console.log(logins.includes(loginToFind));

// задача 6 - напиши скрипт поиска самого маленького числа

// const numbers = [357474, 445556, 33332, 44335, 4264, 433323, 4332];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }

// console.log('the smallest number is', smallestNumber);

// b) - the biggest number

// let biggestNumber = numbers[0];
// for (const number of numbers) {
//     if (number > biggestNumber) {
//        biggestNumber = number;
//     }
// }

// console.log("the biggest number is", biggestNumber);

// Задача
// объеденить весь скрипт в одну строку, элементов может быть произвольное колличество/ пусть элементы будут разделены запятой

// const friends = ['dwsdw', 'dwfdwdw', 'dwadqwdq'];

// const string = friends.join(',');
// console.log(friends);
// console.log(string);

// Задача
// Напиши скрипт (как ссылки)

// const message = "today is a good day";

// const normolizedTitle = message.toLowerCase();
// console.log(normolizedTitle); - сначала приводим все к нижнему регистру

// const words = normolizedTitle.split(' ');
// console.log(words); - приводим все в массив

// const slug = words.join('-'); - объеденяем в одно и между словами ставим тире/
// console.log(slug);

// b)

// const title = "Top 10 benefits of React framework";
// const titleToLowerCase = title.toLowerCase(title);

// console.log(titleToLowerCase);

// const newArray = titleToLowerCase.split(" ");
// console.log(newArray);

// const newLink = newArray.join("-");
// console.log(newLink);

// c) когда несколько методов записываются в одну строку
// const title = "Top 10 benefits of React framework";

// const newLink = title.toLowerCase( ).split(" ").join('-');
// console.log(newLink);

// задача

// const array1 = [6, 7, 4, 5];
// const array2 = [3, 7, 4, 5];

// let total = 0;
// делаем из двух массисов один через сoncat - перебираем его и выводим общую ссуму
// const numbers = array1.concat(array2);

// for (const number of numbers) {
//   total += number;
// }

// console.log(total);

// задача - удалить одну из карточек. Сначала находим ее индекс через indexOf = оптом через splice удаляем

// const card = [
//   "карточка-1",
//   "карточка-2",
//   "карточка-3",
//   "карточка-4",
//   "карточка-5",
// ];

// const cardToRemove = "карточка-3";
// const index = card.indexOf(cardToRemove);
// console.log(index);

// card.splice(index, 1);
// console.table(card);

// вставить элемент через splice

// const addCard = 'карточка-6'; - даем значение что именно хотим добавить
// const index = 3;

// card.splice(3, 0, 5, 10, 9); - 3 - сколько хотим добавить, 0 - сколько удалить, 5,10,9 - что именно вставляем
// console.log(card);

// удалить элемиент

// const cardToUpdate = "Карточка-4";
// const index = card.indexOf(cardToUpdate); - нашли индекс, на котором стоит Карточка-4

// console.log(index);

// card.splice(index, 1, "обновленная карточка-4"); - сказали чтобы на этом месте стала  "обновленная карточка-4"
// console.log(card);

// задача

// const numbers = [7, 3, 8, 9, 2];
// console.log([7, 3, 8, 9, 2].slice(3));

// задача

// const numbers = [7, 3, 8, 9, 2];
// console.log(numbers.indexOf(4));

// задача

// const numbers = [7, 3, 8, 9, 2];
// console.log(numbers.includes(7));

// задача

// const array1 = [2, 4, 6];
// console.log(array1.concat([1, 3], [5]));

// задача

// const genres = ["Jazz", "Blues"];
// console.log(genres);

// // genres[genres.length] = "RockSRoll";
// // console.log(genres);

// console.log(genres[genres.length - 1]);

// задача

// const values = "8 11";
// const array = values.split("");

// const result = array[0] * array[1];
// console.log(result);

// задача

// const fruits = ["x", "y", "c", "f"];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(fruits);
// }

// задача

// const names = "Sasha, Masha, Glasha";
// const phone = "2333333,455555,6666676";

// const namesList = names.split(",");
// const phonesList = phone.split(",");

// console.log(namesList);
// console.log(phonesList);

// for (let i = 0; i < namesList.length; i += 1){
//     console.log(`${namesList[i]}:${phonesList[i]}`);
// }

// задача
// const string = "Welcome to the future";
// const wordsList = string.trim().split(" ");

// for (let i = 0; i < wordsList.length; i += 1) {
//     console.log(wordsList[i]);

// }

// задача

// const string = "Welcome to the future";
// const wordsList = string.split("").reverse().join("");
// console.log(wordsList);

// задача

// const numbers = [101, 90, 32, 33, 454, 3];
// let smallestNumber = Infinity;
// for (let value of numbers) {
//   if (value < smallestNumber) {
//     smallestNumber = value;
//   }
// }

// console.log(smallestNumber);

// задача

// const months = "Jan, Fab, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec";
// const numbers = "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12";

// const monthsList = months.split(',');
// console.log(monthsList);

// const numbersList = numbers.split(",");
// console.log(numbersList);

// for (let i = 0; i < monthsList.length; i += 1){
//     console.log(`${numbersList[i]}: ${monthsList[i]}`);
// }

// задача

// const numbers = [1, 7, 4, 8, 93];

// let smallestNumber = Infinity;
// for (let value of numbers) {
//     if (value < smallestNumber) {
//       smallestNumber = value;
//     }
// }

// console.log(smallestNumber);

// let highestNumber = -Infinity;
// for (let value of numbers) {
//     if (value > highestNumber) {
//         highestNumber = value;
//     }
// }

// console.log(highestNumber);

// задача

