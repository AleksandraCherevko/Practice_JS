// function checkAge(age) {
//   if (age >= 18) {

//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// checkAge(20);

// Задача 4/32

// Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.
// Проведи рефакторинг кода функции checkPassword используя паттерн «ранний возврат»:
// удали переменную message
// удали else
// код должен работать так же, как и до оптимизации

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";

// if (password === ADMIN_PASSWORD) {
//   return "Welcome!";
// }
// return "Access denied, wrong password!";

//   let message = `Welcome!`
//   for (const passwords of password) {
//     if (password !== ADMIN_PASSWORD) {
//       return message = `Access denied, wrong password!`;
//     }
//   }

//   return message;
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("jqueryismyjam"));

// Задача 5/32
// Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате.
// Она принимает два параметра, значения которых будут задаваться во время её вызова.

// available - доступное количество товаров на складе
// ordered - количество единиц товара в заказе
// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».

// function checkStorage(available, ordered) {
//   const message = `The order is accepted, our manager will contact you`

//   if (ordered === 0) {
//     return `Your order is empty!`;
//   } else if (ordered > available) {
//     return `Your order is too large, not enough goods in stock!`;
//   }

// return message;

// variant 2
//   if (ordered === 0) {
//     return `Your order is empty!`;
//   }

//   if (ordered > available) {
//     return `Your order is too large, not enough goods in stock!`;
//   }

//   return `The order is accepted, our manager will contact you`;
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));

// Задача 6/32
// Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных скобок.
// Имя переменной	Значение переменной
// firstElement	первый элемент массива
// secondElement	второй элемент массива
// lastElement	последний элемент массива

// const fruits = ["apple", "plum", "pear", "orange"];
// console.table(fruits);

// fruits[1] = "firstElement";
// fruits[2] = "secondElement";
// fruits[3] = "lastElement";

// console.table(fruits);

// Задача 7/32
// Переопредели значения элементов с индексами 1 и 3. Замени "plum" на "peach", а "orange" на "banana".

// const fruits = ["apple", "plum", "pear", "orange"];
// console.table(fruits);

// fruits[1] = "peach";
// fruits[3] = "banana";
// console.table(fruits);

// Задача 8/32
// Объяви переменную fruitsArrayLength и присвой ей длину массива fruits используя свойство length.

// const fruits = ["apple", "peach", "pear", "banana"];

// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);

// Задача 9/32
// Объяви две переменные:

// Имя переменной	Ожидаемое значение
// lastElementIndex	Индекс последнего элемента масcива fruits через длина_массива - 1
// lastElement	Значение последнего элемента массива

// const fruits = ["apple", "peach", "pear", "banana"];
// console.table(fruits);

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElement);
// console.log(lastElementIndex);

// Задача 10/32
// Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины.
// Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

// function getExtremeElements(array) {
//   return [array[0], array[array.length - 1]];
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));

// Дополни код функции splitMessage(message, delimiter) так,
// чтобы она возвращала в переменной words результат разделения строки message по разделителю delimiter - массив строк.

// function splitMessage(message, delimiter) {
//   let words = message.split(delimiter);

//   return words;
// }

// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));

// Задача 11/32
// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.
// Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message)
// и цену гравировки одного слова(параметр pricePerWord).
// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

// function calculateEngravingPrice(message, pricePerWord) {
//   const messageArray = message.split(" ");
//   let sum = messageArray.length * pricePerWord;

//   return sum;
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));

// Задача 12/32
// Дополни код функции makeStringFromArray(array, delimiter) так, чтобы она возвращала в
// переменной string результат соединения элементов массива array c разделителем delimiter - строку.

// function makeStringFromArray(array, delimiter) {
//   let string = array.join(delimiter);

//   return string;
// }
// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));

// Задача 13/32
// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.
// Значением параметра title будут строки, слова которых разделены только пробелами
// Все символы slug должны быть в нижнем регистре
// Все слова slug должна быть разделены тире

// function slugify(title) {
// const titleToLowerCase = title.toLowerCase();
// console.log(titleToLowerCase);

// let titleArray = titleToLowerCase.split(" ");
// console.log(titleArray);

// let titleSlug = titleArray.join("-");
// return titleSlug;

// V2
// slug = title.toLowerCase().split(" ").join("-");
// return slug;
// }

// console.log(slugify("English for developer"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

//Задача 14/32

// Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.
// firstTwoEls - массив из первых двух элементов
// nonExtremeEls - массив из всех элементов кроме первого и последнего
// lastThreeEls - массив из трёх последних элементов

// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// const firstTwoEls = fruits.slice(0, 2);
// console.log(firstTwoEls);

// const nonExtremeEls = fruits.slice(1, -1);
// console.log(nonExtremeEls);

// const lastThreeEls = fruits.slice(-3);
// console.log(lastThreeEls);

// Задача 15/32
// Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];

// const allClients = oldClients.concat(newClients);
// console.log(allClients);

// Задача 16/32
// Напиши функцию makeArray(firstArray, secondArray, maxLength)
// для создания нового массива со всеми элементами двух исходных firstArray и secondArray.
// Параметр maxLength содержит максимально допустимую длину нового массива.

// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов.
// В противном случае функция должна вернуть новый массив целиком.

// function makeArray(firstArray, secondArray, maxLength) {
//   let newArray = firstArray.concat(secondArray);

//   if (newArray <= maxLength) {
//     return newArraynewArray;
//   } else {
//     return newArray.slice(0, maxLength);
//   }
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));

// Задача 17/32
// Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.

// const start = 3;
// const end = 7;

// for (let i = 3; i <= end; i += 1) {
//   console.log(i);
// }

// Задача 18/32
// Напиши функцию calculateTotal(number), которая принимает целое число(параметр number)
// и возвращает сумму всех целых чисел от единицы и до этого числа.Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

// function calculateTotal(number) {

//   let total = 0;
//   for (let i = 0; i <= number; i += 1) {
//     total += i;
//   }

//   return total;

// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));

// Задача 19/32
// Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.

// const fruits = ["apple", "plum", "pear", "orange"];

// for (let i = 0; i <= fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

// Задача 20/32
// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел,
// и рассчитывает общую сумму его элементов.Общая сумма элементов должна сохраняться в переменной total,
//  которая возвращается, как результат работы функции.

// function calculateTotalPrice(order) {
//     let total = 0;
//  for (i = 0; i< order.length; i+=1){
//     total += order[i];
//  }
//     return total;
//   }

//   console.log(calculateTotalPrice([12, 85, 37, 4]));
//   console.log(calculateTotalPrice([164, 48, 291]));

// Задача 21/32
// Напиши функцию findLongestWord(string) которая принимает
// произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// function findLongestWord(string) {

//     const wordsString = string.split(' ');
//     let longestWord = ' ';

//     for (const word of wordsString){
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }

//     return longestWord;
//   }

//   console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
//   console.log(findLongestWord("Google do a roll"));

// Задача 22/32
// Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.

// function createArrayOfNumbers(min, max) {
//     const numbersArray = [ ];

//     for (i=min; i<max; i+=1){
//         numbersArray.push(i);
//     }

//     return numbersArray;
//   }

//   console.log(createArrayOfNumbers(29, 34));

// Задача 23/32
// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив,
// в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).

// function filterArray(numbers, value) {
// const numbersArray = [ ];

// for (i = 0; i<numbers.length; i+=1){
//     if (numbers[i] > value){
//        numbersArray.push(numbers[i]);

//     }
// }

// return numbersArray;

//  }
//  console.log(filterArray([1, 2, 3, 4, 5], 3));
//  console.log(filterArray([1, 2, 3, 4, 5], 4));
//  console.log(filterArray([12, 24, 8, 41, 76], 38));

// Задача 24/32
// Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.

// Дополни код функции так, что если:

// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.

// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];
//     return fruits.includes(fruit);

//   }

//   console.log(checkFruit("mandarin"));
//   console.log(checkFruit("plum"));

// Задача 25/32
// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах.
// А числа 0, 1 и 8 присутствуют только в одном из массивов.

// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины
// в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

// function getCommonElements(array1, array2) {

//   const newArray = [ ];
//   for (i=0; i < array1.length; i +=1){
//     if (array2.includes(array1[i])){
//        newArray.push(array1[i]);
//     }
//   }
//   return newArray;
//   }

//   console.log(getCommonElements([1, 2, 3], [2, 4]));
//   console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// Задача 26/32
// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }

//   return total;
// }

// function calculateTotalPrice(order) {
//   let total = 0;
// for (let value of order){
//   total += value;
// }
// return total;
// }

//   console.log(calculateTotalPrice([12, 85, 37, 4]));
//   console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// // Задача 27/32
// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

// function filterArray(numbers, value) {

//   const filteredNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;

// }

// function filterArray(numbers, value){
//   const filteredNumbers = [ ];

//   for (let number of numbers){
//     if (number > value){
//       filteredNumbers.push(number);
//     }
//   }
//     return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// Задача 28/32
// Дополни выражения остатка от деления так, чтобы код проходил тесты.

// const a = 3 % 1;
// console.log(a);

// const b = 4 % 3;
// console.log(b);

// const c = 11 % 4;
// console.log(c);

// const d = 12 % 7;
// console.log(d);

// const e = 8 % 3;
// console.log(e);

// Задача 29/32
// Напиши функцию getEvenNumbers(start, end)
// которая возвращает массив всех чётных чисел от start до end.
//  Чётным считается число которое делится на 2 без остатка (10 % 2 === 0).

// function getEvenNumbers(start, end) {

//   const newArray = [];

//   for (let i = start; i <=end; i+= 1){
//     if (i % 2 === 0 ){
//      newArray.push(i);
//     }
//   }

//   return newArray;
//  }

//  console.log(getEvenNumbers(2, 5));
//  console.log(getEvenNumbers(6, 12));

// Задача 30/32
// Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// console.log(number);

// Задача 31/32
// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:

// возвращала первое число от start до end, которое делится на divisor без остатка
// не использовала оператор break
// не использовала переменную number

// function findNumber(start, end, divisor) {

//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       break;
//     }
//   }

//   return number;

// }

// function findNumber(start, end, divisor) {

//   let number;
//   for (let i = start; i <= end; i +=1){

//   if (i  % divisor === 0){

//       return i;}
//   }
//   }

// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));

// Задача 32/32
// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) -
// проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

// function includes(array, value) {

// for (const item of array){
//   if (item === value) {
//     return true;
//   }
// }

//   return false

// }

// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));

function checkStorage(storage, item) {
  let newMessage = [];
  for (let i = 0; i < storage; i += i) {
    if (storage.includes("item")) {
      newMessage.push(`<item> is available to order!`);
    }
  }
}

console.log(checkStorage(["apple", "plum", "pear"], "plum"));
