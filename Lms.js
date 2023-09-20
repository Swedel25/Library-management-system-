// Define the Book object constructor
function Book(title, author) {
  this.title = title;
  this.author = author;
  this.isAvailable = true;
}

// Create an array to store the books
let library = [];

// Function to add a new book to the library
function addBook(title, author) {
  const newBook = new Book(title, author);
  library.push(newBook);
}

// Function to borrow a book
function borrowBook(title) {
  for (const book of library) {
    if (book.title === title && book.isAvailable) {
      book.isAvailable = false;
      console.log(`You have borrowed "${book.title}" by ${book.author}.`);
      return;
    }
  }
  console.log(`"${title}" is not available for borrowing.`);
}

// Function to return a book
function returnBook(title) {
  for (const book of library) {
    if (book.title === title && !book.isAvailable) {
      book.isAvailable = true;
      console.log(`You have returned "${book.title}" by ${book.author}.`);
      return;
    }
  }
  console.log(`"${title}" cannot be returned as it is not currently borrowed.`);
}

// Function to list all books in the library
function listBooks() {
  if (library.length === 0) {
    console.log("The library is empty.");
  } else {
    console.log("Library Books:");
    for (const book of library) {
      const status = book.isAvailable ? "Available" : "Borrowed";
      console.log(`"${book.title}" by ${book.author} - ${status}`);
    }
  }
}

// Example usage
addBook("Book 1", "Author 1");
addBook("Book 2", "Author 2");
borrowBook("Book 1");
borrowBook("Book 2");
listBooks();
returnBook("Book 1");
listBooks();
