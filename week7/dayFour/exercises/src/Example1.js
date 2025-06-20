import React, { Component } from "react";
import data from "./data.json";

class Example1 extends Component {
  render() {
    return (
      <div>
        <h3>Social Medias</h3>
        <ul>
          {data.SocialMedias.map((media, index) => (
            <li key={index}>{media}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example1;