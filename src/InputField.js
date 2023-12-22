import { TextField, Typography } from "@mui/material";
import { ErrorMessage, Field } from "formik";
import { useStyles } from "./inputFieldStyle";

const InputField = ({ label, name, hideIncrement = false, ...rest }) => {
  const {classes} = useStyles()
    return (
        <>
         <Field
        label={label}
        as={TextField}
        name={name}
        {...rest}
        className={hideIncrement ? classes.removeIncrement : ""}
      />
      <Typography color='error'>
       {<ErrorMessage name={name}/>}
      </Typography>
        </>
     
    );
  };
  
  export default InputField;