console.log('Date Object in Javascript');

let today = new Date();
let z = today;
let oldDate = new Date('12-12-2020 12:12:12');
z = oldDate;
z = oldDate.getDay();
z = oldDate.getDate();
z = oldDate.getMinutes();
z = oldDate.getTime(); // no. of seconds since 1 Jan, 1970
z = today.getMilliseconds();
z = today.getFullYear();
console.log(z);
