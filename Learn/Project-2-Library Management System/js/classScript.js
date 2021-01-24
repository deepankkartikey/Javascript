console.log("Library as a Class");

class Library {
  constructor(bookList) {
    this.bookList = bookList;
    this.issuedTo = {};
  }

  addBook(book) {
    this.bookList.push(book);
  }

  getBookList() {
    this.bookList.forEach((element) => {
      console.log(element);
    });
  }

  issueBook(bookName, user) {
    if (this.issuedTo[bookName] == undefined) {
      this.issuedTo[bookName] = user;
    } else {
      console.warn(
        `${bookName} is already taken/issued to ${this.issuedTo[bookName]}`
      );
    }
  }

  returnBook(bookName) {
    console.log(`${bookName} returned by`, this.issuedTo[bookName]);
  }
}

let books = ["Harry Potter", "365 days", "Deathnote"];
let lib = new Library(books);
lib.issueBook("Harry Potter", "Harry");
console.log(lib);