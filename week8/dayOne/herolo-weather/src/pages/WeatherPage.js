import React, { useState, useEffect } from "react";
import {
  searchCity,
  getCurrentWeather,
  get5DayForecast,
} from "../api/weatherAPI";
import SearchBar from "../components/SearchBar";
import ForecastList from "../components/ForecastList";

const WeatherPage = () => {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("Casablanca");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  const fetchWeatherData = async (cityName) => {
    try {
      const cityInfo = await searchCity(cityName);
      if (!cityInfo) return;

      const locationKey = cityInfo.Key;
      setCity(cityInfo.LocalizedName);

      const current = await getCurrentWeather(locationKey);
      const forecast5 = await get5DayForecast(locationKey);

      setWeather(current);
      setForecast(
        forecast5.map((day) => ({
          date: day.Date.split("T")[0],
          temperature: `${day.Temperature.Maximum.Value}°`,
          condition: day.Day.IconPhrase,
        }))
      );
    } catch (err) {
      console.error("API error:", err);
    }
  };

  useEffect(() => {
    fetchWeatherData("Casablanca"); // Load default
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      fetchWeatherData(search.trim());
      setSearch("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Weather Page</h2>
      <SearchBar
        value={search}
        onChange={handleSearch}
        onSubmit={handleSubmit}
      />
      {weather && (
        <div>
          <h3>Weather in {city}</h3>
          <p>🌡 Temperature: {weather.Temperature.Metric.Value}°C</p>
          <p>☀️ Condition: {weather.WeatherText}</p>
        </div>
      )}
      <ForecastList forecast={forecast} />
    </div>
  );
};

export default WeatherPage;