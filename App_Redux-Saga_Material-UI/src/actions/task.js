// import * as taskApis from './../apis/task';
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

export const filterTask = keyWord => {
  return {
    type : taskConstants.FILTER_TASK,
    payload : {
      keyWord
    }
  }
};

export const filterTaskSUCCESS = data => {
  return {
    type : taskConstants.FILTER_TASK_SUCCESS,
    payload : {
      data
    }
  }
};
