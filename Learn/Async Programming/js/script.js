console.log("AJAX");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
  console.log("Fetch Clicked");

  // initialize XHR object
  let xhr = new XMLHttpRequest();

  // open XHR object
  xhr.open("GET", "note.txt", true);

  // what to do on progress
  xhr.onprogress = () => {
    console.log("On Proogress");
  };

  // what to do when response is ready
  xhr.onload = () => {
    console.log(this.responseText);
  };

  // send the request
  xhr.send();
}
