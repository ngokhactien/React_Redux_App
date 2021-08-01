import { Box, Grid, MenuItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import * as modalActions from '../../actions/modal';
import renderSelectField from './../../components/FormHelpper/Select';
import * as taskActions from './../../actions/task';
import renderTextField from './../../components/FormHelpper/TextField';
import styles from './styles.js';
import validate from './validate';

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
  const {
    classes ,
    modalActionCreator ,
    handleSubmit ,
    invalid ,
    submitting,
    taskEditting
  } = props ;  //invalid xem đã hợp lệ của form chưa ,submitting ko cho submit nhiều lần
  const { hideModal } = modalActionCreator ;

  const handleSubmitForm = data => {
    // destroy()   // để xóa giá trị ô input của redux-form , nó được chuyền vào qua props
    const { taskActionsCreator  } = props ;
    const { addTask , updateTask } =taskActionsCreator ;
    const { title , description , status } = data ;
    if(taskEditting  && taskEditting.id ){
      updateTask( title , description , status)
    }else{
      addTask(title , description) ;
    }
  }

  const renderStatusSelecttion = () => {
    let xhtmh = null ;
    if(taskEditting && taskEditting.id){
      xhtmh = (
        <Field
          id="status"
          label="Trạng Thái"
          className = {classes.select}
          name="status"
          component={renderSelectField}
        >
          <MenuItem value={0}>READY</MenuItem>
          <MenuItem value={1}>IN PROGRESS</MenuItem>
          <MenuItem value={2}>COMPLETE</MenuItem>
        </Field>
      )
    }
    return xhtmh;
  }
  return (

    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <Grid container >
        <Grid md={12} item >
          <Field
            id="title"
            label="Tiêu đề"
            className={classes.textField}
            margin="normal"
            name="title"
            component={renderTextField}
            />
        </Grid>
        <Grid md={12} item>
          <Field
            id="description"
            label="Mô tả"
            multiline
            rowsMax="4"
            className={classes.textField}
            margin="normal"
            name="description"
            component={renderTextField}
            />
          </Grid>
        { renderStatusSelecttion() }
        <Grid md={12} item>
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
  taskActionsCreator :PropTypes.shape({
    addTask : PropTypes.func,
    updateTask: PropTypes.func,
  }),
  handleSubmit : PropTypes.func,
  invalid :PropTypes.bool,
  submitting :PropTypes.bool ,
  taskEditting : PropTypes.object,
};

const mapStateToProps = state => {
  return {
    taskEditting: state.task.taskEditting ,
    initialValues: {   // của redux-from ( initialValues api ) để lấy data đổ vào form
      title: state.task.taskEditting ? state.task.taskEditting.title : '',
      description : state.task.taskEditting ? state.task.taskEditting.description : '',
      status : state.task.taskEditting ?state.task.taskEditting.status : ''
    }
  };
};

const mapDispatchToProps = dispatch => ({
  modalActionCreator : bindActionCreators(modalActions , dispatch) ,
  taskActionsCreator : bindActionCreators(taskActions , dispatch)
});

const withConnect = connect(mapStateToProps , mapDispatchToProps);

const FORM_NAME = 'TASK_MANAGEMENT';

const withReduxForm = reduxForm({
  form  : FORM_NAME , //dùng để kết nối state lên form
  validate   // validate : validate cái dày dùng chung  , còn validate chỉ dành cho từng cái field
});

export default compose(
  withStyles(styles),
  withConnect,  // phải trước Redux-Form
  withReduxForm,
)(TaskForm);
