import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function BasicSelect({ value, onChange, name }) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="City"
          name={name}
          onChange={onChange}
          sx={{ mb: 2 }}
        >
          <MenuItem value={"Hyderabad"}>Hyderabad</MenuItem>
          <MenuItem value={"Bengalore"}>Bengalore</MenuItem>
          <MenuItem value={"Pune"}>Pune</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
