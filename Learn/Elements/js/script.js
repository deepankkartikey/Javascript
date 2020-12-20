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
