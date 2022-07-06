const API_KEY = "0e8b8e4a59d7e7df9bedc4a1a86a5e89";
const searchbutton = document.getElementById("search-button");
const dayDate = document.getElementById("day-date");
const time = document.getElementById("time");
const weatherLocation = document.getElementById("weather-location");
const icon = document.getElementById("icon");
const description = document.getElementById("description");
const temp = document.getElementById("temperature");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const high = document.getElementById("high");
const low = document.getElementById("low");
const src = document.createElement("src");

const searchWeather = async () => {
  const searchInput = document.getElementById("weather-bar").value;
  if (isNaN(searchInput) === true) {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.toUpperCase()},us&appid=${API_KEY}&units=imperial`;
  }
  if (isNaN(searchInput) === false) {
    url = `https://api.openweathermap.org/data/2.5/weather?zip=${searchInput},us&appid=${API_KEY}&units=imperial`;
  }
  const weatherData = await fetch(url);
  const json = await weatherData.json();
  temp.innerText = Math.round(json.main.temp);
  weatherLocation.innerText = json.name;
  feelsLike.innerText = `${Math.round(json.main.feels_like)}º`;
  humidity.innerText = `${Math.round(json.main.humidity)}%`;
  high.innerText = `${Math.round(json.main.temp_max)}º`;
  low.innerText = `${Math.round(json.main.temp_min)}º`;
  description.innerText = json.weather[0].description;
  icon.src = `https://openweathermap.org/img/wn/${json.weather[0].icon}@4x.png`;
};

searchbutton.onclick = () => searchWeather();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let now = new Date();
dayDate.innerText = `${days[now.getDay()]}, ${
  months[now.getMonth()]
} ${now.getDate()} `;
time.innerText = now
  .toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  })
  .replace(" AM", "am")
  .replace(" PM", "pm");
