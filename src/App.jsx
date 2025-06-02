import axios from "axios";
import { useState, useEffect } from "react";
import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiFog,
  WiStrongWind,
  WiHumidity,
  WiBarometer,
  WiSunrise,
  WiSunset,
} from "react-icons/wi";
import { MdVisibility } from "react-icons/md";
import "./App.css";


function App() {
  const [city, setCity] = useState("");
  const [debouncedCity, setDebouncedCity] = useState(city);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const API_KEY = "8d2daf896b495a420fe989c55c30db27";

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedCity(city), 800);
    return () => clearTimeout(handler);
  }, [city]);

  useEffect(() => {
    if (!debouncedCity) {
      setWeather(null);
      setErrorMsg("");
      return;
    }
    const fetchWeather = async () => {
      setLoading(true);
      setErrorMsg("");
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${debouncedCity}&appid=${API_KEY}&units=metric`
        );
        setWeather(res.data);
      } catch (error) {
        setWeather(null);
        setErrorMsg("City not found. Please try again.");
      }
      setLoading(false);
    };
    fetchWeather();
  }, [debouncedCity]);

  const getWeatherIcon = (main) => {
    switch (main) {
      case "Clear":
        return <WiDaySunny size={80} color="#f39c12" />;
      case "Clouds":
        return <WiCloud size={80} color="#7f8c8d" />;
      case "Rain":
      case "Drizzle":
        return <WiRain size={80} color="#3498db" />;
      case "Snow":
        return <WiSnow size={80} color="#95a5a6" />;
      case "Thunderstorm":
        return <WiThunderstorm size={80} color="#34495e" />;
      case "Mist":
      case "Fog":
      case "Haze":
        return <WiFog size={80} color="#bdc3c7" />;
      default:
        return <WiDaySunny size={80} color="#f39c12" />;
    }
  };

  // Correct time formatting: converts UTC unix + timezone offset (seconds) to local time string
 function formatTime(unixUTC, timezoneOffsetInSeconds) {
  const localTime = new Date((unixUTC + timezoneOffsetInSeconds) * 1000);
  const hours = localTime.getUTCHours();
  const minutes = localTime.getUTCMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const hour12 = hours % 12 === 0 ? 12 : hours % 12;
  const minutesPadded = minutes < 10 ? "0" + minutes : minutes;

  return `${hour12}:${minutesPadded} ${ampm}`;
}


  return (
    <div className="app-container">
      <h1 className="title">Weather App</h1>

      <div className="search-section">
        <input
          type="text"
          placeholder="Type a city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="city-input"
        />
      </div>

      <div className="display-section">
        {loading ? (
          <div className="loader">Loading...</div>
        ) : errorMsg ? (
          <h3 className="error">{errorMsg}</h3>
        ) : weather ? (
          <div className="weather-card">
            <div className="weather-header">
              <h1>
                {weather.name}, {weather.sys.country}
              </h1>
              <div>{getWeatherIcon(weather.weather[0].main)}</div>
            </div>

            <h2>{Math.round(weather.main.temp)}°C</h2>
            <p className="feels-like">
              Feels like: {Math.round(weather.main.feels_like)}°C
            </p>

            <p>
              <strong>{weather.weather[0].main}:</strong>{" "}
              {weather.weather[0].description}
            </p>

            <div className="details-grid">
              <div>
                <WiHumidity size={32} color="#2980b9" />
                <span>Humidity: {weather.main.humidity}%</span>
              </div>
              <div>
                <WiBarometer size={32} color="#27ae60" />
                <span>Pressure: {weather.main.pressure} hPa</span>
              </div>
              <div>
                <WiStrongWind size={32} color="#8e44ad" />
                <span>
                  Wind: {weather.wind.speed} m/s, {weather.wind.deg}°
                </span>
              </div>
              <div>
                <MdVisibility size={32} color="#34495e" />
                <span>Visibility: {weather.visibility / 1000} km</span>
              </div>
              <div>🌥 Clouds: {weather.clouds.all}%</div>
              <div>
                <WiSunrise size={32} color="#f39c12" />
                <span>
                  Sunrise: {formatTime(weather.sys.sunrise, weather.timezone)}
                </span>
              </div>
              <div>
                <WiSunset size={32} color="#d35400" />
                <span>
                  Sunset: {formatTime(weather.sys.sunset, weather.timezone)}
                </span>
              </div>
            </div>

            <p>
              Temp Min: {Math.round(weather.main.temp_min)}°C | Max:{" "}
              {Math.round(weather.main.temp_max)}°C
            </p>
          </div>
        ) : (
          <h3 className="hint">Search for a city to see weather details.</h3>
        )}
      </div>
    </div>
  );
}

export default App;
