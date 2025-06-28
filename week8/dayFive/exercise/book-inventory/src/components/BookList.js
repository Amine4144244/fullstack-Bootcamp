import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectHorrorBooks,
  selectFantasyBooks,
  selectScienceFictionBooks,
} from '../features/booksSlice';

const BookList = () => {
  const [genre, setGenre] = useState('Horror');

  const books = useSelector((state) => {
    switch (genre) {
      case 'Fantasy':
        return selectFantasyBooks(state);
      case 'Science Fiction':
        return selectScienceFictionBooks(state);
      case 'Horror':
      default:
        return selectHorrorBooks(state);
    }
  });

  return (
    <div>
      <h2>{genre} Books</h2>
      <select onChange={(e) => setGenre(e.target.value)} value={genre}>
        <option value="Horror">Horror</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Science Fiction">Science Fiction</option>
      </select>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;