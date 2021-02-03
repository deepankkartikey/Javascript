console.log("Async-Await");

// async function() always returns a promise
async function names() {
  console.log("Inside Method/Function");
  let url = "https://api.github.com/users";
  // as soon as await is seen, returns from function main js logic
  const res = await fetch(url);
  console.log("After receiving response using Fetch");
  const users = await res.json();
  console.log("Receiving Users Data");
  return users;
}

console.log("Before Function Call");
const getNames = names();
console.log(getNames);
getNames.then((data) => console.log("Received User Data ", data));
console.log("Last Line in JS");
