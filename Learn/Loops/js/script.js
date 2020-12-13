console.log("LOOPS");

// for loop
for (let i = 1; i < 10; i++) {
  console.log(i);
}

// while loop
let j = 5;
while (j > 0) {
  console.log(j);
  j--;
}

// do-while loop
let k = 1;
do {
  console.log(k);
  k++;
} while (k < 5);

// forEach
let elements = [34,56,78,98,45];
elements.forEach(function(element){
    console.log(element);
})