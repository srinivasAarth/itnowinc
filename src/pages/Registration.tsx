import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";
import Form from "../components/registration/Form";
import Table from "../components/registration/Table";
const Root = styled(Box)`
height : 100vh,
width : 100vw;
display : flex;
align-items : center;
justify-content : center;
flex-direction : column;
padding-top : 2rem;
`;
const Registration = () => {
  return (
    <Root>
      <Typography variant="h5">Registration</Typography>
      <Form />
      <Table />
    </Root>
  );
};

export default Registration;
