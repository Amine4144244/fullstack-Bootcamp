import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "#1976d2",
        color: "white",
      }}
    >
      <h1>Herolo Weather App</h1>
      <nav>
        <Link to="/" style={{ color: "white", marginRight: "1rem" }}>
          Weather
        </Link>
        <Link to="/favorites" style={{ color: "white" }}>
          Favorites
        </Link>
      </nav>
    </header>
  );
};

export default Header;