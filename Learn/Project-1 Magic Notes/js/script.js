console.log('Simple Note-Taking App');

// When User adds a note, add to local storage
let addNote = document.getElementById('addBtn');
addNote.addEventListener('click', function(e){
    let noteDesc = document.getElementById('addTxt').value;
    console.log(noteDesc);
})
