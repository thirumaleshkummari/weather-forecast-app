import React, { useState } from "react";

import './index.css'

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
    setQuery("");
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit">
            <img src="https://img.icons8.com/?size=100&id=7695&format=png&color=000000" alt="search icon" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;