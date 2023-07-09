import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const registerSlice = createSlice({
  name: "registerData",
  initialState: {
    records: [],
  },
  reducers: {
    setRecords: (state: any, { payload }) => {
      state.records = [...state.records, payload];
    },
  },
});

export const { setRecords } = registerSlice.actions;
export const registerReducer = registerSlice.reducer;
