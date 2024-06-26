import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@mui/material';

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        as={TextField}
        control={control}
        fullWidth
        name={name}
        label={label}
        required={required}
        defaultValue=""
      ></Controller>
    </Grid>
  );
};

export default FormInput;
