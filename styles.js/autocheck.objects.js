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

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const values = ["Spacious apartment in the city center", 4, 2153];

//   const keys = Object.keys(apartment);
//   console.log(keys);
  

//   for (const key of keys){
//     console.log(key);
//     console.log(apartment[key]);
//   }

  
// Задача 14/41
// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, 
// возможно, но необязательно, цикл for...of.

// function countProps(object) {

//   let propCount = 0;
//   const keyObject = Object.keys(object);

//   for (const key of keyObject) {
//     propCount += 1;
//   }

//   return propCount

// }

// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));


  
// Задача 15/41
// Запиши в переменную keys массив ключей собственных свойств объекта apartment, 
// а в переменную values массив всех значений его свойств. Используй методы 
// Object.keys() и Object.values().

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(apartment);
// console.log(keys);
// console.log(values);

// Задача 16/41
//Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, 
// где имя свойства это имя сотрудника, а значение свойства это зарплата. 
// Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. 
// Используй переменную totalSalary для хранения общей суммы зарплаты.

// function countTotalSalary(salaries) {
// let totalSalary = 0;
// const values =  Object.values(salaries);
// for (const value of values){
// totalSalary += value;
// }

//   return totalSalary;
// }

// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// Задача 17/41
// Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения
//  свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// for (const color of colors){
//   hexColors.push(color.hex);}


//   const rgbColors = [];
//   for (const color of colors) {
//     rgbColors.push(color.rgb);
//   }


//   console.log(hexColors); 
//   console.log(rgbColors); 

// Задача 18/41

// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. 
// Функция ищет объект продукта с таким именем (свойство name) 
// в массиве products и возвращает его цену (свойство price). 
// Если продукт с таким названием не найден, функция должна возвращать null.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (let product of products) {
//     if(product.name === productName){
//       return product.price;
//     }
//   }

//     return null;
//   }





// console.log(getProductPrice("Engine"));
// console.log(getProductPrice("Scanner"));

// Задача 19/41
// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) 
// свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта 
// в массиве products. 
// Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {

// let itemValueArray = [];
//   for (const product of products) {
//     if (product.hasOwnProperty(propName))
//     {
//       itemValueArray.push(product[propName]);
//     }
//   }
// return itemValueArray;
 
// }


// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("category"));

// Задача 20/41
// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр 
// productName - название товара. Функция должна вернуть общую 
// стоимость (цена * количество) товара с таким именем из массива products.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
// let totalPrice = 0;
// for (const product of products){
// if (product.name === productName){
//   totalPrice += product.quantity * product.price
// }
// }
// return totalPrice

// }

// console.log( calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Scanner"));

// Задача 21/41
// Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру 
// за три дня (meanTemperature). Замени объявления переменных yesterday, 
// today и tomorrow одной операцией деструктуризации свойств объекта highTemperatures.

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };


// const {yesterday, today, tomorrow} = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature)

// Задача 22/41
// В прогнозе максимальных температур также может быть необязательное свойство icon - 
// иконка погоды. Замени объявления переменных yesterday, today, tomorrow и icon одной операцией 
// деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию 
// для icon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;
// console.table(highTemperatures);

// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.table(meanTemperature);

// Задача 23/41
// Замени объявления переменных highYesterday, highToday, 
// highTomorrow и highIcon одной операцией деструктуризации свойств объекта 
// highTemperatures. Задай значение по умолчанию для highIcon - 
// строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {
//   yesterday: highYesterday,
//   today:highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(meanTemperature);



// Задача 24/41
//Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта..

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];



// for (const {hex, rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }


// console.log(hexColors);
// console.log(rgbColors);


// Задача 26/41
// Мы получили прогноз погоды на два дня, с минимальными и максимальными 
// температурами, а также необязательными иконками.
// Замени объявления всех переменных одной операцией деструктуризации свойств объекта forecast. 
// Задай значение по умолчанию для иконок, переменных todayIcon и tomorrowIcon - 
// строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };


// const{today: {
//   low: lowToday,
//   high: highToday,
//   icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// },
// tomorrow: {low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}} = forecast;

// console.log(forecast);


// Задача 27/41

// Change code below this line
// function calculateMeanTemperature(forecast){

//   const { today: { low: todayLow, high: todayHigh}, tomorrow: { low: tomorrowLow, high: tomorrowHigh}}=forecast;
  
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));
// console.log(calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }));


// Задача 28/41
// В переменной scores хранится массив результатов тестирования. Используя 
// распыление и методы Math.max() и Math.min() дополни код так, 
// чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий.

// const scores = [89, 64, 42, 17, 93, 51, 26];
// const bestScore = Math.max(...scores);
// console.log(bestScore);
// const worstScore = Math.min(...scores);
// console.log(worstScore);


// Задача 29/41
// В переменных firstGroupScores, secondGroupScores и thirdGroupScores 
// хранятся результаты тестирования отдельных групп. Используя распыление дополни код так, чтобы:

// В переменной allScores хранился массив всех результатов от первой до третьей группы.
// В переменной bestScore был самый высокий общий балл.
// В переменной worstScore был самый низкий общий балл.

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// console.log(allScores);
// const bestScore = Math.max(...allScores);;
// console.log(bestScore);
// const worstScore = Math.min(...allScores);
// console.log(worstScore);

// Задача 30/41

// В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию которые 
// хранятся в переменной defaultSettings. Во время создания теста, 
// все или часть настроек можно переопределить, они хранятся в переменной overrideSettings.

// Для того чтобы получить финальные настройки теста, необходимо 
// взять настройки по умолчанию и поверх них применить переопределённые настройки. 
// Дополни код так, чтобы в переменной finalSettings получился объект финальных настроек теста.

// const defaultSettings = {
//     theme: "light",
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
//   };
//   const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
//   };

//   const finalSettings = {...defaultSettings, ...overrideSettings};
//   console.log(finalSettings);


// Задача 31/41
// Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи, 
// не изменяя напрямую параметр data. В новом объекте должно быть свойство completed, 
// значение которого хранится в одноимённой локальной переменной.

// В параметре data гарантированно будет только свойство text, а остальные два, 
// category и priority, могут отсутствовать. Тогда, в новом объекте задачи, 
// в свойствах category и priority должны быть значения по умолчанию, 
// хранящиеся в одноимённых локальных переменных.

// function makeTask(data) {
//     const completed = false;
//     const category = "General";
//     const priority = "Normal";

   
//     return {
//         category,
//         priority,
//         completed,
//         ...data}

// }


// console.log(makeTask({category: "Homemade", priority: "Low", text: "Take out the trash" }));



  