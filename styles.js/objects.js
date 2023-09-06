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

const friends = [
{name: 'Mango', online: false},
{name: 'Kiwi', online: true},
{name: 'Poly', online: true},
{name: 'Ajax', online: false},
];


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

// в разный масив перенести объекты: те, кто онлайн в массив - онлайн. те, кто оффлайн - в массив оффлайн

