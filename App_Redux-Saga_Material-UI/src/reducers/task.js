import * as taskContants from './../contants/task';
import { toastError, toastSuccess } from './../helpers/toastHelper';

const initialState = {
  listTask:[],
  taskEditting : null
};

const reducers = (state = initialState , action) =>{
  switch(action.type){
    case taskContants.FETCH_TASK :{
      return {
        ...state ,
        listTask:[]
      }
    }
    case taskContants.FETCH_TASK_SUCCESS :{
      const { data } = action.payload;
      return {
        ...state ,
        listTask:data
      }
    }
    case taskContants.FETCH_TASK_FAILED :{
      const { error } = action.payload;
      toastError(error);
      return {
        ...state ,
        listTask:[]
      }
    }
    case taskContants.FILTER_TASK_SUCCESS :{
      const { data } = action.payload;
      if( data === ''){
        return {
          ...state ,
          listTask:[]
        }
      }
      return {
        ...state ,
        listTask:data
      }
    }
    case taskContants.ADD_TASK :{
      return {
        ...state ,
      }
    }
    case taskContants.ADD_TASK_SUCCESS :{
      toastSuccess('Thêm mới công việc thành công') ;
      const { data } = action.payload;
      return {
        ...state ,
        listTask: [data].concat(state.listTask) //concat nốt array và chuyền vào nó array
      }
    }
    case taskContants.ADD_TASK_FAILED :{
      const { error } = action.payload;
      toastError(error);
      return {
        ...state ,
      }
    }
    case taskContants.SET_TASK_EDITTING :{
      const { task } = action.payload;
      return {
        ...state ,
        taskEditting :task
      }
    }
    case taskContants.UPDATE_TASK :{
      return {
        ...state ,
      }
    }
    case taskContants.UPDATE_TASK_SUCCESS :{
      const { data } = action.payload ;
      const { listTask } = state ;
      const index = listTask.findIndex(item => item.id === data.id);
      if (index !== -1){
        const newList = [
          ...listTask.slice(0 , index),
          data,
          ...listTask.slice(index + 1)
        ];
        toastSuccess('Cập nhập công việc thành công') ;
        return {
          ...state ,
          listTask : newList
        }
      }
      return {
        ...state ,
      }
    }
    case taskContants.UPDATE_TASK_FAILED :{
      const { error } = action.payload;
      toastError(error);
      return {
        ...state ,
      }
    }
    case taskContants.DELETE_TASK :{
      return {
        ...state ,
      }
    }
    case taskContants.DELETE_TASK_SUCCESS :{
      const { data } = action.payload ;  //id
      toastSuccess('Xóa công việc thành công') ;
      return {
        ...state ,
        listTask: state.listTask.filter(item => item.id !== data) // sẽ lấy các phần tử khác với data
      }
    }
    case taskContants.DELETE_TASK_FAILED :{
      const { error } = action.payload;
      toastError(error);
      return {
        ...state ,
      }
    }
    default :
      return state ;
  }
};

export default reducers ;


// ctrl + K + 0 để đóng nhanh code lại
