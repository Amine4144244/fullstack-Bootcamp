import React, { useState } from 'react';
import quotes from './quotes';
import './index.css';

const getRandomIndex = (max, exclude) => {
  let index;
  do {
    index = Math.floor(Math.random() * max);
  } while (index === exclude);
  return index;
};

const getRandomColor = () => {
  const colors = ['#264653', '#2a9d8f', '#e76f51', '#8ecae6', '#f4a261', '#a8dadc'];
  return colors[Math.floor(Math.random() * colors.length)];
};

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgColor, setBgColor] = useState(getRandomColor());

  const handleNewQuote = () => {
    const newIndex = getRandomIndex(quotes.length, currentIndex);
    setCurrentIndex(newIndex);
    setBgColor(getRandomColor());
  };

  const { quote, author } = quotes[currentIndex];

  return (
    <div className="app" style={{ backgroundColor: bgColor }}>
      <div className="quote-box">
        <h1 className="quote-text" style={{ color: bgColor }}>
          "{quote}"
        </h1>
        <p className="quote-author">- {author} -</p>
        <button
          className="new-quote-btn"
          style={{ backgroundColor: bgColor }}
          onClick={handleNewQuote}
        >
          New quote
        </button>
      </div>
    </div>
  );
}

export default App;