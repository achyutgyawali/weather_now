import { getWeatherIcon } from "../../utils/getWeatherIcon";
import { WeatherDetails } from "../WeatherDetails/WeatherDetails";
import "./WeatherCard.css";

export function WeatherCard({ weather }) {
  const { name, sys, main, weather: w } = weather;
  return (
    <div className="weather-card">
      <div className="weather-header">
        <h1>{name}, {sys.country}</h1>
        <div>{getWeatherIcon(w[0].main)}</div>
      </div>
      <h2>{Math.round(main.temp)}°C</h2>
      <p className="feels-like">Feels like: {Math.round(main.feels_like)}°C</p>
      <p><strong>{w[0].main}:</strong> {w[0].description}</p>
      <WeatherDetails weather={weather} />
      <p>Temp Min: {Math.round(main.temp_min)}°C | Max: {Math.round(main.temp_max)}°C</p>
    </div>
  );
}