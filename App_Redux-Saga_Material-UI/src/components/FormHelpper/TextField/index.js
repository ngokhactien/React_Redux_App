import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom} // => ngoài sẽ chuyền vào đây id , className
  />
);

renderTextField.propTypes = {
  label :  PropTypes.string ,
  input : PropTypes.object ,
  meta : PropTypes.object
}

export default renderTextField ;
