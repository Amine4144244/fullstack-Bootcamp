// client/src/App.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    serverMessage: '',
    inputValue: '',
    responseMessage: ''
  };

  async componentDidMount() {
  try {
    const response = await fetch('http://localhost:3001/api/hello');
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const data = await response.json();
    this.setState({ serverMessage: data.message });
  } catch (error) {
    console.error("Fetch error:", error);
    this.setState({ serverMessage: "Failed to connect to server." });
  }
}

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    try {
      const response = await fetch('http://localhost:3001/api/world', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value: this.state.inputValue }),
      });
      const data = await response.json();
      this.setState({ 
        responseMessage: data.message,
        inputValue: '' 
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.serverMessage}</h1>
          
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.inputValue}
              onChange={this.handleInputChange}
              placeholder="Type something..."
            />
            <button type="submit">Submit</button>
          </form>
          
          {this.state.responseMessage && (
            <p>{this.state.responseMessage}</p>
          )}
        </header>
      </div>
    );
  }
}

export default App;