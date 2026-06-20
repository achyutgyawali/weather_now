import { WiDaySunny, WiCloud, WiRain, WiSnow, WiThunderstorm, WiFog } from "react-icons/wi";

export function getWeatherIcon(main) {
  switch (main) {
    case "Clear":       return <WiDaySunny size={80} color="#f39c12" />;
    case "Clouds":      return <WiCloud size={80} color="#7f8c8d" />;
    case "Rain":
    case "Drizzle":     return <WiRain size={80} color="#3498db" />;
    case "Snow":        return <WiSnow size={80} color="#95a5a6" />;
    case "Thunderstorm":return <WiThunderstorm size={80} color="#34495e" />;
    case "Mist":
    case "Fog":
    case "Haze":        return <WiFog size={80} color="#bdc3c7" />;
    default:            return <WiDaySunny size={80} color="#f39c12" />;
  }
}