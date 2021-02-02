console.log("FETCH API");

// button
let myBtn = document.querySelector("#my-button");

// content container
let content = document.querySelector("#content");

function getData() {
  console.log("Inside GetData");
  url = "dk.json";
  fetch(url) // asynchronous
    .then((response) => {
      console.log("Inside 1st Then()");
      return response.text();
    })
    .then((data) => {
      console.log("Inside 2nd Then()");
      console.log(data);
    });
}

console.log("Before GetData");
myBtn.addEventListener("click", getData);
console.log("After GetData");
