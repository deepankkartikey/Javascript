console.log('STORAGE IN JS');

// Local Storage
localStorage.setItem('Name','Deepank');
localStorage.setItem('Name2','Kartikey');
// localStorage.clear();
let name = localStorage.getItem('Name');
console.log(name);
console.log(localStorage);
localStorage.removeItem('Name2');
console.log(localStorage);

let veg = ['ginger','onion','tomato'];
localStorage.setItem('veg',JSON.stringify(veg));
veg = localStorage.getItem('veg');
veg = JSON.parse(localStorage.getItem('veg'));
console.log(veg);


