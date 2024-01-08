// Задача 1/48
// function makeMessage(name, price) {
//   return `You picked ${name}, price per item is ${price} credits`;
// }

// console.log(makeMessage("Radar", 6150));

// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   return orderedQuantity * pricePerItem;
// }

// console.log(calculateTotalPrice(5, 100));

// function checkAge(age) {
//   if (age >= 18) {
//     return "You are an adult";
//   }
// }

// console.log(checkAge(17));
// console.log(checkAge(30));

// function checkStorage(available, ordered) {
//   if (ordered > available) {
//     return "Your order is too large, there are not enough items in stock!";
//   } else if (ordered == 0) {
//     return "There are no products in the order!";
//   } else {
//     return "The order is accepted, our manager will contact you";
//   }
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(70, 0));

// function checkPassword(password) {
//   const correctPassword = "jqueryismyjam";
// }

// function checkPassword(password) {
//   const correctPassword = "jqueryismyjam";

//   return correctPassword === password
//     ? `Access granted`
//     : `Access denied, wrong password!`;
// }

// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));

// function getSubscriptionPrice(type) {
//   switch (type) {
//     case "starter":
//       return "0";
//       break;
//     case "professional":
//       return "20";
//       break;
//     case "organization":
//       return "50";
//       break;
//     default:
//       return "Invalid subscription type!";
//   }
// }

// console.log(getSubscriptionPrice("random"));
// console.log(getSubscriptionPrice("premium"));

// function isNumberInRange(start, end, number) {
//   return number >= start && number <= end;
// }

// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));

// function checkAccess(subType) {
//   return subType === "pro" || subType === "vip";
// }

// console.log(checkAccess("pro"));
// console.log(checkAccess("starter"));

// function toggleModalVisibility(isVisible) {
//   return !isVisible;
// }

// console.log(toggleModalVisibility(true));
// console.log(toggleModalVisibility(false));

// function getSubstring(string, length) {
//   return string.slice(0, length);
// }

// console.log(getSubstring("Hello world", 3));
// console.log(getSubstring("Hello world", 5));
// console.log(getSubstring("Hello world", 11));

// function normalizeInput(input, to) {
//   if (to == "upper") {
//     return input.toUpperCase();
//   } else {
//     return input.toLowerCase();
//   }
// }

// console.log(normalizeInput("This ISN'T SpaM", "lower"));
// console.log(normalizeInput("Stay Awhile and Listen", "lower"));
// console.log(normalizeInput("Big SALE", "upper"));

// function checkForName(fullName, firstName) {
//   if (fullName.toLowerCase().includes(firstName.toLowerCase())) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkForName("Jason Neis", "Jason"));
// console.log(checkForName("Jason Neis", "jAsOn"));
// console.log(checkForName("Caty Stars", "Caty"));

// function checkFileExtension(fileName, ext) {
//   if (fileName.toLowerCase().endsWith(ext)) {
//     return "File extension matches";
//   } else {
//     return "File extension does not match";
//   }
// }

// console.log(checkFileExtension("styles.css", ".css"));
// console.log(checkFileExtension("index.html", ".html"));

// function getFileName(file) {
//   if (file.includes(".")) {
//     return file.slice(0, file.indexOf("."));
//   } else {
//     return file.slice();
//   }
// }

// console.log(getFileName("styles.css"));
// console.log(getFileName("app.js"));
// console.log(getFileName("index"));

function createFileName(name, ext) {
  return `${name.trim()}.${ext.trim()}`;
}

console.log(createFileName(" order ", "txt"));
console.log(createFileName("report ", "csv"));
