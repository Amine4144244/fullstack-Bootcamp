// src/Components/Events.js
import React, { useState } from 'react';

function Events() {
  const clickMe = () => alert('I was clicked');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      alert(`You pressed Enter with value: ${e.target.value}`);
    }
  };

  const [isToggleOn, setIsToggleOn] = useState(true);

  const toggleButton = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div>
      <button onClick={clickMe}>Click Me</button>
      <br /><br />

      <input type="text" onKeyDown={handleKeyDown} placeholder="Press Enter" />
      <br /><br />

      <button onClick={toggleButton}>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

export default Events;