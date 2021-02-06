console.log("Regular Expressions");

let regex = /deepank/g;
// without global flag "/g", exec() returns first occurence index only
console.log(regex);
console.log(regex.source);

// Functions to Match Expressions
let s =
  "This was a great performance by deepank and deepank did do on deepank's part";
// 1. exec() - returns array for match and null for no match
let res = regex.exec(s);
console.log(res);

// 2. test()
res = regex.test(s);
console.log(regex, " present in ", s, res);
regex = /kartikey/g;
s = "deepank only";
res = regex.test(s);
console.log(regex, " present in ", s, res);
regex = /deepank/g;
s =
  "This was a great performance by deepank and deepank did do on deepank's part";
res = s.match(regex);
console.log("String occurences in Regex: ", res);
res = s.search(regex);
console.log("Index of String occurence in Regex: ", res);
res = s.replace(regex, "SHUBH");
console.log(res);
