/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
import { Box } from "@mui/material";
const ModelRoot = styled(Box)`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModelLayout = ({ children }) => {
  return <ModelRoot>{children}</ModelRoot>;
};

export default ModelLayout;
