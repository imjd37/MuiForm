import * as React from "react";
import Button from "@mui/material/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container, Grid } from "@mui/material";
import * as Yup from "yup";

function Demo() {
  const initialValues = {
    name: "",
    fatherName: "",
    mobileNumber: "",
    email: "",
  };

  const validations = Yup.object({
    name: Yup.string().required("required"),
    fatherName: Yup.string().required("required"),
    mobileNumber: Yup.string().required("required"),
    email: Yup.string().required("required"),
  });

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
        type: "text",
        errorMsg: "Phone Number is required",
      },
      email: {
        name: "email",
        label: "Email",
        type: "text",
        errorMsg: "Email is required",
      },
    },
  };

  const onSubmit = (value) => {
    console.log("form data", value);
  };
  //   console.log(Form)

  return (
    <>
      <Container  maxWidth="sm" sx={{border:2,p:2,mt:2}} >
        <h1>Form using Formik</h1>
        <Grid mt={2}>
          <Formik
            initialValues={initialValues}
            validationSchema={validations}
            onSubmit={onSubmit}
          >
            <Form id={formId} autoComplete="off">
              <Grid item xs={12} sm={6} mb={2}>
                <label>Name</label>
                <Field
                  name={formField.name.name}
                  type={formField.name.type}
                  label={formField.name.label}
                  variant="outlined"
                />
                <ErrorMessage name={formField.name.name} />
              </Grid>

              <Grid item xs={12} sm={6} mb={2}>
                <label>Father Name</label>
                <Field
                  name={formField.fatherName.name}
                  type={formField.fatherName.type}
                  label={formField.fatherName.label}
                  variant="outlined"
                />
                <ErrorMessage name={formField.fatherName.name} />
              </Grid>

              <Grid item xs={12} sm={6} mb={2}>
                <label>Mobile Number</label>
                <Field
                  name={formField.mobileNumber.name}
                  type={formField.mobileNumber.type}
                  label={formField.mobileNumber.label}
                  variant="outlined"
                />
                <ErrorMessage name={formField.mobileNumber.name} />
              </Grid>

              <Grid item xs={12} sm={6} mb={2}>
                <label>Email</label>
                <Field
                  name={formField.email.name}
                  type={formField.email.type}
                  label={formField.email.label}
                  variant="outlined"
                />
                <ErrorMessage name={formField.email.name} />
              </Grid>

              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Form>
          </Formik>
        </Grid>
      </Container>
    </>
  );
}

export default Demo;
