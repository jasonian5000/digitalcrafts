import React from "react";
import { useSelector } from "react-redux";

export default function WeatherInfo() {
  const weather = useSelector((state) => state.weather);
  return (
    <div className="temp">
      <h1>{Math.round(weather?.main?.temp)}ºF</h1>
      <img src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@4x.png`} alt=""/>
      <p>feels like: {Math.round(weather?.main?.feels_like)}ºF</p>
      <p>high: {Math.round(weather?.main?.temp_max)}ºF</p>
      <p>low: {Math.round(weather?.main?.temp_min)}ºF</p>
    </div>
  );
}
