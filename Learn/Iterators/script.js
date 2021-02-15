console.log("ITERATORS in JS");

const fruits = ["apples", "oranges", "mangoes", "strawberries"];
console.log(fruits);

function iterate(values) {
  let nextIdx = 0;
  // return object as per iterator protocol
  return {
    next: function () {
      if (nextIdx < values.length) {
        return {
          value: values[nextIdx++],
          done: false,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
}

// using iterator
const fruit = iterate(fruits);
console.log(fruit.next());
console.log(fruit.next());
console.log(fruit.next());
console.log(fruit.next());
console.log(fruit.next());
