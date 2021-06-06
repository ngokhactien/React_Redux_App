import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';
import massage from './massage';

const appReducers = combineReducers({
    products,
    cart ,
    massage
});

export default appReducers ;