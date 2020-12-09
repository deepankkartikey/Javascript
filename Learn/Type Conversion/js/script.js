console.log('TYPE COVERSION');
// string() , toString()
let myVar;
myVar = 34;
console.log(myVar, typeof myVar);
myVar = String(24);
console.log(myVar, typeof(myVar));

let booleanVar = true;
console.log(booleanVar, typeof booleanVar);
booleanVar = String(booleanVar);
console.log(booleanVar, typeof(booleanVar));

let arr = [1,2,3,4,5];
console.log(arr, arr.length, typeof arr);
arr = arr.toString()
console.log(arr, arr.length, typeof arr);

