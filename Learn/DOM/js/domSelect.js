console.log('DOM SELECTORS');

/*
element selectors:
1. Single Element Selector
2. Multi Element Selector
*/

let element = document.getElementById('first');
element.style.backgroundColor = 'yellow';
element.style.width = '100px';
element.innerHTML = '<b>Deepank</b>'
console.log(element);
console.log(element.id);
console.log(element.className);
console.log(element.childNodes);
console.log(element.parentNode);


let sel = document.querySelector('#first');
sel = document.querySelector('.child');
sel = document.querySelector('div');  // only first div is selected
sel.style.color = 'green'; 
console.log(sel);


// 2. MULTI ELEMENT SELCTOR
let elems = document.getElementsByClassName('child');
console.log(elems);

Array.from(elems).forEach(function(elem){
    elem.style.color = 'red';
});