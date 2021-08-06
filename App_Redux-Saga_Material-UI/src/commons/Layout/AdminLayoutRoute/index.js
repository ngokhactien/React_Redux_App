import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Route } from "react-router-dom";
import Dashboard from './../../../components/Dashboard';
import styles from './styles';

function AdminLayoutRoute(props) {
  const {component : YourComponent , ...remainProps} = props;
  return (
    <Route
      {...remainProps}
      render={routeProps => {  // render của rudux- form nhận lại routeProps là các thành phần của route , có path  , history ,...
        return(
          <Dashboard {...remainProps}>
            <YourComponent {...routeProps}/>   {/* ở ngoài truyền vào các component gồm task-board , admin và bên kia sẽ nhận lại chidren   */}
          </Dashboard>
        )
      }}
    />
  );
}

AdminLayoutRoute.propTypes = {
  route : PropTypes.object
};

export default withStyles(styles) (AdminLayoutRoute);
