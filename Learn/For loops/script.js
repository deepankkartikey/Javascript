console.log("For-In v/s For-Of Loops");

const people = ["Deepank", "Rohan", "Mohit", "Raunak"];

// TRADITIONAL FOR-LOOP
// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element);
// }

// FOR-IN LOOP
// Used when we use keys to iterate an object
// For In can used to iterate over all characters of string
const person = {
  name: "Deepank",
  language: "Java",
  age: 25,
  experience: 3,
};
// console.log(person);
console.warn('FOR-IN');
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// FOR-OF LOOP
console.warn('FOR-OF');
for (const name of people) {
    console.log(name);
}