import { WiHumidity, WiBarometer, WiStrongWind, WiSunrise, WiSunset } from "react-icons/wi";
import { MdVisibility } from "react-icons/md";
import { formatTime } from "../../utils/formatTime";
import "./WeatherDetails.css";

export function WeatherDetails({ weather }) {
  const { main, wind, visibility, clouds, sys, timezone } = weather;
  return (
    <div className="details-grid">
      <div><WiHumidity size={32} color="#2980b9" /><span>Humidity: {main.humidity}%</span></div>
      <div><WiBarometer size={32} color="#27ae60" /><span>Pressure: {main.pressure} hPa</span></div>
      <div><WiStrongWind size={32} color="#8e44ad" /><span>Wind: {wind.speed} m/s, {wind.deg}°</span></div>
      <div><MdVisibility size={32} color="#34495e" /><span>Visibility: {visibility / 1000} km</span></div>
      <div>🌥 Clouds: {clouds.all}%</div>
      <div><WiSunrise size={32} color="#f39c12" /><span>Sunrise: {formatTime(sys.sunrise, timezone)}</span></div>
      <div><WiSunset size={32} color="#d35400" /><span>Sunset: {formatTime(sys.sunset, timezone)}</span></div>
    </div>
  );
}