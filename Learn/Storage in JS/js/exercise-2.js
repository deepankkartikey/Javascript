console.log("Local Storage");

let newDiv = document.createElement("div");
let textNode = document.createTextNode("This is editable");
newDiv.appendChild(textNode);
newDiv.setAttribute("class", "edit");
newDiv.setAttribute("name", "editable");
newDiv.style =
  "margin: 15px; padding:5px; border: 2px solid black; width: 166px;";
document.body.appendChild(newDiv);

newDiv.addEventListener("click", function edit() {
  let noOfTextAreas = document.getElementsByClassName("textarea").length;
  // console.log("CLICKED");
  if (noOfTextAreas == 0) {
    newDiv.innerHTML = `<textarea id="textarea" class="textarea">${newDiv.innerHTML}</textarea>`;
  }

  let textarea = document.getElementById("textarea");
  textarea.addEventListener("blur", function () {
    newDiv.innerHTML = textarea.value;
    localStorage.setItem("TextArea", newDiv.innerHTML);
  });
});
