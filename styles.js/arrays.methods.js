// Метод map()

// const planets = ["Земля", "Марс", "Венера", "Юпітер"];
// const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
// console.log(planetsInUpperCase);

// -2
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const names = students.map((student) => student.name);
// console.log(names);

// const scores = students.map((student) => student.score);
// console.log(scores);

// Метод flatMap()
// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const studentCourse = students.flatMap((student) => student.courses);
// console.log(studentCourse);

// Метод filter()
// const values = [51, -3, 27, 21, -68, 42, -37];
// const positiveValues = values.filter((value) => value >= 0);
// console.log(positiveValues);

// const bigValues = values.filter((value) => value > 1000);
// console.log(bigValues);

// 2
// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const allCourses = students.flatMap((student) => student.courses);
// console.log(allCourses);

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );

// console.log(uniqueCourses);

// Використовуючи array.indexOf(course), виконуємо пошук першого збігу поточного елемента course
// і отримуємо його індекс в оригінальному масиві усіх курсів. В параметрі index зберігається
// індекс поточного елемента course, перебираючи масив методом filter.
// Якщо результат indexOf() і значення index рівні - це унікальний елемент,
// тому що таке значення зустрічається в масиві вперше, і на поточній ітерації фільтр обробляє саме його.

// 3
// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const best = students.filter((student) => student.score >= HIGH_SCORE);
// console.log(best);

// const worst = students.filter((student) => student.score < LOW_SCORE);
// console.log(worst);

// or

// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average);

// Метод find()
// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// const findColor = colorPickerOptions.find((option) => option.label === "blue");
// console.log(findColor);
