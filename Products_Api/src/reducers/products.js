import * as Types from './../constants/ActionTypes';
var initialState = [];

const findIndex = (products , id) =>{
    var result = -1 ;
    products.forEach((product , index) => {
        if(product === id){
            result = index ;
        }
    });
    return result ;
};

const products = (state = initialState , action) =>{
    var {id} = action ;
    switch(action.type)
    {
        case Types.FETCH_PRODUCTS :
            state = action.products ;
            return [...state] ;
        case Types.DELETE_PRODUCT :
            var index = findIndex(state , id);
            state.splice(index , 1)
            return [...state] ;
        default :
            return  [...state] ;
    }
};

export default products;