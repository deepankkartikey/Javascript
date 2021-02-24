console.log("MAP Data structure in JS");

// Declaring a MAP
const myMap = new Map();
const key1 = "myStr",
  key2 = {},
  key3 = function () {};

// Inserting Key-Values in MAP
myMap.set(key1, "A string");
myMap.set(key2, "An Empty Object");
myMap.set(key3, "An Empty Function");

console.log(myMap);

// Getting values from MAP using keys
const value1 = myMap.get(key1);
const value2 = myMap.get(key2);

console.log(`Value1: ${value1}`);
console.log(`Value2: ${value2}`);

// size of map
console.log(`Map Size: ${myMap.size}`);

// Iterate Map using For-Of Loop
for (const [key, value] of myMap) {
  console.log(`${key} :: ${value}`);
}

// Get only the keys/values of Map
console.log(myMap.keys());
console.log(myMap.values());

// Iterate Map using For-Each
myMap.forEach((value, key) => {
  console.log(`${value} :: ${key}`);
});

// Converting MAP to Array - 2D Array
let myArr = Array.from(myMap.keys);
console.log(myArr);
