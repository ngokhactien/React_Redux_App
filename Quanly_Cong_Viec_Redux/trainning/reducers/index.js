import { combineReducers } from 'redux'; 
import sort from './sort';      //reducers sort 
import status from './status';  //reducers status

const myReducer = combineReducers({
    status ,   // status : status ,
    sort       // sort : sort ,   //sort : { by : by , value : value}
})

export default myReducer ;