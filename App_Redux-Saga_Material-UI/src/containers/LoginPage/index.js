import { Button, Card, CardContent, TextField, Typography, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import styles from './styles';

function LoginPageRoute(props) {

  const { classes } = props ;

  return (
    <div className={classes.background}>
      <div className={classes.login}>
        <Card>
          <CardContent>
            <form>
              <div className="text-xs-center pb-xs">
                <Typography className={classes.lableLogin} variant="caption" >
                  Đăng nhập
                </Typography>
              </div>
              <TextField
                id="email"
                label="Email"
                className={classes.textfield}
                fullWidth
                margin="normal"
              />
              <TextField
                id="password"
                label="Password"
                className={classes.textfield}
                type="password"
                fullWidth
                margin="normal"
              />
              <Button variant="contained" color="primary" fullWidth type="submit ">
                Login
              </Button>
              <div className="pt_1 text-md-center">
                <Link to="/signup">
                  <Button className={classes.buttonSingup}>Đăng ký tài khoảng</Button>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

LoginPageRoute.propTypes = {
  classes : PropTypes.object
};


export default compose(
  withStyles(styles)
) (LoginPageRoute);
