import React, { Component } from "react";
import data from "./data.json";

class Example3 extends Component {
  render() {
    return (
      <div>
        <h3>Experiences</h3>
        {data.Experiences.map((exp, index) => (
          <div key={index}>
            <p>{exp.company} - {exp.years} years</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;