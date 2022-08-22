import "./App.css";
import SearchBar from "./components/SearchBar";
import TimeDate from "./components/TimeDate";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <TimeDate />
      <WeatherInfo />
    </div>
  );
}

export default App;
