import { useState, useEffect } from "react";
import { fetchWeatherByCity } from "../services/weatherApi";
import { useDebounce } from "./useDebounce";

export function useWeather(city) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const debouncedCity = useDebounce(city);

  useEffect(() => {
    if (!debouncedCity) { setWeather(null); setErrorMsg(""); return; }
    const load = async () => {
      setLoading(true); setErrorMsg("");
      try {
        setWeather(await fetchWeatherByCity(debouncedCity));
      } catch {
        setWeather(null); setErrorMsg("City not found. Please try again.");
      }
      setLoading(false);
    };
    load();
  }, [debouncedCity]);

  return { weather, loading, errorMsg };
}