import qs from 'query-string';
import axiosService from './../commons/axiosService';
import { API_ENDFOINT } from './../contants';

//http://localhost:8080/tasks
const url = 'tasks';

export const getList = ( params = {} ) => {   // (params = {} ) params khởi tạo cho nó là kiểu object
  let queryParams = '';
  if( Object.keys(params).length > 0 ){
    queryParams = `?${qs.stringify(params)}`; // .../?p=name // queryString.stringify({p: name } => đổi lại p=name
  }
  return axiosService.get(`${API_ENDFOINT}/${url}${queryParams}`); //
};

//http://localhost:8080/tasks method : post
export const addTask = data => {
  return axiosService.post(`${API_ENDFOINT}/${url}` , data);
};

//http://localhost:8080/tasks/:id method : put
export const updateTask = (data , taskId) => {
  return axiosService.put(`${API_ENDFOINT}/${url}/${taskId}` , data);
}

//http://localhost:8080/tasks/:id method : delete
export const deleteTask = taskId => {
  return axiosService.delete(`${API_ENDFOINT}/${url}/${taskId}` );
}
