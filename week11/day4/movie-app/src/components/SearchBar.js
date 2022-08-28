import React from "react";

export default function SearchBar(props) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter'){
      props.fetchMovies()
    }
  } 
  return (
    <div className="search-bar">
      <input
        className="search-input"
        value={props.query}
        type="text"
        placeholder="search movies.."
        onChange={(e) => props.setQuery(e.target.value)}
        onKeyPress={(e) => handleKeyPress(e)}
      />
    </div>
  );
}
