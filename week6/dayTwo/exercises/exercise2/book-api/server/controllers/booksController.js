const Books = require('../models/booksModel');

exports.getAllBooks = (req, res) => {
  const allBooks = Books.getAllBooks();
  res.json(allBooks);
};

exports.getBookById = (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = Books.getBookById(bookId);

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  res.status(200).json(book);
};

exports.createBook = (req, res) => {
  const { id, title, author, publishedYear } = req.body;

  if (!id || !title || !author || !publishedYear) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newBook = { id, title, author, publishedYear };
  Books.createBook(newBook);

  res.status(201).json(newBook);
};