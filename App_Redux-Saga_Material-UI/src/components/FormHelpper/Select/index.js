import React from 'react';
import { FormControl, FormHelperText, InputLabel, Select } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './styles';
import { withStyles } from '@material-ui/styles';

const renderFromHelper = ({ touched, error }) => {  // { touched, error } cái đó là lấy props ra , ta có thể viết thay bằng props rồi lấy touched, error ra // bài 146
  if (!(touched && error)) {
    return null ;
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>
  }
}

renderFromHelper.propTypes = {
  touched :  PropTypes.bool ,
  error : PropTypes.bool ,
}

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  classes,
  ...custom
}) => (
  <FormControl className={classes.formControl} error={touched && error}>
    <InputLabel htmlFor="color-native-simple">{label}</InputLabel>
    <Select
      {...input}
      {...custom}
      inputProps={{
        name: input.name,
        id: 'color-native-simple'
      }}
      value={input.value}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
);

renderSelectField.propTypes = {
  label :  PropTypes.string ,
  input : PropTypes.object ,
  meta : PropTypes.object,
  children :PropTypes.array,
  classes :  PropTypes.object,
}

export default withStyles(styles)( renderSelectField) ;
