import React, { useState } from 'react';

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const voteForLanguage = (index) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index].votes += 1;
    setLanguages(updatedLanguages);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Vote for Your Favorite Language</h1>
      {languages.map((lang, index) => (
        <div key={lang.name} style={{ margin: '20px' }}>
          <button onClick={() => voteForLanguage(index)}>
            {lang.name} - {lang.votes} votes
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;