import { toast } from 'react-toastify';

export const toastError = error =>{
  let message = null ;
  if(typeof error === 'object' && error.message){
    ({ message } = error) ;
  }
  if(message !== null && typeof message !=='undefined' && message !==''){
    toast.error(message);
  }
};

export const toastSuccess = () =>{
    toast.success('Load Data Success');
};

// export const toastCloseForm = () =>{
//   toast.success('Load Data Success');
// };
