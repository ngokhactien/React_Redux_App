import * as taskContants from './../contants/task';
import { toastError } from './../helpers/toastHelper';
const initialState = {
  liskTask:[]
};

const reducers = (state = initialState , action) =>{
  switch(action.type){
    case taskContants.FETCH_TASK :{
      return {
        ...state ,
        liskTask:[]
      }
    }
    case taskContants.FETCH_TASK_SUCCESS :{
      const { data } = action.payload;
      return {
        ...state ,
        liskTask:data
      }
    }
    case taskContants.FETCH_TASK_FAILED :{
      const { error } = action.payload;
      toastError(error);
      return {
        ...state ,
        liskTask:[]
      }
    }
    default :
      return state ;
  }
};

export default reducers ;
