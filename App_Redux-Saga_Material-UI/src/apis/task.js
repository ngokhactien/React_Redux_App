import axiosService from './../commons/axiosService';
import { API_ENDFOINT } from './../contants'
import qs from 'query-string' ;

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
}

