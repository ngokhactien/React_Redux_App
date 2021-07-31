import * as taskConstants from './../contants/task';

// render data
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

//search - task
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

//EDIT
export const setTaskEditting = task => {
  return {
    type : taskConstants.SET_TASK_EDITTING,
    payload : {
      task
    }
  }
};

//UPDATE
export const updateTask = ( title , description , status ) => {
  return {
    type : taskConstants.UPDATE_TASK,
    payload : {
      title ,
      description,
      status
    }
  }
};

export const updateTaskSuccess = data => {
  return {
    type : taskConstants.UPDATE_TASK_SUCCESS,
    payload : {
      data
    }
  }
};

export const updateTaskFail = error => {
  return {
    type : taskConstants.UPDATE_TASK_FAILED,
    payload : {
      error
    }
  }
};
