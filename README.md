# Weather App 🌤️

A simple React weather app that shows real-time weather data for any city using the OpenWeatherMap API.

## Features

- Search weather by city name
- Debounced input — no extra API calls while typing
- Displays temperature, humidity, wind, visibility, pressure, sunrise & sunset
- Dynamic weather icons based on conditions
- Responsive layout for mobile and desktop

## Tech Stack

- React (Vite)
- Axios
- OpenWeatherMap API
- react-icons

## Project Structure

```
weather-app/
├── index.html
└── src/
    ├── App.jsx
    ├── App.css
    ├── main.jsx
    ├── index.css
    ├── components/
    │   ├── SearchBar/
    │   ├── WeatherCard/
    │   └── WeatherDetails/
    ├── hooks/
    │   ├── useWeather.js
    │   └── useDebounce.js
    ├── services/
    │   └── weatherApi.js
    ├── utils/
    │   ├── formatTime.js
    │   └── getWeatherIcon.jsx
    └── constants/
        └── config.js
```

## Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your API key**  
   Open `src/constants/config.js` and replace the value with your own key from [openweathermap.org](https://openweathermap.org/api).

4. **Run the app**
   ```bash
   npm run dev
   ```

## Notes

- Temperature is shown in Celsius.
- Sunrise and sunset times are adjusted to the searched city's local timezone.

## Credits

- Weather data — [OpenWeatherMap API](https://openweathermap.org/api)
- Icons — [react-icons](https://react-icons.github.io/react-icons) (Weather Icons, Material Design)
- Built with [React](https://react.dev) + [Vite](https://vitejs.dev)

## Developer

Made by **Achyut Gyawali**