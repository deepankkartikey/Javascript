console.log('CREATING, REMOVING AND REPLACING ELEMENTS');

let element = document.createElement('li');
let textNode = document.createTextNode('This a new Text Node');
element.appendChild(textNode);

element.className = 'childul';
element.id = 'createdElement';
element.setAttribute('title','my title')
// element.innerHTML = '<b>This is an appended element</b>'

let ul = document.querySelector('ul.this');
ul.appendChild(element);
console.log(ul);
console.log(element);


// Replacing element
let elem2 = document.createElement('h3');
textNode = document.createTextNode('This is Text Node of elem2');
elem2.id = 'elem2';
elem2.classname = 'elem2';
elem2.appendChild(textNode);
element.replaceWith(elem2);
console.log(elem2);

// Replacing child element
let myul = document.querySelector('#myul');
myul.replaceChild(element,document.getElementById('firstLi'));
console.log(myul);

// Removing element
myul.removeChild(document.querySelector('#lastLi'));
console.log(myul);