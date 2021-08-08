import { Button, Card, CardContent, TextField, Typography, withStyles ,FormControlLabel , Checkbox } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import styles from './styles';

function SignupPageRoute(props) {

  const { classes } = props ;

  return (
    <div className={classes.background}>
      <div className={classes.signup}>
        <Card>
          <CardContent>
            <form>
              <div className="text-xs-center pb-xs">
                <Typography className={classes.lableLogin} variant="caption" >
                  Đăng Ký
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
              <TextField
                id="cpassword"
                label="Confirm Password"
                className={classes.textfield}
                type="password"
                fullWidth
                margin="normal"
              />
              <FormControlLabel
                control ={<Checkbox value='agree'/> }
                label="Tôi đã đọc chính sách và Đồng ý điều khoản"
                className={classes.fullWidth}
              />
              <Button variant="contained" color="primary" fullWidth type="submit ">
                Signup
              </Button>
              <div className="pt_1 text-md-center">
                <Link to="/login">
                  <Button className={classes.buttonSingup}>Đã có tài khoản ?</Button>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

SignupPageRoute.propTypes = {
  classes : PropTypes.object
};


export default compose(
  withStyles(styles)
) (SignupPageRoute);
