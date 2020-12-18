console.log("TRAVERSING DOM");

let a;
let a1 = document.querySelector(".container");
a = a1.childNodes; // each newline counted as text
a = a1.children; // only elements are counted h1, div, li, br, a
a = a1.childNodes[0].nodeName;
a = a1.childNodes[1].nodeName;
a = a1.childNodes[0].nodeType;
a = a1.childNodes[1].nodeType;
console.log(a);

/*
NODE TYPE
1. element
2. attribute
3. text node
8. comment
9. document
10. docType
*/

let container = document.querySelector('div.container');
let c = container.children;
let c1 = c[1].children[0].children;
c1 = container.firstChild;
c1 = container.firstElementChild;
c1 = container.lastChild;
c1 = container.lastElementChild;
c1 = container.children;
c1 = container.childElementCount; // count of child elements

c1 = container.firstElementChild.parentElement;
c1 = container.firstElementChild.nextElementSibling;
c1 = container.firstElementChild.nextElementSibling.nextElementSibling;
console.log(c1);