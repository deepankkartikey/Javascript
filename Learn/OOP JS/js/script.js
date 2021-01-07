console.log("Object Oriented Programming in JS");

let car = {
  company: "Maruti",
  model: "Nexa Ignis",
  drive: function () {
    console.log("driving ...");
  },
};

car.drive();
console.log(typeof car, car);

// constructor for object
function generateCar(brand, name) {
  this.company = brand;
  this.model = name;
  this.drive = function () {
    console.log(`Driving, ${name} from ${brand}`);
  };
}

let newCar1 = new generateCar("Nissan", "Torreno");
let newCar2 = new generateCar("Renault", "Duster");
console.log(newCar1, newCar2);
