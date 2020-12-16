console.log('DOCUMENT OBJECT MODEL');
let a = document;
a = document.all;
Array.from(a).forEach(function(element){
    console.log(element);
});

a = document.body;
a = document.forms;
a = document.links;
//console.log(a[0].href);

document.images;
document.scripts;

console.log(a);