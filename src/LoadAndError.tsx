/* eslint-disable react/no-children-prop */

import ModelLayout from "./layout/ModelLayout";
import { Typography } from "@mui/material";
const LoadAndError = (props) => {
  const { status, error, children } = props;
  return (
    <>
      {status && (
        <ModelLayout
          children={<Typography variant="h6">Loading...</Typography>}
        />
      )}
      {error && (
        <ModelLayout
          children={<Typography variant="h6">Loading...</Typography>}
        />
      )}
      {!status && !error && children}{" "}
      {/* render the content if every thing fine */}
    </>
  );
};

export default LoadAndError;
