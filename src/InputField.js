import { TextField, Typography } from "@mui/material";
import { ErrorMessage, Field } from "formik";



const InputField = ({ label, name, hideIncrement = false, ...rest }) => {
    return (
        <>
         <Field
        label={label}
        as={TextField}
        name={name}
        {...rest}
      />
      <Typography color='error'>
       {<ErrorMessage name={name}/>}
      </Typography>
        </>
     
    );
  };
  
  export default InputField;