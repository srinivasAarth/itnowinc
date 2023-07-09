import axios from "axios";
export const api = axios.create({
  //   baseURL: "https://api.openweathermap.org/",
  baseURL: "https://api.open-meteo.com/v1/", // i can hide this in .env file but i dont have much time i stuct at openWeatherApi 401 error
  headers: { "Content-Type": "application/json" },
});
