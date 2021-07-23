import { useEffect } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from './../../contants';
import TaskList from './../../components/TaskList';
import TaskForm from './../TaskForm';
import SearchBox from './../../components/SearchBox';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as taskActions from './../../actions/task' ;
import * as modalActions from '../../actions/modal' ;

function TaskBoard(props) {
  const { classes } = props ;

  useEffect( () => {
    const { taskActionCreators } = props ;
    const { fetchListTask , fetchListTaskSuccess ,fetchListTaskFail } = taskActionCreators ;
    fetchListTaskSuccess();
    fetchListTaskFail();
    fetchListTask();
  }, [] ) ;

	const openForm = () => {
    const { modalActionCreators } = props ;
    const { showModal , changeModalTitle , changeModalContent} = modalActionCreators ;
    showModal() ;
    changeModalTitle('Thêm mới công việc ');
    changeModalContent(<TaskForm/>)
	}

	const renderBoard = () =>{
    const { listTask } = props ;
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

  const loadData = () => {
    const {taskActionCreators} = props ;
    const { fetchListTask } = taskActionCreators ;
    fetchListTask();
  }

  const handlefilter = e =>{
    const {value} = e.target ;
    const {taskActionCreators} = props ;
    const { filterTask } = taskActionCreators ;
    filterTask(value);
  }

  const renderSearchBox = ()=>{
    let xhtml = null ;
    xhtml = (
      <SearchBox handleChange={handlefilter} />
    )
    return xhtml ;
  }
  return (
    <div className={classes.TaskBoard}>
      <Button
        style = {{  marginRight :10 }}
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={loadData}
      >
        Load Data
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={ openForm }
      >
        <AddIcon /> Thêm mới công việc
      </Button>
      {renderSearchBox()}
      {renderBoard()}
    </div>
  );
}

TaskBoard.propTypes = {
  classes :PropTypes.object,
  taskActionCreators :PropTypes.shape({
    fetchListTask :PropTypes.func ,
    filterTask : PropTypes.func
  }),
  modalActionCreators :PropTypes.shape({
    showModal :PropTypes.func ,
    hideModal :PropTypes.func ,
    changeModalTitle : PropTypes.func ,
    changeModalContent : PropTypes.func
  })
};

const mapStateToProps = state =>{
  return {
    listTask : state.task.listTask
  }
} ;

const mapDispatchToProps = dispath =>{
  return {
    taskActionCreators : bindActionCreators(taskActions , dispath),
    modalActionCreators : bindActionCreators(modalActions , dispath)
  }
} ;
const withConnect = connect(mapStateToProps , mapDispatchToProps) ;

export default compose(
  withStyles(styles),
  withConnect
)(TaskBoard);
