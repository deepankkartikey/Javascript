console.log("SETS IN JAVASCRIPT");

// initialize set
const mySet = new Set();

// add elements in set
// doesn't take duplicates
mySet.add("Deepank");
mySet.add("Kartikey");
mySet.add("This");
mySet.add("This");
mySet.add(24);
mySet.add(true);
console.log(mySet);
console.log(`Size of MySet: ${mySet.size}`);
console.log(`MySet has 24: ${mySet.has(24)}`);
console.log(`Removed element 24: ${mySet.delete(24)}`);
console.log(`MySet has 24: ${mySet.has(24)}`);

// using constructor to initialize
const newSet = new Set([true, false, true]);
console.log(newSet);

//Iterating a Set
console.log("MySet Elements->");

for (const element of mySet) {
  console.log(element);
}

console.log("Convert Set to Array-> ", Array.from(mySet));
