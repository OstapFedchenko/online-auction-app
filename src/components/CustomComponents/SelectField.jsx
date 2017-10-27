import React from 'react';
import {SelectField} from 'material-ui';

const renderSelectField = ({ 
    input,
    label,
    fullWidth,
    meta: { 
        touched, 
        error 
    }, 
    children }) => (

    <SelectField
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        onChange={(event, index, value) => input.onChange(value)}      
        children={children}
        fullWidth={fullWidth}
    />
);

  export default renderSelectField;