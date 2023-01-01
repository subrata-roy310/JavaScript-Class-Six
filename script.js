// // function declaration
// function calculateAge(birthday) {
//     const age = 2022 - birthday;
//     return age; // return 2022 - birthday;
// }
// const age1 = calculateAge(1988);
// console.log(age1);

// // function Expression
// const calculationAgeNew = function (birthday) {
//     return 2022 - birthday;
// };
// const age2 = calculationAgeNew(1975);
// console.log(age2);

// // function declaration
// const age1 = calculateAge(1988);
// function calculateAge(birthday) {
//     const age = 2022 - birthday;
//     return age; // return 2022 - birthday;
// }

// console.log(age1);

// // function Expression
// const calculationAgeNew = function (birthday) {
//     return 2022 - birthday;
// };
// const age2 = calculationAgeNew(1975);
// console.log(age2);

// Arrow Function
// Example 1
// const calculateAgeAnother = birthyear => 2022 - birthyear;
// const age1 = calculateAgeAnother(2002);
// console.log(age1);

// // Example 2
// const calculateAgeAnother1 = birthyear => { 2022 - birthyear };
// const age2 = calculateAgeAnother(1988);
// console.log(age2);

// // Good Example
// const jobLeft = birthyear => {
//     const age = 2022 - birthyear;
//     const ageleft = 62 - age;
//     return ageleft;
// }
// const aAgeleft = jobLeft(1973);
// console.log(aAgeleft);
// console.log(`A job age left ${aAgeleft} years!`);

// Good Example
// const jobLeft = birthyear => {
//     const age = 2022 - birthyear;
//     return 62 - age;

// }
// const aAgeleft = jobLeft(1973);
// console.log(aAgeleft);
// console.log(`A job age left ${aAgeleft} years!`);

// Array
// const student1 = "Asif";
// const student2 = "Rakib";
// const student3 = "Rakbor";
// console.log(student1);
// console.log(student2);

// // Array Example 1
// const students = ["Asif", "Rakib", "Rakbor"];
// console.log(students);
// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);

// // Array Example 2
// const players = new Array("Sakib", "Tamim", "Miraz");
// console.log(players[0]);
// console.log(players[2]);

// const students = ["Asif", "Rakib", "Akbor", "A", "B", "C"];
// console.log(students);
// students[0] = "Korim";
// console.log(students);

// console.log(students.length);
// // Get Array last item
// console.log(students[students.length - 1]);

// const user = ["Subrata", "Roy", 1998, 2022 - 1998, "Web developer"];
// console.log(user);
// console.log(user[1]);
// console.log(user[user.length - 1]);
// console.log(user.length);


// Array mathod
const users = ["Users1", "Users2", "Users3"];
// console.log(users);

// // Push
// users.push("Users4");
// console.log(users);

// // Unshift
// users.unshift("First Users");
// console.log(users);

// // Pop
// users.pop();
// console.log(users);

// // Shift
// users.shift();
// console.log(users);

console.log(users);
// const removeItem = users.pop();
// console.log(removeItem);
// console.log(users);
const removeItem = users.shift();
console.log(users);
console.log(removeItem);