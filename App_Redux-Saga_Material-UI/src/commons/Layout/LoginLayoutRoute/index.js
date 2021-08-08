import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Route } from "react-router-dom";
import styles from './styles';

function LoginLayoutRoute(props) {
  const {component : YourComponent , ...remainProps} = props;
  return (
    <Route
      {...remainProps}
      render={routeProps => {  // render của rudux- form nhận lại routeProps là các thành phần của route , có path  , history ,...
        return(
          <YourComponent {...routeProps}/>
        )
      }}
    />
  );
}

LoginLayoutRoute.propTypes = {
  route : PropTypes.object
};

export default withStyles(styles) (LoginLayoutRoute);
