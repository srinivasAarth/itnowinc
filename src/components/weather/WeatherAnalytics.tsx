import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import WeatherTable from "./WeatherTable";
const Container = styled(Box)`
  height: 100%;
  width: 100%;
  margin-top: 1rem;
`;
const Boxes = styled(Box)`
  height: 17rem;
  width: 100%;
  box-shadow: 0rem 0rem 0.5rem rgba(0, 0, 0, 0.05);
  justify-content: flex-start;
  align-items: flex-start;
  flex-directions: column;
`;

const WeatherAnalytics = () => {
  const { wheatherData } = useSelector((state: any) => state.weather);

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Boxes>
            <Typography sx={{ ml: 2, py: 1 }} variant="h4">
              temperature : {wheatherData?.current_weather?.temperature}{" "}
              <sup>o</sup> C
            </Typography>

            <Typography sx={{ ml: 2, py: 1 }} variant="h5">
              Wind speed : {wheatherData?.current_weather?.windspeed} Km/h
            </Typography>
          </Boxes>
        </Grid>
        <Grid item xs={6}>
          <Boxes>
            <Typography sx={{ ml: 2, py: 1 }} variant="h5">
              Wind direction : {wheatherData?.current_weather?.winddirection}{" "}
              Deg<sup>o</sup>
            </Typography>
            <Typography sx={{ ml: 2, py: 1 }} variant="h5">
              Weather Code : {wheatherData?.current_weather?.weathercode}
            </Typography>
          </Boxes>
        </Grid>
        <Grid item xs={12}>
          <Boxes sx={{ overflowX: "scroll" }}>
            <WeatherTable />
          </Boxes>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WeatherAnalytics;
