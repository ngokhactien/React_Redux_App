import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; // form redux
import modalReducer from './modal';
import sidebarReducer from './sidebar';
import taskReducer from './task';
import uiReducer from './ui';

const rootReducer = combineReducers({
  task : taskReducer,
  ui : uiReducer ,
  modal : modalReducer,
  sidebar :sidebarReducer ,
  form: formReducer  // form redux
});

export default rootReducer ;
