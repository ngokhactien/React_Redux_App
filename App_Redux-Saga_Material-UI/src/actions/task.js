import * as taskConstants from './../contants/task';

export const fetchListTask = ( params = {} ) => {
  return {
    type : taskConstants.FETCH_TASK,
    payload : {
      params
    }
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

export const filterTask = keyword => {
  return {
    type : taskConstants.FILTER_TASK,
    payload : {
      keyword
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

// add - task
export const addTask = ( title , description ) => {
  return {
    type : taskConstants.ADD_TASK,
    payload : {
      title ,
      description
    }
  }
};

export const addTaskSuccess = data => {
  return {
    type : taskConstants.ADD_TASK_SUCCESS,
    payload : {
      data
    }
  }
};

export const addTaskFail = error => {
  return {
    type : taskConstants.ADD_TASK_FAILED,
    payload : {
      error
    }
  }
};
