console.log("Simple Note-Taking App");
let notesObj = new Array();
showNotes();

// When User adds a note, add to local storage
let addNote = document.getElementById("addBtn");

addNote.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes != null) {
    notesObj = JSON.parse(notes);
  }
  if (addTxt.value) {
    notesObj.push(addTxt.value);
  }
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  showNotes();
});


// show elements from local storage
function showNotes() {
  let notes = localStorage.getItem("notes");
  console.log(notes);
  if (notes != null) {
    notesObj = JSON.parse(notes);
  }

  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
        <div class="notecard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button class="btn btn-danger">Delete</button>
        </div>
    </div>
    `;
  });

  let notesElem = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElem.innerHTML = html;
  } else {
    notesElem.innerHTML = `No Notes added!`;
  }
}
