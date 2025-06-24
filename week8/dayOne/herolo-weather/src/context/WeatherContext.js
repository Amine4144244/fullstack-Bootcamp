import React, { createContext, useState } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [currentCity, setCurrentCity] = useState(null);
  
  const toggleFavorite = (city) => {
    setFavorites((prev) =>
      prev.find((c) => c.id === city.id)
        ? prev.filter((c) => c.id !== city.id)
        : [...prev, city]
    );
  };

  return (
    <WeatherContext.Provider
      value={{ favorites, toggleFavorite, currentCity, setCurrentCity }}
    >
      {children}
    </WeatherContext.Provider>
  );
};