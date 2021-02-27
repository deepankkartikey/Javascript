console.error("Destructuring in JS");

[a, b, c] = [1, 2, 3];
console.log(a, b, c);

// value destructuring
[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(a, b, c, d);

// array destructuring
({ a, b, ...c } = { a: 60, b: 45, c: 56, d: 89 });
console.log(a,b,c);

// object destructuring
laptop = {
    make: 'Apple',
    age: 34,
    model: 'Air',
    start: function() {
        console.log('Started...');
        
    }
}

const {make, age, model, start} = laptop;
console.warn(make);
console.warn(age);
console.warn(model);
console.warn(start);
start();


