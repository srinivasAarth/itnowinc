import React from "react";
import styled from "@emotion/styled";
import { Box, Card, Button, TextField, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  getMainData,
  setLatitude,
  setLongitude,
} from "../../redux/slices/weatherSlice";
const Header = styled(Box)`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const SearchInputs = () => {
  const { cityValue, lon, lat } = useSelector((state: any) => state.weather);
  const dispatch = useDispatch();
  console.log(lon, lat);
  return (
    <Header>
      <TextField
        type="number"
        value={lat}
        onChange={(e) => dispatch(setLatitude(e.target.value))}
        sx={{ width: "40%" }}
        placeholder="Type latitude"
      />
      <TextField
        type="number"
        value={lon}
        onChange={(e) => dispatch(setLongitude(e.target.value))}
        sx={{ width: "40%" }}
        placeholder="Type longitude"
      />
      <Button
        onClick={() => dispatch(getMainData({ latitude: lat, longitude: lon }))}
        variant="contained"
        sx={{ mt: 0, py: 1.5 }}
      >
        Get Report
      </Button>
    </Header>
  );
};

export default SearchInputs;
