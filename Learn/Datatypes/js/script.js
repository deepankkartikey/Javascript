// Primitive: String, numbers, boolean, Null, Undefines, Symbol
// [MEMORY IN STACK]

// String 
let firstName = 'Deepank'
let lastName = "Kartikey"
console.log(typeof firstName , firstName, lastName)

// Number
let age = 24
console.log(typeof age, age)

// Boolean 
let drive = true
console.log(typeof drive, drive)

// null
let nullVar = null
console.log(typeof nullVar, nullVar)

// undefined
let undef = undefined
console.log(typeof undef, undef)


// Reference: Arrays, Object Literals, Functions, Dates
// [MEMORY IN HEAP]

// Array
let myArr = [1,2,3, false]
console.log(typeof myArr)
console.table(myArr)

// Object Literals
let marks = {
    harry: 34,
    shubham: 36,
    rohan: 89
}
console.log(typeof marks, marks)

// Function
function fname() {}
console.log(typeof fname, fname)

// Date 
let today = new Date()
console.log(typeof today, today)