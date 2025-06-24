import React from "react";

const ForecastList = ({ forecast }) => {
  return (
    <div>
      <h3>5-Day Forecast</h3>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {forecast.map((day, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              borderRadius: "8px",
            }}
          >
            <p>{day.date}</p>
            <p>{day.condition}</p>
            <p>{day.temperature}°</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastList;