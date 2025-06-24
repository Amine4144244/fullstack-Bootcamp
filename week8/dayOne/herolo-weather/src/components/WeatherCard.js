// src/components/WeatherCard.js
import React from "react";

const WeatherCard = ({ city }) => {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h3>{city.name}</h3>
      <p>Temp: {city.temperature || "N/A"}°</p>
    </div>
  );
};

export default WeatherCard;