import axiosService from './../commons/axiosService';
import { API_ENDFOINT } from './../contants'

//http://localhost:8080/tasks
const url = 'tasks';

export const getList = () =>{
  return axiosService.get(`${API_ENDFOINT}/${url}`);
}

//http://localhost:8080/tasks method : post
export const addTask = data =>{
  return axiosService.post(`${API_ENDFOINT}/${url}` , data);
}

