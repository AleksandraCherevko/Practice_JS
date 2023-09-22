// const apartment = {
//     Url: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags:  ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },

  
// };

// console.table(apartment);

// Задача 3/41
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;


// console.log(apartment.rating);
// console.log(apartment.descr);
// console.log(apartment.price);
// console.log(apartment.tags);



// Задача 4/41
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];

// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);

// Задача 5/41
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам 
// обьекта apartment используя синтаксис «квадратных скобок».

// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

// Задача 6/41
// Дополни код обновив значения свойств объекта apartment:

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push = "trusted";

// console.table(apartment);

// Задача 7/41
// Добавь объекту apartment несколько новых свойств:

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {country: "Jamaica", city: "Kingston"};

// console.table(apartment);

// Задача 8/41
// Дополни код объявления объекта так, чтобы у него были свойства name, price, image и tags со значениями из переменных с аналогичными именами. 
// Обязательно используй синтаксис коротких свойств.

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//     name,
//     price,
//     image,
//     tags,
// };

// console.table(product);

// Задача 9/41

// Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства: email и password, 
// имена которых хранятся в переменных emailInputName и passwordInputName.
// Значением свойства email должна быть строка "henry.carter@aptmail.com", 
// а значением свойства password - строка "jqueryismyjam".

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//     email:"henry.carter@aptmail.com",
//     password: "jqueryismyjam",
//     };
    

// console.table(credentials);

// Задача 10/41
// Перебери объект apartment используя цикл for...in и 
// запиши в массив keys все его ключи, а в массив values все значения его свойств.

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };

// const keys = ["descr", "rating", "price"];
// const values = ["Spacious apartment in the city center", 4, 2153];

// for (const key in apartment){
//     console.log(key);
//     console.log(apartment[key]);
// }


// Задача 11/41
// Выполни рефакторинг решения предыдущего задания добавив в цикл for...in 
// проверку на собственное свойство.

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);

// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;


//   for (const key in apartment){
//     if(apartment.hasOwnProperty(key)){
//     console.log(key);
//     console.log(apartment[key]);
//     }
//   }


// Задача 12/41
// Напиши функцию countProps(object), которая считает и возвращает количество собственных 
// свойств объекта в параметре object.
//  Используй переменную propCount для хранения количества свойств объекта.

// function countProps(object) {
//     let propCount = 0;

//     for (const key in object) {
//         if (object.hasOwnProperty(key)){
//         propCount +=1;
//         }}
//         return propCount;
// } 

// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));

// Задача 13/41
// Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys массив ключей 
// собственных свойств объекта apartment, и добавь в массив values все значения его свойств.

const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  const values = [];

  const keys = apartment;
  