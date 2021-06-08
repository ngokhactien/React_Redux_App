import * as Types from './../constants/ActionTypes';
import apiCaller from './../utils/apiCaller';

export const actFetchProductsRequest = () => {
    return (dispatch) =>{
        return apiCaller('products' , 'GET' ,null).then(res => {
                dispatch(actFetchProducts(res.data))
            })  
    }
}

export const actFetchProducts = (products) => {
    return {
        type : Types.FETCH_PRODUCTS ,
        products
    }
};
//delete
export const actDeleteProductsRequest = (id) => {
    return (dispatch) =>{
        return apiCaller(`products/${id}` , 'DELETE' ,null).then(res => {
                dispatch(actDeleteProducts(id))
            })  
    }
}

export const actDeleteProducts = (id) => {
    return {
        type : Types.DELETE_PRODUCT ,
        id
    }
}
//add
export const actAddProductsRequest = (product) => {
    return (dispatch) =>{
        return apiCaller(`products` , 'DELETE' ,null).then(res => {
                dispatch(actAddProducts(product))
            })  
    }
}

export const actAddProducts = (product) => {
    return {
        type : Types.ADD_PRODUCT ,
        product 
    }
}