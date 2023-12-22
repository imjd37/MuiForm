import * as React from "react";
import Button from "@mui/material/Button";
import { Formik, Form } from "formik";
import { Container, Grid } from "@mui/material";
import InputField from "./InputField";
import * as Yup from "yup";

const initialValues = {
    name: "",
    fatherName: "",
    mobileNumber: "",
    email: "",
  };

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
    },
  };

  const validations = Yup.object({
    name: Yup.string().required(formField.name.errorMsg),
    fatherName: Yup.string().required(formField.fatherName.errorMsg),
    mobileNumber: Yup.string().max(10).required(formField.mobileNumber.errorMsg),
    email: Yup.string().email().required(formField.email.errorMsg),
  });

function Demo2() {

  const onSubmit = (value) => {
    console.log("form data", value);
  };

  return (
    <>
      <Container maxWidth="sm" sx={{ border: 2, p: 2, mt: 2 }}>
        <h1>Form using Formik with Mui</h1>
        <Grid mt={3}>
          <Formik initialValues={initialValues} validationSchema={validations} onSubmit={onSubmit}>
            {({ values, errors, touched }) => (
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
                      success={values.name?.length>0 && !errors.name}
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
                    success={values.fatherName?.length>0 && !errors.fatherName}
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
                    success={values.mobileNumber?.length>0 && !errors.mobileNumber}
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
                    success={values.email?.length>0 && !errors.email}
                  />
                </Grid>
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Grid>
      </Container>
    </>
  );
}

export default Demo2;
