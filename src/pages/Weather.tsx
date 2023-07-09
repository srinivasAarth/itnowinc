import React from "react";
import styled from "@emotion/styled";
import { Box, Card, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getMainData, getPosition } from "../redux/slices/weatherSlice";
import SearchInputs from "../components/weather/Header";
import WeatherAnalytics from "../components/weather/WeatherAnalytics";
import LoadAndError from "../LoadAndError";
const WeatherRoot = styled(Box)`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const WeatherBox = styled(Card)`
  height: 40rem;
  width: 50rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem;
  flex-direction: column;
`;
const Whether = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state: any) => state.weather);
  React.useEffect(() => {
    const fetchWeatherData = async () => {
      const coord = await getPosition();
      const { latitude, longitude } = coord;
      dispatch(getMainData({ latitude, longitude }));
    };
    fetchWeatherData();
  }, [dispatch]);

  return (
    <LoadAndError status={status} error={error}>
      <WeatherRoot>
        <Typography sx={{ pb: 2 }} variant="h5">
          Weather App
        </Typography>
        <WeatherBox>
          <SearchInputs />
          <WeatherAnalytics />
        </WeatherBox>
      </WeatherRoot>
    </LoadAndError>
  );
};

export default Whether;
