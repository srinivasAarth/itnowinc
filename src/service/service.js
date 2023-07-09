import { api } from "./api";
const service = {
  getWeather: (lat, log) =>
    api.get(
      `forecast?latitude=${parseInt(lat)}&longitude=${parseInt(
        log
      )}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`
    ),
};

export const { getWeather } = service;
