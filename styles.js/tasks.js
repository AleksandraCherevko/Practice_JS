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

// №9Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

const number = 12499373;
const value = number.toString();
const firstNumber = value[0];
console.log(firstNumber);

const lastNumber = value.slice(value.length - 1);
console.log(lastNumber);

const theSum = Number.parseInt(firstNumber + lastNumber);
console.log(theSum);
