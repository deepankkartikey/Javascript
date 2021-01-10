console.log("Simple Note-Taking App");
let notesObj = new Array();
showNotes();

// When User adds a note, add to local storage
let addNote = document.getElementById("addBtn");

addNote.addEventListener("click", function (e) {
  let addTitle = document.getElementById("addTitle");
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  let obj = {
    title: addTitle.value,
    desc: addTxt.value
  }
  if (notes != null) {
    notesObj = JSON.parse(notes);
  }
  if (obj.title!='' || obj.desc!='') {
    notesObj.push(obj);
  }
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
  addTitle.value = "";
  addTxt.value = "";
});

// show elements from local storage
function showNotes() {
  let notes = localStorage.getItem("notes");
  // console.log(notes);
  if (notes != null) {
    notesObj = JSON.parse(notes);
  }

  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
        <div class="notecard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.desc}</p>
            <button class="btn btn-danger" id="${index}" onclick="deleteNote(this.id)">Delete</button>
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

// To delete note
function deleteNote(index) {
  // console.log(`Delete Button ${index} clicked`);
  let notes = localStorage.getItem("notes");
  if (notes != null) {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

// search functionality for notes app
let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  let searchTxt = search.value.toLowerCase();
  let noteCards = document.getElementsByClassName("notecard");
  Array.from(noteCards).forEach(function (noteCard) {
    let note = noteCard.getElementsByTagName("p")[0].innerText.toLowerCase();
    // console.log('Note: ',note);
    // console.log('Search: ',searchTxt);
    if (note.includes(searchTxt)) {
      //console.log(noteCard);
      noteCard.style.display = "block";
    } else {
      //console.log('No match!')
      noteCard.style.display = "none";
    }
  });
});
