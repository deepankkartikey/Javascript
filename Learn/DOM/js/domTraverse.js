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
