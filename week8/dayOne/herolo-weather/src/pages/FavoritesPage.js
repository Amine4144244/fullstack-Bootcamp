import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import WeatherCard from "../components/WeatherCard"; // ✅ make sure this path is correct

const FavoritesPage = () => {
  const { favorites } = useContext(WeatherContext); // ✅ now 'favorites' is defined

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Favorite Cities</h2>
      {favorites.length === 0 ? (
        <p>No favorite cities yet.</p>
      ) : (
        favorites.map((city) => (
          <WeatherCard key={city.id} city={city} />
        ))
      )}
    </div>
  );
};

export default FavoritesPage;