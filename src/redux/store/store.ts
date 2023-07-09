import { configureStore } from "@reduxjs/toolkit";
import { registerReducer } from "../slices/registerSlice";
import { weatherReducer } from "../slices/weatherSlice";

export const store = configureStore({
  reducer: {
    register: registerReducer,
    weather: weatherReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
