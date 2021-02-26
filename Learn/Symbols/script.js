console.error("Symbols in Javascript");

const sym1 = Symbol("An Identifier");
const sym2 = Symbol("An Identifier");
console.log("Sym1: ", sym1);
console.log("Sym2: ", sym2);
console.log("Sym1 === Sym2: ", sym1 === sym2);

const a = "text";
const b = "text";
console.log("a: ", a);
console.log("b: ", b);
console.log("a===b: ", a === b);

const k1 = Symbol("for K1");
const k2 = Symbol("for K2");

myObj = {};
myObj[k1] = "Value for K1";
myObj[k2] = "Value for K2";
myObj["name"] = "Deepank Kartikey";
console.error("MyObj:", myObj);

console.warn('Object --> Json: ',JSON.stringify(myObj));

console.warn("Iterate object");
for (const key in myObj) {
  console.log(`${key} : ${myObj[key]}`);
}
