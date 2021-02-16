console.log("Generators in JS");

function* numbersGenerator() {
  let i = 0;
  while (i < 3) {
    yield i++;
  }
}

const gen = numbersGenerator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
