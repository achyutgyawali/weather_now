import { useState } from "react";
import { useWeather } from "./hooks/useWeather";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { WeatherCard } from "./components/WeatherCard/WeatherCard";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const { weather, loading, errorMsg } = useWeather(city);

  return (
    <div className="app-container">
      <h1 className="title">Weather App</h1>
      <SearchBar city={city} onChange={setCity} />
      <div className="display-section">
        {loading   ? <div className="loader">Loading...</div>
        : errorMsg ? <h3 className="error">{errorMsg}</h3>
        : weather  ? <WeatherCard weather={weather} />
        : <h3 className="hint">Search for a city to see weather details.</h3>}
      </div>
    </div>
  );
}

export default App;