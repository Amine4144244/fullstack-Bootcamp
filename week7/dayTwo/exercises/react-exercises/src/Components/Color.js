// src/Components/Color.js
import React, { useState, useEffect } from 'react';

function Color() {
  const [favoriteColor, setFavoriteColor] = useState("red");

  useEffect(() => {
    alert("useEffect reached");
  }, []); // Only runs once on mount

  const changeColor = () => {
    setFavoriteColor("blue");
  };

  return (
    <div>
      <h1>My favorite color is {favoriteColor}</h1>
      <button onClick={changeColor}>Change to Blue</button>
    </div>
  );
}

export default Color;