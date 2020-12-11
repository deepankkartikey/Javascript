console.log('ARRAYS');

const marks = [45,56,78,98,54];
const fruits = ['Banana','Kiwi','Apple'];
const mixed = ['Papaya',60,[34,23]];

const ar = new Array(23,34,56,'Watermelon');
console.log(ar.length, ar);
console.log(fruits,fruits[1]);
console.log(mixed, mixed[2], Array.isArray(mixed));

// Mutating or Modifying Arrays
console.log('Marks: ' , marks);
console.log('Push at position: ', marks.push(20), marks);
console.log('Pop (last element): ', marks.pop(),marks);
console.log('Shift (First Element): ', marks.shift(), marks);
console.log('Unshift (Add at Begin): ', marks.unshift(87), marks);

console.log('Splice (Remove j elements from ith index): ', marks.splice(1,2), marks);
console.log('Reverse: ',marks.reverse());

console.log('Concat(): ',marks.concat(marks));


// Objects in JS
let myobj = {
    'first name': 'Deepank',
    age: 24,
    marks: [56,45]
}
console.log(myobj);
console.log(myobj.marks);