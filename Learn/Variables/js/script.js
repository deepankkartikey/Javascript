console.log('VARIABLES')

// 1. Can't start with numbers
// 2. Can start with letters, _ , $
// 3. Case-sensitive

// var
var name = 'Deepank'
var channel;
var marks=34;
marks=0;
console.log(name, channel, marks);

// const
const owner = 'old'; // initialization is compulsory
//owner = 'new';  // throws Assignment Error
console.log(owner)

// let  : block level variable
let msg = 'outside block'
console.log(msg)
{
    let msg = 'inside block'
    console.log(msg)
}