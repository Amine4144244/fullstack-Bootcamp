import React from "react";

const SearchBar = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search city..."
        style={{ padding: "8px", width: "250px" }}
      />
      <button type="submit" style={{ marginLeft: "10px", padding: "8px" }}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
