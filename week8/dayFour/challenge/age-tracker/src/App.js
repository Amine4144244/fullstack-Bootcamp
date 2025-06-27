import React from 'react';
import AgeDisplay from './components/AgeDisplay';
import AgeControls from './components/AgeControls';

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>🎂 Age Tracker</h1>
      <AgeDisplay />
      <AgeControls />
    </div>
  );
};

export default App;