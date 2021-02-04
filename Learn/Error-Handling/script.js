console.log("ERROR-HANDLING");

// let a;
// if (a != undefined) {
//   console.log(a);
// } else {
//   throw new Error("String is UNDEFINED");
// }

try {
  console.log(b);
} catch (error) {
  console.error("Result is UNDEFINED: ", error);
} finally {
  console.log("Inside FINALLY Block");
}
