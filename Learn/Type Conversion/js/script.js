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

// Number()
let stringNum = "3434";
console.log(stringNum, typeof stringNum)
stringNum = Number(stringNum)
console.log(stringNum, typeof stringNum)
let stringBool = false;
console.log(stringBool, typeof stringBool)
stringBool = Number(stringBool)
console.log(stringBool, typeof stringBool)
let stringWord = 'user';
console.log(stringWord, typeof stringWord)
stringWord = Number(stringWord)
console.log(stringWord, typeof stringWord)

// parseInt() and parseFloat()
let int = '24'
console.log(int, typeof int)
int = parseInt(int)
console.log(int, typeof int)
let flt = '24.5'
console.log(flt, typeof flt)
flt = parseFloat(flt)
console.log(flt, typeof flt)

