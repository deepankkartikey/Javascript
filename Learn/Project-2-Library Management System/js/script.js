console.log("Hogward's Library");

function Book(title, writer, genre) {
  this.title = title;
  this.author = writer;
  this.genre = genre;
}

let libraryForm = document.getElementById("libraryForm");
// console.log(libraryForm);
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(event) {
  event.preventDefault();
  let bookTitle = document.getElementById("bookName").value;
  let bookAuthor = document.getElementById("author").value;
  let bookGenre = getSelectedGenre();
  // console.log(bookTitle, bookAuthor, bookGenre);
  let newBook = new Book(bookTitle, bookAuthor, bookGenre);
  // storeBook(newBook);
  displayBook(newBook);
}

function getSelectedGenre() {
  let genres = document.getElementsByName("genre");
  for (let genre of genres) {
    if (genre.checked) {
      return genre.value;
    }
  }
}

function displayBook(book) {
  let tableBody = document.getElementById("tableBody");
  let uiString = `                    
  <tr>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.genre}</td>
  </tr>
  `;
  tableBody.innerHTML += uiString;
}
