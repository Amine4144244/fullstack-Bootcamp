let books = [
  { id: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien', publishedYear: 1937 },
  { id: 2, title: '1984', author: 'George Orwell', publishedYear: 1949 },
];

const getAllBooks = () => books;

const getBookById = (id) => books.find((book) => book.id === id);

const createBook = (book) => {
  books.push(book);
  return book;
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
};