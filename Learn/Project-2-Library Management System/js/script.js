console.log("Hogward's Library");

function Book(title, writer, genre) {
  this.title = title;
  this.author = writer;
  this.genre = genre;
}

let libraryForm = document.getElementById("libraryForm");
// console.log(libraryForm);
libraryForm.addEventListener("submit", libraryFormSubmit);
displayStoredBooks();

function displayStoredBooks() {
  let booksObj = localStorage.getItem('books');
  let books = JSON.parse(booksObj);
  // console.log(books);
  let tableBody = document.getElementById('tableBody');
  for(let book of books){
    let uiString =
    `<tr>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.genre}</td>
    <td><button class="btn btn-danger">Delete</button></td>
  </tr>`
  tableBody.innerHTML += uiString;
  }
}

function libraryFormSubmit(event) {
  event.preventDefault();
  let bookTitle = document.getElementById("bookName").value;
  let bookAuthor = document.getElementById("author").value;
  let bookGenre = getSelectedGenre();
  // console.log(bookTitle, bookAuthor, bookGenre);
  let newBook = new Book(bookTitle, bookAuthor, bookGenre);
  // storeBook(newBook);
  if (validate(newBook)) {
    displayBook(newBook);
    saveBook(newBook);
    show("success", "Book has been successfully added!");
  } else {
    show(
      "danger",
      "Validation failed! Book Name or Author name less than 2 characters"
    );
  }
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
    <td><button class="btn btn-danger">Delete</button></td>
  </tr>
  `;
  tableBody.innerHTML += uiString;
}

function validate(book) {
  return book.title.length > 2 && book.author.length > 2;
}

function show(type, message) {
  let msg = document.getElementById("msg");
  msg.innerHTML = `
  <div class="alert alert-${type} alert-dismissible fade show" role="alert">
  <strong>${message}</strong>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
  </button>
</div>
    `;
  setTimeout(function () {
    msg.innerHTML = "";
  }, 3000);
}

function saveBook(book) {
  let booksObj = new Array();
  let books = localStorage.getItem("books");
  if (books) {
    booksObj = JSON.parse(books);
  }
  booksObj.push(book);
  localStorage.setItem("books", JSON.stringify(booksObj));
}
