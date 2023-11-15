// №1 Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.

// let type;
// const number = 20;

// if (number > 0) {
//   type = "положительное";
// } else {
//   type = "отрицательное";
// }

// console.log(type);

// №2 Дана строка. Выведите в консоль длину этой строки.
// const string = "I like JS";
// console.log(string.length);

// №3 Дана строка. Выведите в консоль последний символ строки.

// const string = "I like JS";
// console.log(string.slice(string.length - 1));

// №4 Дано число. Проверьте, четное оно или нет.
// let message;
// const number = 20;

// if (number % 2 === 0) {
//   message = "четное";
// } else message = "нечетное";

// console.log(message);

// №5 Даны два слова. Проверьте, что первые буквы этих слов совпадают.

// const wordFirst = "dog";

// const wordSecond = "open";

// if (wordFirst[0] === wordSecond[0]) {
//   message = "совпадают";
// } else {
//   message = "несовпадают";
// }

// console.log(message);

// №6 Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.

// const word = "будь";
// let lastLetter = word.length - 1;
// console.log(word[lastLetter]);

// №7 Дано число. Выведите в консоль первую цифру этого числа.
// const number = 12499373;
// const value = number.toString();
// console.log(value[0]);

// №8 Дано число. Выведите в консоль последнюю цифру этого числа.
// const number = 12499373;
// const value = number.toString();
// const lastValue = value.length;
// console.log(value.slice(value.length - 1));

// №9 Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

// const number = 12499373;
// const value = number.toString();
// const firstNumber = value[0];
// console.log(firstNumber);

// const lastNumber = value.slice(value.length - 1);
// console.log(lastNumber);

// const theSum = parseInt(firstNumber) + parseInt(lastNumber);
// console.log(theSum);

// №10 Дано число. Выведите количество цифр в этом числе.

// const num = 2365463561;
// const value = num.toString();
// console.log(value.length);

// №11 Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

// const numFirst = 2367216271;
// const numSecond = 2514651456;

// const valueFirst = numFirst.toString();
// const valueSecond = numSecond.toString();

// if (valueFirst[0] === valueSecond[0]) {
//   message = "совпадают";
// } else {
//   message = "несовпадают";
// }

// console.log(message);

// №12 Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.
// const string = "huyuyythg guygugub ughghoj";
// console.log(string.slice(-2, -1));

// №13 Даны два целых числа. Проверьте, что первое число без остатка делится на второе.

// const numFirst = 6;
// const numSecond = 36;

// if (numSecond % numFirst === 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// №14 Выведите в консоль все целые числа от 1 до 100.

// let min = 1;
// let max = 100;

// for (let i = min; i < max; i++) {
//   console.log(i);
// }

//  №14 Выведите в консоль все целые числа от -100 до 0.

// let min = -100;
// let max = 0;
// for (let i = min; i <= max; i++) {
//   console.log(i);
// }

//  №15 Выведите в консоль все целые числа от 100 до 1.

let min = 1;
let max = 100;
