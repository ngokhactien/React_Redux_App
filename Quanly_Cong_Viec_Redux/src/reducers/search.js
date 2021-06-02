import * as types from '../constants/actionTypes' ;


const initialState ='';

const myReducer = (state = initialState , action) =>{
    switch(action.type)
    {
        case types.SEARCH :
            return action.keyword;
        default : return state ;
    }
};
export default myReducer ;