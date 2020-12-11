console.log('ARRAYS');

const marks = [45,56,78,98,54];
const fruits = ['Banana','Kiwi','Apple'];
const mixed = ['Papaya',60,[34,23]];

const ar = new Array(23,34,56,'Watermelon');
console.log(ar.length, ar);
console.log(fruits,fruits[1]);
console.log(mixed, mixed[2], Array.isArray(mixed));