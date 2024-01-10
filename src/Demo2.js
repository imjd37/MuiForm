import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { Formik, Form } from "formik";
import {
  Autocomplete,
  Container,
  Select,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import InputField from "./InputField";
import * as Yup from "yup";
import { useState } from "react";

const initialValues = {
  name: "",
  fatherName: "",
  mobileNumber: "",
  email: "",
  number: "",
};
const NumberList = [
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
];

// const NumberList2 = [
//   { label: "1", value: "One" },
//   { label: "2", value: "Two" },
//   { label: "3", value: "Three" },
//   { label: "4", value: "Four" },
//   { label: "5", value: "Five" },
//   { label: "6", value: "Six" },
//   { label: "7", value: "Seven" },
//   { label: "8", value: "Eight" },
//   { label: "9", value: "Nine" },
//   { label: "10", value: "Ten" },
// ];

const { formId, formField } = {
  formId: "address-form",
  formField: {
    name: {
      name: "name",
      label: "Name",
      type: "text",
      errorMsg: "Name is required",
    },
    fatherName: {
      name: "fatherName",
      label: "Father Name",
      type: "text",
      errorMsg: "Father Name is required",
    },
    mobileNumber: {
      name: "mobileNumber",
      label: "Phone Number",
      type: "number",
      errorMsg: "Phone Number is required",
    },
    email: {
      name: "email",
      label: "Email",
      type: "email",
      errorMsg: "Email is required",
    },
    number: {
      name: "number",
      label: "Number",
      type: "number",
      errorMsg: "Number is required",
    },
  },
};

const validations = Yup.object({
  name: Yup.string().required(formField.name.errorMsg),
  fatherName: Yup.string().required(formField.fatherName.errorMsg),
  mobileNumber: Yup.string().max(10).required(formField.mobileNumber.errorMsg),
  email: Yup.string().email().required(formField.email.errorMsg),
  number: Yup.string().required(formField.number.errorMsg),
});

function Demo2() {
  const [number, setNumber] = useState("");
  const [items, setItems] = useState([]);

  const handleSelectedNumber = (e) => {
    const selectNumber = e.target.value;
    setNumber(selectNumber);
  };

  const addNumberToList = () => {
    const { v4: uuidv4 } = require("uuid");

    setItems((items) => [
      ...items,
      {
        item: number,
        id: uuidv4(),
      },
    ]);
  };

  const numbersList = NumberList.map((i) => {
    return (
      <MenuItem key={i} value={i}>
        {i}
      </MenuItem>
    );
  });

  const hendleDelete = (index) => {
    console.log(index);

    const newNumberAddToListitem = items.filter((item) => item.id !== index);
    setItems(newNumberAddToListitem);
  };
  const onSubmit = (value) => {
    console.log("form data", value);
  };
  // console.log(items);

  return (
    <>
      <Container maxWidth="sm" sx={{ border: 2, p: 2, mt: 2 }}>
        <h1>Form using Formik with Mui</h1>
        <Grid my={3}>
          <Formik
            initialValues={initialValues}
            validationSchema={validations}
            onSubmit={onSubmit}
          >
            {({ values, errors, touched, setFieldValue }) => (
              <Form id={formId} autoComplete="off">
                <Grid item xs={12} sm={6} mb={2}>
                  <div className="form-control">
                    <InputField
                      name={formField.name.name}
                      type={formField.name.type}
                      label={formField.name.label}
                      variant="outlined"
                      value={values.name}
                      error={errors.name && touched.name}
                      // success={values.name?.length > 0 && !errors.name}
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} mb={2}>
                  <InputField
                    name={formField.fatherName.name}
                    type={formField.fatherName.type}
                    label={formField.fatherName.label}
                    variant="outlined"
                    value={values.fatherName}
                    error={errors.fatherName && touched.fatherName}
                    // success={
                    //   values.fatherName?.length > 0 && !errors.fatherName
                    // }
                  />
                </Grid>
                <Grid item xs={12} sm={6} mb={2}>
                  <InputField
                    name={formField.mobileNumber.name}
                    type={formField.mobileNumber.type}
                    label={formField.mobileNumber.label}
                    hideIncrement
                    variant="outlined"
                    value={values.mobileNumber}
                    error={errors.mobileNumber && touched.mobileNumber}
                    // success={
                    //   values.mobileNumber?.length > 0 && !errors.mobileNumber
                    // }
                  />
                </Grid>
                <Grid item xs={12} sm={6} mb={2}>
                  <InputField
                    name={formField.email.name}
                    type={formField.email.type}
                    label={formField.email.label}
                    variant="outlined"
                    value={values.email}
                    error={errors.email && touched.email}
                    // success={values.email?.length > 0 && !errors.email}
                  />
                </Grid>

                <Grid item xs={12} sm={6} mb={2}>
                  <Autocomplete
                    defaultValue={""}
                    options={NumberList}
                    onChange={(e, value) => {
                      setFieldValue("number", value);
                    }}
                    renderInput={(params) => (
                      <InputField
                        {...params}
                        variant="outlined"
                        label={formField.number.label}
                        name={formField.number.name}
                        value={values.number}
                        error={errors.number && touched.number}
                        // success={values.number?.length > 0 && !errors.number}
                      />
                    )}
                  />
                </Grid>

                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Grid>

        <Grid sx={{ display: "flex" }} item xs={9} sm={10}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="number-select">Numbers</InputLabel>
            <Select
              id="number-select"
              value={number}
              onChange={handleSelectedNumber}
              label="Number"
            >
              {numbersList}
            </Select>
          </FormControl>

          <Button variant="contained" onClick={addNumberToList}>
            <AddIcon />
          </Button>
        </Grid>

        <Grid item xs={12} sm={12}>
          {Object.values(items).map((i, index) => (
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
              key={index}
            >
              <h3>{i.item}</h3>

              <DeleteIcon onClick={() => hendleDelete(i.id)} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Demo2;