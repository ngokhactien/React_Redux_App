import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles.js';
import Button from '@material-ui/core/Button';
import { Box, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form' ;
import renderTextField from './../../components/FormHelpper/TextField';
import validate from './validate' ;
import * as modalActions from '../../actions/modal' ;
import * as taskActions from './../../actions/task' ;

// const required = value => {
//   let error = 'vui lòng nhập tiêu đề';
//   if(value !== null && typeof value !== 'undefined' ){
//     error = null ;
//   }
//   return error;
// };

// const minLengths = value => {
//   let error = null;
//   if(value.length < 5){
//     error = 'Tiêu đề từ 5 ký tự ';
//   }
//   return error;
// };

function TaskForm(props) {
  const { classes , modalActionCreator , handleSubmit , invalid , submitting } = props ;  //invalid xem đã hợp lệ của form chưa ,submitting ko cho submit nhiều lần
  const { hideModal } = modalActionCreator ;

  const handleSubmitForm = data => {
    // destroy()   // để xóa giá trị ô input của redux-form , nó được chuyền vào qua props
    const { taskActionsCreator } = props ;
    const { addTask } =taskActionsCreator ;
    const { title , description } =data ;
    addTask(title , description) ;
    console.log('data :' , data );
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <Grid container >
        <Field  // của redux -form
          id="standard-name"
          label="Tiêu đề"
          className = {classes.textField}
          margin='normal'
          name="title"
          component={renderTextField}
          // validate={[required , minLengths]}  // 1 thuộc tính thì dùng {} còn 2 trở lên  {[ , ]}
        />
          <Field  // của redux -form
            id="standard-multiline-flexible"
            label="Mô tả"
            multiline
            rowsMax={4}
            className = {classes.textField}
            margin='normal'
            name="description"
            component={renderTextField}
        />
        <Grid md={12}>
          <Box  display="flex"mt={2} flexDirection="row-reverse">
            <Box ml={1}>
              <Button variant="contained" onClick={hideModal} > Hủy Bỏ</Button>
            </Box>
            <Button
              disabled ={invalid || submitting}  // dùng để block lại lưu lại ko cho mn click vào
              variant="contained"
              color='primary'
              type="submit" >
              lưu lại
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

TaskForm.propTypes = {
  classes : PropTypes.object,
  modalActionCreator : PropTypes.shape({
    hideModal : PropTypes.func
  }),
  taskActionsCreator :{
    addTask : PropTypes.func,
  },
  handleSubmit : PropTypes.func,
  invalid :PropTypes.bool,
  submitting :PropTypes.bool
};

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  modalActionCreator : bindActionCreators(modalActions , dispatch) ,
  taskActionsCreator :  bindActionCreators(taskActions , dispatch)
});

const withConnect = connect(mapStateToProps , mapDispatchToProps);

const FORM_NAME = 'TASK_MANAGEMENT';

const withReduxForm = reduxForm({
  form  : FORM_NAME ,
  validate   // validate : validate cái dày dùng chung  , còn validate chỉ dành cho từng cái field
});

export default compose(
  withStyles(styles),
  withReduxForm ,
  withConnect
)(TaskForm);
