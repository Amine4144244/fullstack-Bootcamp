import React from 'react';
import './Exercise.css';

class Exercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  // Handle input change
  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  // Handle form submission
  handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    alert('You entered: ' + this.state.inputValue);
  };

  render() {
    const style_header = {
      color: 'white',
      backgroundColor: 'DodgerBlue',
      padding: '10px',
      fontFamily: 'Arial'
    };

    return (
      <div>
        <h1 style={style_header}>This is a Styled Header</h1>

        <p className="para">Styled paragraph using external CSS.</p>

        <a href="https://reactjs.org"  target="_blank" rel="noopener noreferrer">
          React Official Site
        </a>

        {/* Form with onSubmit */}
        <form onSubmit={this.handleSubmit}>
          <h4>Simple Form</h4>
          <label>
            Name:
            <input
              type="text"
              value={this.state.inputValue}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>

        <h4>Image Example</h4>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" 
          alt="React Logo"
        />

        <h4>List Example</h4>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;