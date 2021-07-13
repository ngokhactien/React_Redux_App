import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from '../../contants';
import TaskList from '../../components/TaskList';
import TaskForm from '../../components/TaskForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as taskActions from './../../actions/task' ;
class TaskBoard extends Component {
  constructor (props){
    super(props);
    this.state ={
      open : false
    }
  };

  componentDidMount(){
    const {taskActionCreators} = this.props ;
    const { fetchListTaskRepuest } = taskActionCreators ;
    fetchListTaskRepuest();
  }

	handleClose =()=>{
    this.setOpen(false);
	};

	openForm = () =>{
    this.setOpen(true);
	}

	renderBoard = () =>{
    const { listTask } = this.props ;
		let xhtml = null;
					xhtml = (
            <Grid container spacing={2}>
							{
								STATUSES.map(status =>{
									const taskFiltered = listTask.filter(task => task.status === status.value);
									return <TaskList key={status.value} tasks ={taskFiltered} status={ status}/>
								})
							}
					</Grid>
			)
			return xhtml;
		};

  renderForm = () =>{
    let xhtml = null ;
    xhtml = (
      <TaskForm onClose={this.handleClose} open={this.state.open}/>
      )
      return xhtml ;
    }

  render(){
    const { classes } = this.props ;
    return (
      <div className={classes.TaskBoard}>
    <Button variant="contained" color="primary" className={classes.button} onClick={this.openForm}>
    <AddIcon /> Thêm mới công việc
      </Button>
      {this.renderBoard()}
      {this.renderForm()}
    </div>
    );
  }
}

TaskBoard.propTypes = {
  classes :PropTypes.object,
  taskActionCreators :PropTypes.shape({
    fetchListTaskRepuest :PropTypes.func
  })
};

const mapStateToProps = state =>{
  return {
    listTask : state.task.liskTask
  }
} ;

const mapDispatchToProps = dispath =>{
  return {
    taskActionCreators : bindActionCreators(taskActions , dispath)
  }
} ;

export default withStyles(styles)(connect(mapStateToProps , mapDispatchToProps)(TaskBoard));
