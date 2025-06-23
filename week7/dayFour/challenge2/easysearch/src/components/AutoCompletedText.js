import React, { Component } from "react";
import countries from "../data/countries"; // Adjust the path accordingly

class AutoCompletedText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      text: "",
    };
  }

  onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = countries.filter((country) => regex.test(country));
    }
    this.setState({ suggestions, text: value });
  };

  suggestionSelected = (value) => {
    this.setState({
      text: value,
      suggestions: []
    });
  };
  
  renderSuggestions = () => {
    const { suggestions } = this.state;

    if (suggestions.length === 0) {
      return null;
    }

    return (
      <ul>
        {suggestions.map((item) => (
          <li key={item} onClick={() => this.suggestionSelected(item)} style={{cursor: 'pointer'}}>
            {item}
          </li>
        ))}
      </ul>
    );
  };
  
  render() {
    return (
      <div>
        <input
          value={this.state.text}
          onChange={this.onTextChanged}
          placeholder="Enter a country..."
        />
        {this.renderSuggestions()}
      </div>
    );
  }
}

export default AutoCompletedText;