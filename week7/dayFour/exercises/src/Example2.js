import React, { Component } from "react";
import data from "./data.json";

class Example2 extends Component {
  render() {
    return (
      <div>
        <h3>Skills</h3>
        {Object.entries(data.Skills).map(([key, values]) => (
          <div key={key}>
            <strong>{key}</strong>: {values.join(", ")}
          </div>
        ))}
      </div>
    );
  }
}

export default Example2;