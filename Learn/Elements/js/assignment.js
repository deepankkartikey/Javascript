let main = document.querySelector('.container');
let newElem = document.createElement('h1');
let link = document.createElement('a');
link.href = 'http://www.google.com';
link.text = 'Go to Google';
newElem.appendChild(link);
main.replaceWith(newElem);

console.log(main);