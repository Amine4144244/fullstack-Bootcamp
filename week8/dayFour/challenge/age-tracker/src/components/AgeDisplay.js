import React from 'react';
import { useSelector } from 'react-redux';

const AgeDisplay = () => {
  const age = useSelector((state) => state.age.value);
  const loading = useSelector((state) => state.age.loading);

  return (
    <div>
      <h2>Your Age: {age}</h2>
      {loading && <p>⏳ Updating...</p>}
    </div>
  );
};

export default AgeDisplay;