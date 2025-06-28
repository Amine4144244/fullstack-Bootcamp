import React from 'react';
import BookList from './components/BookList';

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>📚 Book Inventory</h1>
      <BookList />
    </div>
  );
};

export default App;