import React from 'react';
import './App.css';

// Import other components
import UserFavoriteAnimals from './UserFavoriteAnimals';
import Exercise from './Exercise';

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
};

function App() {
  // JSX Constants
  const helloWorld = <p>Hello World!</p>;
  const myElement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;

  return (
    <div className="App">
      {/* Exercise 1 */}
      {helloWorld}
      {myElement}
      <p>React is {sum} times better with JSX</p>

      <hr />

      {/* Exercise 2 */}
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <UserFavoriteAnimals animals={user.favAnimals} />

      <hr />

      {/* Exercise 3 */}
      <Exercise />
    </div>
  );
}

export default App;