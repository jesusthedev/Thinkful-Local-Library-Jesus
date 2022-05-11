//function that returns array of authors with ID
function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id );
}

//function that returns array of books with ID
function findBookById(books, id) {
  return books.find((book) => book.id.includes(id));
}

//function that returns an array consisting of two arrays: an array of available books and an array of books currently borrowed
function partitionBooksByBorrowedStatus(books) {
  const availableList = books.filter((book) => book.borrows[0].returned === true);
  const borrowedList = books.filter((book) => book.borrows[0].returned === false);
  return [borrowedList, availableList];
}

//function that returns an array of all of the transactions within a borrow array. the result includes account object information
function getBorrowersForBook(book, accounts) {
  const result = [];
  for (let account of accounts) {
    for (let i = 0; i < book.borrows.length; i++) {
      if(account.id === book.borrows[i].id) {
        const returned = book.borrows[i].returned
        result.push({...account, returned })
      }
    }
  }
  return result.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
