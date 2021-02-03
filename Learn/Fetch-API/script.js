console.log("FETCH API");

// button
let myBtn = document.querySelector("#my-button");

// content container
let content = document.querySelector("#content");

// function getData() {
//   console.log("Inside GetData");
//   url = "dk.json";
//   fetch(url) // asynchronous
//     .then((response) => {
//       console.log("Inside 1st Then()");
//       return response.text();
//     })
//     .then((data) => {
//       console.log("Inside 2nd Then()");
//       console.log(data);
//     });
// }

function getData() {
  console.log("Inside GetData");
  url = "https://api.github.com/users";
  fetch(url) // asynchronous
    .then((response) => {
      console.log("Inside 1st Then()");
      return response.json();
    })
    .then((data) => {
      console.log("Inside 2nd Then()");
      console.log(data);
    });
}

function postData() {
  console.log("Inside PostData");
  url = "http://dummy.restapiexample.com/api/v1/create";
  data = { name: "deepank", salary: "66123", age: "25" };
  params = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      mode: "no-cors",
    },
    body: JSON.stringify(data),
  };
  fetch(url, params) // asynchronous
    .then((response) => response.json())
    .then((data) => console.log(data));
}

// console.log("Before GetData");
// myBtn.addEventListener("click", getData);
// console.log("After GetData");
postData();
