import React from 'react';

class UserFavoriteAnimals extends React.Component {
  render() {
    return (
      <div>
        <h2>Favorite Animals:</h2>
        <ul>
          {this.props.animals.map((animal, index) => (
            <li key={index}>{animal}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserFavoriteAnimals;