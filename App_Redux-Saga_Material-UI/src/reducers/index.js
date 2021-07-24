import { combineReducers } from 'redux';
import taskReducer from './task';
import uiReducer from './ui';
import modalReducer from './modal';
import { reducer as formReducer } from 'redux-form' ;    // form redux

const rootReducer = combineReducers({
  task : taskReducer,
  ui : uiReducer ,
  modal : modalReducer,
  form: formReducer  // form redux
});

export default rootReducer ;
