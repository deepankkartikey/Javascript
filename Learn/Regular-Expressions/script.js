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

regEx1 = /^(a|e|i|o|u).*\1$/;
tstStr = "abcca";
console.log(regEx1.exec(tstStr));

// Shorthand Character Classes
console.error("Shorthand Character classes");

regEx1 = /\wee/; // \w - word charcaters: one underscores, alphabets or numbers
tstStr = "dee   45dee123&^%z";
regEx1 = /\w+23/; // \w - any number of word characters followed by 23
regEx1 = /\Wdee/; // \W - One Non Word character
regEx1 = /\W+z/; // \W+ - more than Non Word Character
regEx1 = /\d3/; // \d - match single digit followed by 3
regEx1 = /\d+3/; // \d - match multiple digits followed by 3
regEx1 = /\D12/; // \D - One non digit character followed by 12
regEx1 = /\D+12/; // \D - Mutiple non-digits followed by 12
regEx1 = /\s45/; // \s- single white space character
regEx1 = /\s+45/; // \s - multiple white space characters
regEx1 = /\S12/; // \S - single non-white space characters
regEx1 = /\S+12/; // multiple non white space characters followed by 12
result = regEx1.exec(tstStr);
console.log("regEx1.exec(tstStr):", result);
if (result) {
  console.log(`${regEx1.source} present in ${tstStr}`);
} else {
  console.log(`${regEx1.source} NOT in ${tstStr}`);
}
