import React from "react";
import {
  Table as TableRoot,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Card,
} from "@mui/material";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";

const TableStyle = styled(TableRoot)`
  width: 100%;
  height: auto;
`;
const WeatherTable = () => {
  const { wheatherData } = useSelector((state: any) => state.weather);

  return (
    <TableStyle>
      <TableHead>
        <TableRow>
          <TableCell align="left">Time</TableCell>
          {wheatherData?.hourly?.time.map((e, i) => (
            <TableCell key={e || i} align="center">
              {e}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell align="center">Wind speed</TableCell>
          {wheatherData?.hourly?.windspeed_10m.map((e, i) => (
            <TableCell key={i} align="center">
              {e}
            </TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableCell align="center">Temperature</TableCell>
          {wheatherData?.hourly?.temperature_2m.map((e, i) => (
            <TableCell key={i} align="center">
              {e}
            </TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableCell>Humidity</TableCell>
          {wheatherData?.hourly?.relativehumidity_2m.map((e, i) => (
            <TableCell key={i} align="center">
              {e}
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </TableStyle>
  );
};

export default WeatherTable;
