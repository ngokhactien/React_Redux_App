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
        return apiCaller(`products` , 'POST' ,product).then(res => {
                dispatch(actAddProducts(res.data))
            })  
    }
}

export const actAddProducts = (product) => {
    return {
        type : Types.ADD_PRODUCT ,
        product 
    }
}
//Edit
export const actEditProductsRequest = (id) => {
    return dispatch =>{
        return apiCaller(`products/${id}` , 'GET' ,null).then(res => {
                dispatch(actGetProducts(res.data))
            })  
    }
}

export const actGetProducts = (product) => {
    return {
        type : Types.EDIT_PRODUCT ,
        product 
    }
}
//UPDATE
export const actuUpdateProductsRequest = (product) => {
    return dispatch => {
        return apiCaller(`products/${product.id}` , 'PUT' ,product).then(res => {
                dispatch(actUpdateProducts(res.data))
            })  
    }
}

export const actUpdateProducts = (product) => {
    return {
        type : Types.UPDATE_PRODUCT ,
        product 
    }
}