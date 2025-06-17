// src/Components/Phone.js
import React, { useState } from 'react';

function Phone() {
  const [phone, setPhone] = useState({
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020
  });

  const changeColor = () => {
    setPhone(prev => ({ ...prev, color: "blue" }));
  };

  return (
    <div>
      <h2>Brand: {phone.brand}</h2>
      <h2>Model: {phone.model}</h2>
      <h2>Color: {phone.color}</h2>
      <h2>Year: {phone.year}</h2>
      <button onClick={changeColor}>Change Color to Blue</button>
    </div>
  );
}

export default Phone;