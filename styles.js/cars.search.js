// /**
//  * Реалізуй пошук автомобілів по сайту
//  * Користувач потрапляє на сайт і одразу бачить форму для пошуку
//  * і картки всіх автомобілів (масив cars)
//  * Користувач може ввести в форму назву Марки або Моделі авто і в
//  * тегу селект обрати що він ввів Марку або Модель (https://prnt.sc/PkkZZRy_ggtT)
//  * Після натискання кнопки пошуку (сабміт форми) відмалюй авто
//  * які збігаються з критеріями пошуку
//  */

// const cars = [
//   {
//     id: 1,
//     car: "Audi",
//     type: "A6",
//     price: 30000,
//     img: "https://static.wixstatic.com/media/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg/v1/fill/w_520,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg",
//   },
//   {
//     id: 2,
//     car: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
//   {
//     id: 3,
//     car: "Audi",
//     type: "Q7",
//     price: 40000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//   },
//   {
//     id: 4,
//     car: "BMW",
//     type: "5 siries",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     id: 5,
//     car: "Honda",
//     type: "Accord",
//     price: 20000,
//     number: "+380000000000",
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     id: 6,
//     car: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
// ];

// // сначала стучимся по всем элементам до формы и списка

// const container = document.querySelector(".js-list");
// const form = document.querySelector(".js-form");

// // собираем список из картинок на главную страницу/ список принимает массив/ используем map и возвращаем каждый элемент перебора (car) и перечисляем
// // все спецификации авто, которые мы хотим получить

// function createMarkup(array) {
//   return array
//     .map(
//       ({ id, car, type, price, img }) =>
//         `<li class='car-card' data-id='${id}'>
//       <img src="${img}" alt="${type}" class="car-image">
//       <h2 class='car-title'>${car}</h2>
//       <h3 class='car-type'>${type}</h3>
//       <span>${price}</span>
//       </li>`
//     )
//     .join("");
// }
// // добавляем немного стилей

// container.style.display = "flex";
// container.style.flexWrap = "wrap";
// container.style.gap = "25px";

// // пушаем на страницу

// container.insertAdjacentHTML("beforeend", createMarkup(cars));

// // делаем реализацию поиска

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();

//   const { options, query } = event.target.elements;

//   // как достукиваемся до options.value
//   // cars[0] = получаем объект машины (0 = индекс массива)
//   // если я не знаю, какое свойство ищу в options, то я к ней обращаюсь через квадратные дужки и вызываю options
//   // *console.log(cars[0][options]);
//   // а если в options - не переменная, а объект, то, чтообы получить нам свойство = options.value
//   // {
//   //   id: 6,
//   //   car: "Volvo",
//   //   type: "XC60",
//   //   price: 7000,
//   //   img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   // }
//   //

//   // создаем переменную , добавляем массив cars и проходим по нему filter -
//   // в car лежит каждый объект отдельно /
//   // мы хотим посмотреть на каждое из свойств (то есть которое сохр в options value, приводим к нижнему регистру, проверяем через
//   // includes включает ли каждый рядок то, что ввел пользователь

//   const result = cars
//     .filter((car) =>
//       car[options.value].toLowerCase().includes(query.value.toLowerCase())
//     )
//     .sort((a, b) => a[options.value].localeCompare(b[options.value]));

//   container.innerHTML = createMarkup(result);
// }
