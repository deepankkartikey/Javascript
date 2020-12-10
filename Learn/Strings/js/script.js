console.log("Strings are very Important in JS");
const name = 'Deepank';
const greeting = 'Hey, There!';
console.log(name+': '+greeting);

let html = "<h1>A heading</h1>"+
           "<p>A Paragraph</p>";
html = html.concat("THIS");
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());

// indexing
console.log(html[1]);
console.log(html.charAt(1));
console.log(html.indexOf('A'));
console.log(html.lastIndexOf('A'));
console.log(html.endsWith('this'));
console.log(html.endsWith('THIS'));
console.log(html.includes('IS'));
console.log(html.substring(0,10));

console.log(html.slice(0,4));
console.log(html.split(' '));

console.log(html.replace('A','The'));