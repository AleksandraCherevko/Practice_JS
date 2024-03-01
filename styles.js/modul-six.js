// //
// "use strict";

// function showThis() {
//   console.log("this in showThis: ", this);
// }

// const user = {
//   username: "Poly",
// };

// user.showContext = showThis;

// // Викликаємо в контексті об'єкта
// user.showContext(); // this in showThis: {username: "Poly", showContext: ƒ}

// // Викликаємо в глобальному контексті
// showThis(); // "this in showThis: undefined"

// "use strict";

// const book = {
//   updateAuthor(newAuthor) {
//     console.log(this);
//   },
// };

// book.updateAuthor("Jacob");

// const book = {
//   updateTitle(newTitle) {
//     console.log(this);
//   },
// };

// const update = book.updateTitle;

// update("Lord Of The Rings");

// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
//   username: "Mango",
//   room: 27,
// };

// const poly = {
//   username: "Poly",
//   room: 191,
// };

// greet.call(mango, "Welcome"); // "Welcome, Mango, your room is 27!"
// greet.call(poly, "Aloha"); // "Aloha, Poly, your room is 191!"

// function showName() {
//   console.log(this.name);
// }

// const user = {
//   name: "Alice",
// };

// showName.call(user);

// function greet(name) {
//   console.log(`Hello, ${name}! I am ${this.person}`);
// }

// const person = "John";
// const context = {
//   person: "Alice",
// };

// greet.call(context, "Bob");

// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
//   username: "Mango",
//   room: 27,
// };

// const poly = {
//   username: "Poly",
//   room: 191,
// };

// greet.apply(mango, ["Welcome"]); // "Welcome, Mango, your room is 27!"
// greet.apply(poly, ["Aloha"]); // "Aloha, Poly, your room is 191!"

// "use strict";

// const customer = {
//   username: "Jacob",
//   sayHello() {
//     console.log(`Hello, ${this.username}!`);
//   },
// };

// customer.sayHello(); // "Hello, Jacob!"

// const greet = customer.sayHello.bind(customer);

// greet(); // TypeError: Cannot read properties of undefined (reading 'firstName')

// function sayHello(greeting) {
//   console.log(`${greeting}, ${this.name}!`);
// }

// const user = {
//   name: "Alice",
// };

// const greet = sayHello.bind(user);

// greet("Hello");

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   const username = callback();
//   console.log(`Processing an application from ${username}`);
// }

// makeMessage(customer.getFullName.bind(customer)); // "Processing an application from Jacob Mercer"

// const library = {
//   books: 1923,
//   logBookCount() {
//     console.log(this.books);
//   },
// };

// const showBooks = library.logBookCount.bind({ books: 724 });

// showBooks();

// "use strict";

// const library = {
//   books: 1923,
//   logBookCount() {
//     console.log(this.books);
//   },
// };

// function showBooks(callback) {
//   callback();
// }

// showBooks(library.logBookCount);

"use strict";

// const library = {
//   books: 1923,
//   logBookCount() {
//     console.log(this.books);
//   },
// };

// function showBooks(callback) {
//   callback();
// }

// showBooks(library.logBookCount.bind(library));
const a = () => {
  console.log(this);
};

function b() {
  a();
}

b.call({ user: "Mango" });
