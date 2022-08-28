import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function SearchBar() {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.location);
  const API_KEY = "";
  const searchWeather = async () => {
    let url = "";
    if (isNaN(location) === true) {
      url = `https://api.openweathermap.org/data/2.5/weather?q=${location.toUpperCase()},us&appid=${API_KEY}&units=imperial`;
    }
    if (isNaN(location) === false) {
      url = `https://api.openweathermap.org/data/2.5/weather?zip=${location},us&appid=${API_KEY}&units=imperial`;
    }
    const weatherData = await fetch(url);
    const json = await weatherData.json();
    dispatch({ type: "SET_WEATHER", payload: json });
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      dispatch({ type: "SET_LOCATION", payload: e.target.value });
      searchWeather();
    }
  };
  return (
    <div className="search-bar">
      <input
        type="text"
        onChange={(e) =>
          dispatch({ type: "SET_LOCATION", payload: e.target.value })
        }
        onKeyPress={(e) => handleKeyPress(e)}
        placeholder="enter a city or zip code"
      />
      <button
        disabled={!location ? true : false}
        onClick={() => searchWeather()}
      >
        Search
      </button>
    </div>
  );
}
