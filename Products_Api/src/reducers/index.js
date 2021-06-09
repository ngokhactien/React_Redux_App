import { combineReducers } from 'redux'; 
import products from './products';
import itemEidting from './itemEidting';
const appReducer = combineReducers({
    products,
    itemEidting
});

export default appReducer ;