import React from "react";
import styled from "@emotion/styled";
import { Box, Card, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
const HomeRoot = styled(Box)`
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
`;
const Home = () => {
  const navigate = useNavigate();
  return (
    <HomeRoot>
      <Button
        onClick={() => navigate("/register")}
        sx={{ mr: 2 }}
        variant="contained"
      >
        Register App
      </Button>
      <Button
        onClick={() => navigate("/weather")}
        sx={{ ml: 2 }}
        variant="contained"
      >
        Weather App
      </Button>
    </HomeRoot>
  );
};

export default Home;
