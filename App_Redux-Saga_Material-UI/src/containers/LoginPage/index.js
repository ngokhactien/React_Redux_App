import { Button, Card, CardContent, Typography, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import renderTextField from './../../components/FormHelpper/TextField';
import styles from './styles';
import validate from './validate';
function LoginPageRoute(props) {

  const {
    classes ,
    invalid ,
    // submitting
  } = props ;

  const handleLogout = () =>{

    const { history } = props;

    if(!invalid){
      if(history){
        history.push('/admin/task-board')
      }
    }
}
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
              <Field
                id="email"
                label="Email"
                rowsMax="4"
                className={classes.textfield}
                margin="normal"
                fullWidth
                name="email"
                component={renderTextField}
              />
              <Field
                id="password"
                label="Password"
                name="password"
                className={classes.textfield}
                type="password"
                fullWidth
                margin="normal"
                component={renderTextField}
              />
                <Button
                  // disabled ={invalid || submitting}  // dùng để block lại lưu lại ko cho mn click vào
                  onClick={handleLogout}
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                >
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


const FORM_NAME = 'TASK_MANAGEMENT';

const withReduxForm = reduxForm({
  form  : FORM_NAME , //dùng để kết nối state lên form
  validate   // validate : validate cái dày dùng chung  , còn validate chỉ dành cho từng cái field
});

export default compose(
  withStyles(styles),
  withReduxForm
) (withRouter(LoginPageRoute));
