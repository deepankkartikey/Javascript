console.log("ARROW FUNCTIONS");

let func = () => {
  console.log("This is an arrow function");
};
func();

const greet = () => "Hey, There!";
console.log(greet());

const person = () => ({ name: "Deepank Kartikey" });
console.log(person());

const greet_person = (name) => "Good day, " + name;
console.log(greet_person('Deepank'));