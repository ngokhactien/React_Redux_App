import * as taskApis from './../apis/task';
import * as taskConstants from './../contants/task';

export const fetchListTask = () => {
  return {
    type : taskConstants.FETCH_TASK
  }
};

export const fetchListTaskSuccess = data => {
  return {
    type : taskConstants.FETCH_TASK_SUCCESS,
    payload : {
      data
    }
  }
};

export const fetchListTaskFail = error => {
  return {
    type : taskConstants.FETCH_TASK_FAILED,
    payload : {
      error
    }
  }
};

export const fetchListTaskRepuest = () =>{
  return dispatch => {
    dispatch(fetchListTask())
    taskApis.getList().then(resp =>{
      const { data } = resp ;
      dispatch(fetchListTaskSuccess(data));
    }).catch(error => {
      dispatch(fetchListTaskFail(error))
    });
  };
};
