console.log("CONDITIONALS");

const age = 24;
if (age == 24) {
  console.log(`Age is ${age}`);
} else if (age < 24) {
  console.log(`Age less than 24`);
} else {
  console.log(`Age greater than 24`);
}

let currentAge = 19;
if (currentAge > 18 && currentAge < 20) {
  console.log(`Eligible for Vehicular License but not Commercial License`);
} else if (currentAge > 20) {
  console.log(`Eligible for Commercial License`);
} else {
  console.log(`NOT Eligible for License`);
}

console.log(age==45 ? `Age is 45`: `Age is NOT 45`);