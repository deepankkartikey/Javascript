console.log("FUNCTIONS");

// function expression
const from = function (sender = "Anonymous") {
  console.log(`-From ${sender}`);
};

//function definition
function greet(name = "Bot") {
  console.log(`Hey, there. ${name}`);
  from();
}

greet("Deepank");
greet("Arun");
greet();

// function inside object
const myObj = {
  type: "Game-Console",
  name: function () {
    return "PS5";
  },
};
console.log(myObj.name());
