import { withStyles } from '@material-ui/core/styles';
import styles from './styles.js';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Box, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import * as modalActions from '../../actions/modal' ;

function TaskForm(props) {
  const { classes , modalActionCreator } = props ;
  const { hideModal } = modalActionCreator ;
  return (
    <from>
      <Grid container >
        <Grid md={12}>
          <TextField
          id="standard-name"
          label="Tiêu đề"
          className = {classes.textField}
          margin='normal'
          />
        </Grid>
        <Grid md={12}>
          <TextField
              id="standard-multiline-flexible"
              label="Mô tả"
              multiline
              rowsMax={4}
              className = {classes.textField}
              margin='normal'
          />
        </Grid>
        <Grid md={12}>
          <Box  display="flex"mt={2} flexDirection="row-reverse">
            <Box ml={1}>
              <Button variant="contained" onClick={hideModal} > Hủy Bỏ</Button>
            </Box>
            <Button variant="contained" color='primary'> lưu lại</Button>
          </Box>
        </Grid>
      </Grid>
    </from>
  );
}

TaskForm.propTypes = {
  classes : PropTypes.object,
  modalActionCreator : PropTypes.shape({
    hideModal : PropTypes.func
  })
}

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  modalActionCreator : bindActionCreators(modalActions , dispatch)
}) ;

const withConnect = connect(mapStateToProps , mapDispatchToProps);

export default compose(
  withStyles(styles),
  withConnect
)(TaskForm);
