// const add = function (a, b, c) {
//   console.log(a, b, c);
//   return a + b + c;
// };

// console.log(add(5, 10, 15));

// переделываем в стрелочную функцию. если параметров нет - скобки пустые, если параметр один - можна без скобок.

// const addArrow = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };
// console.log(addArrow(5, 10, 15));

// можно еще и так - неявный возврат:
// const addArrow = (a, b, c) => a + b + c;
// console.log(addArrow(5, 10, 15));

// const fnA = function () {
//   return {
//     a: 5,
//   };
// };

// console.log(fnA());

// чтобы вернуть объект из стрелочной функции даем объект или строку внуть выражения, то есть в скобки

// const arrowFna = () => ({ arrowA: 5 });
// console.log(arrowFna());

// this - внутри стрелочной функции определяется в момент обьявления функции

// const showThis = () => {
//   console.log("this is showThis: ", this);
// };

// showThis();

// Refuctoring

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 45, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 23, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 11, online: true },
// ];
// console.table(players);

//есть массив с переченью плеерс, добавляем еще один столбик где поинс умножены на 0,1

// const updatedPlayers = players.map(function (player) {
//   return {
//     ...player,
//     points: player.points + player.points * 0.1,
//   };
// });

// console.table(updatedPlayers);

// делаем рефокторинг на стрелочную функцию. в скобках выражение, результат которого высчитывается и возвращает объект

// const updatedPlayers = players.map((player) => ({
//   ...player,
//   points: player.points + player.points * 0.1,
// }));

// console.table(updatedPlayers);

// forEach - для перебора массива в колбеке
// function logItems(items) {
//   for (let index = 0; index < items.length; index += 1)
//     console.log(`${index + 1} - ${items[index]}`);
// }

// переписываем, используя стрелочную функцю и метод forEach

// const logItems = (items) => {
//   items.forEach((el, index) => {
//     console.log(`${index + 1} - ${el}`);
//   });
// };

// logItems(["mango", "poly", "ajax"]);
