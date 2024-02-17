// const playlist = {
// name: 'My playlist',
// rating: 5,
// tracks: ['track-1', 'track-2', 'track-3'],
// trackCount: 3,
// }

// playlist.qwe = 5;

// console.table(playlist);
// console.log(playlist.tracks);
// console.log(playlist['rating']);

// 2

// const username = "Mango";
// const email = 'email@email.com';

// const signupData = {
//     username,
//     email,
// }

// console.log(signupData);

// 3

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//     [inputName]: inputValue,
// }

// console.log(colorPickerData);

// 4 - ссылочный тип { } === { }

// const a = {x:1, y:2};
// const b=a;
// console.log(b===a);

// console.log({a:1} === {a:1})

// 5 - методы объекта
// сменить значения

// const playlist = {
//     name: 'My playlist',
//     rating:5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount:3,

//     changeName(newName){
//         console.log('this внутри changeName:', this);
//         this.name = newName;
//     },

//     addTrack(track){
//         this.tracks.push(track);
//         this.trackCount = this.tracks.length;
//     },

//     updateRating(newRating){
//     this.rating = newRating;
//     },
// }

// playlist.changeName('New name');
// playlist.addTrack('New track');
// playlist.updateRating(12);

// console.log(playlist);

// перебор объекта

// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad:3,

// const keys = Object.keys(feedback);
// console.log(keys);

// for (const key of keys){
//     console.log(key);},}

// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad:3,};

//     let totalFeedback = 0;

//     const values = Object.values(feedback);
//     console.log(values);

//     for (const value of values){
//         console.log(value);
//         totalFeedback +=value;
//     }

// console.log('totalFeedback: ',totalFeedback );

// массив объектов

// const friends = [
// {name: 'Mango', online: false},
// {name: 'Kiwi', online: true},
// {name: 'Poly', online: true},
// {name: 'Ajax', online: false},
// ];
// console.table(friends);

// for (const friend of friends){
//     console.log(friend.name);
//     friend.hduwh = 555;
// }

// console.table(friends);

// задача - ищем друга по имени
// - перебираем массив внутри и получаем доступ к значению ней через фор оф
// - если значение нейм равно френднейм - возвращаем "нашли"

// const friends = [
// {name: 'Mango', online: false},
// {name: 'Kiwi', online: true},
// {name: 'Poly', online: true},
// {name: 'Ajax', online: false},
// ];

// const findFriendByName = function (allFriends, friendName) {
//     for (const friend of allFriends){
//         console.log(friend);
//     console.log(friend.name);

// if (friend.name === friendName){
//     return 'FIND!';
// }
// }

// return 'UNABLE FIND'
// };

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Sasha'));

// задача - передать массив всех имен

// const friends = [
// {name: 'Mango', online: false},
// {name: 'Kiwi', online: true},
// {name: 'Poly', online: true},
// {name: 'Ajax', online: false},
// ];

// console.table(friends);

// const getAllNames = function(allFriens){
//     const names = [];
//     for (const friend of friends){
//         console.log(friend.name);
//         names.push(friend.name);
//     }

// return names;
// };

// console.log(getAllNames(friends));

// передаем массив всех имен кто он-лайн

// const getOnlineFriends= function(allFriends){
//     const onlineFriends = [];

//     for (const friend of allFriends){
//       if (friend.online ){
//       onlineFriends.push(friend);
//       }
//     }

//     return onlineFriends;
// };

// console.log(getOnlineFriends(friends));

// передаем массив всех имен кто офф-лайн

// const getOfflineFriends= function(allFriends){

//     const offlineFriends = [];

//  for (const friend of allFriends){
//     if(!friend.online){
//         offlineFriends.push(friend);
//     }
//  }

//    return offlineFriends;
// };

// console.log(getOfflineFriends(friends));

// const number = 'AH47758AM'

// const car = {
// // wheels: 4,
// mark: 'ford',
// model: 'ford mandeo',
// number,
// isFromUSA:true,
// }

// car.wheels = 14;
// car.isFromUAS = false;
// console.log(car);

// const key = 'wheels';
// car[key] = 4;
// console.log(car);

// написать функцию где сохраняются зарплаті всех зарплат
// если объект саларис пустой, результат должен быть 0

// const salaries = {
//     Andrii: 3000,
//     Anna: 1200,
//     Sofa: 2632.
// };

// function getResult(salariesData){
// const values = Object.values(salariesData);

// let totalSum=0;
// for (let value of values){

// totalSum += value;

// }
// return totalSum;
// }

// console.log(getResult(salaries));

// написать функицию которая принимает массив объекта и рядок с названием камня/ функция считает и возвращает общую стоимость камней с именем stoneName

// const stones = [
//     { name: 'Смарагд', price:1300, quantity: 4},
//     { name: 'Діамант', price: 2700, quantity: 3},
//     { name: 'Сапфір', price: 400, quantity: 7},
//     { name: 'Топаз', price: 500, quantity: 10},
//     { name: 'Аквамарин', price: 200, quantity: 8},
// ];

// function calcTotalPrice (stonesList, stoneName){
// for (let stone of stonesList){
// if (stone.name.toLowerCase() === stoneName.toLowerCase()){
//     return stone.price * stone.quantity;
// }
// }

// return `${stoneName} not found`;
// }

// console.log(calcTotalPrice(stones, 'смарагд'));
// console.log(calcTotalPrice(stones, 'dwdwdsw'));

//
// const playlist = {
//     name: 'My playlist',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount:3,

//     changeName(newName){
//         console.log('this', this);
//         this.name = newName;
//     },

//     addTrack(track){
//         console.log('this', this);
//         this.tracks=track;
//     },

//     updateRating(newRating){
//     //    console.log('this', this);
//     //    this.rating = newRating;

//     this.rating = newRating;
//     },
// };
// playlist.changeName('New name');
// console.log(playlist);

// playlist.addTrack('track-4');
// console.log(playlist);

// playlist.updateRating('16');
// console.log(playlist);

// const friends = [
//     {name: 'Mango', online: false},
//     {name: 'Kiwi', online: true},
//     {name: 'Poly', online: true},
//     {name: 'Ajax', online: false},
//     ];

// ищем по имени
// const findFriendByName = function (allFriends, name){
//    for (const friend of allFriends){
//      console.log(friend);
//      console.log(friend.name);

//      if (friend.name ===  'Poly'){
//      return 'Find!';
//      }
//    }
// }

// console.log(findFriendByName(friends, 'Poly'));

// ищем друзей которые онлайн

// const getOnlineFriends = function(allFriends){

//     const onlineFriends = [];
//     for (const friend of allFriends){
//         console.log(friend);
//         console.log(friend.online);

//         if(friend.online){
//             onlineFriends.push(friend);
//         }
//     }

//     return onlineFriends;
// };

// console.log(getOnlineFriends(friends));

// spread - расспыление

// const a = {x:1, y:2};
// const b = {x:0, z:3};

// const c = {
//     ...a, ...b,
// };
// console.log(c);

// значение одинаковой переменной заменяется сверху вниз

// дестроктуризация - нужен чтобы мы могли вызвать разные свойства одного объекта
// playlist

// const playlist = {
//     name: `My playlist`,
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount:3,
// }

// const {rating, tracks, name, trackCount} = playlist;

// console.log(rating);
// console.log(tracks);
// console.log(name);
// console.log(trackCount);

// 2

// const profile = {
//     name: "Sasha",
//     age: 26,
//     avatar: 'google.com',

//     rating: {
//         followers: 63737,
//         views: 888,
//         likes: 83837,
//     },
// };

// const {
//     name,
//     age,
//     avatar,
//  rating: {followers, views, likes},
// } = profile;

// console.log(profile);

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   for (const product of products) {
//     let totalPrice = product.price * product.quantity;
//     if (productName === product.name) {
//       return totalPrice;
//     }
//   }

//   return `Product ${productName} not found!`;
// }

// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Blaster"));

// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return "List of all available potions";
//   },
//   addPotion(potionName) {
//     return `Adding ${potionName}`;
//   },
// };

// console.log(atTheOldToad.addPotion("Invisibility"));

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let totalPrice = 0;
//     for (const potion of this.potions) {
//       totalPrice += potion.price;
//     }
//     return totalPrice;
//   },
// };

// console.log(atTheOldToad.getTotalPrice());
