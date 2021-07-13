import axiosService from './../commons/axiosService';
import { API_ENDFOINT } from './../contants'

const url = 'tasks';

export const getList = () =>{
  return axiosService.get(`${API_ENDFOINT}/${url}`);
}
