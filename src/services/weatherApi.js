import axios from "axios";
import { API_KEY, BASE_URL } from "../constants/config";

export async function fetchWeatherByCity(city) {
  const res = await axios.get(
    `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  return res.data;
}