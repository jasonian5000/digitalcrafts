const API_KEY = "2ce8b80170bb4bd65594b9e3f7f6ae5a"
const searchbutton = document.getElementById("search-button")
const temp = document.getElementById("temperature")

const searchWeather = async () => {
    const searchInput = document.getElementById("weather-bar").value
    if (isNaN(searchInput) === true){
        url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.toUpperCase()},us&appid=${API_KEY}&units=imperial`
    }
    if (isNaN(searchInput) === false){
        url = `https://api.openweathermap.org/data/2.5/weather?zip=${searchInput},us&appid=${API_KEY}&units=imperial`
    }
    const weatherData = await fetch(url)
    const json = await weatherData.json()
    temp.innerText = json.main.temp
    console.log(json)
}
searchbutton.onclick = () => searchWeather()