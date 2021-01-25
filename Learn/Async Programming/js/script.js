console.log("AJAX");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
  console.log("Fetch Clicked");

  // initialize XHR object
  const xhr = new XMLHttpRequest();

  // open XHR object
  xhr.open('GET', './note.txt', true);

  // what to do on progress
  xhr.onprogress = () => {
    console.log("On Progress");
  };

  // what to do when response is ready
  xhr.onload = () => {
    if (this.status === 200) {
      console.log(this.responseText);
    } else {
      console.log(this.status, "Some Error Occured");
    }
  };

  // send the request
  xhr.send();
}
