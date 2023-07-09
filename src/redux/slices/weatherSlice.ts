import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getWeather } from "../../service/service";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    wheatherData: [],
    status: true,
    error: false,
    cityValue: "",
    lat: 0,
    lon: 0,
  },
  reducers: {
    setWeatherData: (state, { payload }) => {
      state.wheatherData = payload;
    },
    setStatus: (state, { payload }) => {
      state.status = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
    setLatitude: (state, { payload }) => {
      state.lat = payload;
    },
    setLongitude: (state, { payload }) => {
      state.lon = payload;
    },
  },
});
export const getPosition = () => {
  return new Promise<GeolocationCoordinates>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position.coords),
      (error) => reject(error)
    );
  });
};
export const getMainData =
  ({ latitude, longitude }) =>
  async (dispatch: any) => {
    try {
      if (navigator.geolocation) {
        dispatch(setStatus(true));
        // openWeatherAPI saying it will be activated after 3 hours to 4 hours i dont know way this is happening to me, im getting 401 error since 3 hours i created so many keys in openWeatherAPI
        // so im using different api for serving the data and matching the deadline
        const res = await getWeather(latitude, longitude);
        dispatch(setWeatherData(res.data || []));
        dispatch(setStatus(false));
      } else {
        console.log("Geolocation is not supported.");
      }
    } catch (err) {
      console.log(err);
    }
  };

export const { setWeatherData, setStatus, setLatitude, setLongitude } =
  weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;
