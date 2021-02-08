console.error("Regular Expressions");

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
console.log('s.replace(regex, "SHUBH"): ', res);

// META-CHARACTERS
console.error("META-CHARACTERS");
regex = /deepnk/;
regex = /^deep/; // '^' means regex will match if string starts with
regex = /ak$/; // '$' means regex will match if string ends with
regex = /d*k/; // '*' matches 0 or more characters
regex = /de.pank/; // '.' matches exactly one character
regex = /deepan?k/; // '?' makes character preceeded by it, optional
s = "deepank is deepank and not depak";
if (regex.test(s)) {
  console.log(`${regex} exists inside ${s}`);
} else {
  console.log(`${regex} DOESN'T exist inside ${s}`);
}

// Character Sets
console.error("CHARCATER-SETS-[]");

let regExp = /d[a-z]epank/; // can be any character from a to z
regExp = /d[eap]epank/; // can be either e , a or p after d
regExp = /d[^apq]epank/; // NOT of(apq) : CAN'T be Neither e , a Nor p after d
regExp = /d[a-zA-Z]epank/; // Matches for any character in a-z or A-Z
regExp = /d[e0-9][e0-9]/; // Checkes for occurrence of 2X e or 0-9 after d
let tstStr = "This is a test string by deepank";

let result = regExp.exec(tstStr);
console.log("regExp.exec(tstStr):", result);

if (result) {
  console.log(`${regExp.source} present in ${tstStr}`);
} else {
  console.log(`${regExp.source} NOT in ${tstStr}`);
}

//Quntifiers - {}
console.error("QUANTIFIERS");

let regEx1 = /de{0,2}pank/; // e can occur 0 or 2 times
regEx1 = /de{2}pank/; // e can occur exactly 2 times


// Grouping - ()
regEx1 = /(dee){2}/; // look for 2 occurences of grouping (dee)
tstStr = "deedee";

result = regEx1.exec(tstStr);
console.log("regEx1.exec(tstStr):", result);
if (result) {
  console.log(`${regEx1.source} present in ${tstStr}`);
} else {
  console.log(`${regEx1.source} NOT in ${tstStr}`);
}
