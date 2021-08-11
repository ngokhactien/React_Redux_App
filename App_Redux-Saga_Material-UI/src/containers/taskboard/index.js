import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as modalActions from './../../actions/modal';
import * as taskActions from './../../actions/task';
import SearchBox from './../../components/SearchBox';
import TaskList from './../../components/TaskList';
import { STATUSES } from './../../contants';
import TaskForm from './../TaskForm';
import styles from './styles';

function TaskBoard(props) {
  const { classes } = props ;

  useEffect( () => {
    const { taskActionCreators } = props ;
    const { fetchListTask , fetchListTaskSuccess ,fetchListTaskFail } = taskActionCreators ;
    fetchListTaskSuccess();
    fetchListTaskFail();
    fetchListTask();
  } , [] ) ;

	const openForm = () => {
    const { modalActionCreators , taskActionCreators } = props ;
    const { setTaskEditting } = taskActionCreators ;
    setTaskEditting(null);
    const { showModal , changeModalTitle , changeModalContent} = modalActionCreators ;
    showModal() ;
    changeModalTitle('Thêm mới công việc ');
    changeModalContent(<TaskForm/>)
	};

  const hendleEditTask = task => {
    const {taskActionCreators , modalActionCreators} = props ;
    const { setTaskEditting } = taskActionCreators ;
    setTaskEditting(task);
    const { showModal , changeModalTitle , changeModalContent} = modalActionCreators ;
    showModal() ;
    changeModalTitle('Cập nhập công việc ');
    changeModalContent(<TaskForm/>)
  }

  const showModelDeleteTask = task => {
    const {modalActionCreators} = props ;
    const { showModal , hideModal , changeModalTitle , changeModalContent} = modalActionCreators ;
    showModal() ;
    changeModalTitle('Xóa công Việc');
    changeModalContent(
      <div className={classes.modalDelete} >
        <div className={classes.modalConfirmText}>
          Bạn chắc chắn muốn xóa <span className={classes.modalConfirmTextBold}>{task.title}</span>?
        </div>
        <Box display="flex" flexDirection="row-reverse" mt={2} >
          <Box ml={1}>
            <Button
              variant="contained"
              onClick={hideModal}
            >
              Hủy Bỏ
            </Button>
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleDeleteTask(task)}
            >
                Đồng Ý
              </Button>
          </Box>
        </Box>
      </div>
    )
  }

  function handleDeleteTask(task){
    const { id } = task;
    const { taskActionCreators  } = props ;
    const { deleteTask } = taskActionCreators ;
    deleteTask(id)
  }

	const renderBoard = () =>{
    const { listTask } = props ;
		let xhtml = null;
					xhtml = (
            <Grid container spacing={2}>
							{
								STATUSES.map(status =>{
									const taskFiltered = listTask.filter(task => task.status === status.value);
									return <TaskList
                            key={status.value}
                            tasks ={taskFiltered}
                            status={status}
                            onClickEdit={hendleEditTask}
                            onClickDelete={showModelDeleteTask}
                          />
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
    filterTask : PropTypes.func,
    setTaskEditting : PropTypes.func,
    deleteTask : PropTypes.func,
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
};

const mapDispatchToProps = dispath =>{
  return {
    taskActionCreators : bindActionCreators(taskActions , dispath),
    modalActionCreators : bindActionCreators(modalActions , dispath)
  }
};
const withConnect = connect(mapStateToProps , mapDispatchToProps) ;

export default compose(
  withStyles(styles),
  withConnect
)(TaskBoard);
