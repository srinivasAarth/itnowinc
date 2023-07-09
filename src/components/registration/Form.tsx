import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Box, Button, TextField } from "@mui/material";
import styled from "@emotion/styled";
import BasicSelect from "../../libs/fields/SelectInput";
import { useDispatch, useSelector } from "react-redux";
import { setRecords } from "../../redux/slices/registerSlice";
import BasicDatePicker from "../../libs/fields/Picker";
import { useSnackbar } from "notistack";

const FormRoot = styled(Box)`
  height: auto;
  width: 30rem;
  padding: 2rem;
`;
const CssTextField = styled(TextField)`
  margin-bottom: 1rem;
`;
const Form = () => {
  const initialStates = {
    name: "",
    email: "",
    city: "",
    pincode: "",
    date: "",
  };
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { records } = useSelector((state: any) => state.register);
  const [formValues, setFormValues] = React.useState(initialStates);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const changeDate = ({ $d }) => {
    const date = new Date($d);

    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    };
    const formattedDate = date.toLocaleDateString("en-GB", options);
    setFormValues((prev) => ({ ...prev, date: formattedDate }));
  };

  const checkAge = (dateOfBirth) => {
    const currentDate = new Date();
    const [day, month, year] = dateOfBirth.split("/");
    const dob = new Date(`${year}/ ${month}/ ${day}`);
    const timeDiff = currentDate.getTime() - dob.getTime();
    const age = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));
    return age >= 18;
  };

  const submitValues = (e) => {
    const { name, email, city, pincode, date } = formValues;
    e.preventDefault();
    const emailExists = records.some(
      (record) => record.email === formValues.email
    );

    if (!checkAge(formValues.date)) {
      enqueueSnackbar("User must be 18 years old", {
        variant: "error",
        autoHideDuration: 2000,
        style: { width: 300, left: "calc(50% - 150px)" },
      });
      return;
    }

    if (formValues.pincode.length !== 6) {
      enqueueSnackbar("Pincode must be 6 digits only", {
        variant: "error",
        autoHideDuration: 2000,
        style: { width: 300, left: "calc(50% - 150px)" },
      });
      return;
    }

    if (!emailExists && name && email && city && pincode && date && pincode) {
      dispatch(setRecords(formValues));
      setFormValues(initialStates);
    }
    if (emailExists) {
      enqueueSnackbar("Email is already exist", {
        variant: "error",
        autoHideDuration: 2000,
        style: { width: 300, left: "calc(50% - 150px)" },
      });
    }
    if (!name || !email || !city || !pincode || !date || !pincode) {
      enqueueSnackbar("Please fill all fields", {
        variant: "error",
        autoHideDuration: 2000,
        style: { width: 300, left: "calc(50% - 150px)" },
      });
    }
  };
  return (
    <FormRoot>
      <form onSubmit={submitValues}>
        <CssTextField
          label="Name"
          type="text"
          onChange={handleChange}
          value={formValues.name}
          name="name"
          fullWidth
        />
        <CssTextField
          label="Email"
          type="email"
          onChange={handleChange}
          value={formValues.email}
          name="email"
          fullWidth
        />
        <BasicDatePicker onChange={changeDate} />
        <BasicSelect
          name="city"
          value={formValues.city}
          onChange={handleChange}
        />
        <CssTextField
          label="pincode"
          type="number"
          onChange={handleChange}
          value={formValues.pincode}
          name="pincode"
          fullWidth
          helperText="pincode must be 6 digits"
        />
        <Button variant="contained" fullWidth type="submit">
          Register
        </Button>
      </form>
    </FormRoot>
  );
};

export default Form;
