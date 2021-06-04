import * as Types from './../constants/ActionType';

export const actAddToCart = (product , quantity) =>{
    return {
        type : Types.ADD_TO_CART,
        product ,
        quantity
    }
};

export const actChangeMassage = (massage) =>{
    return {
        type : Types.CHANGE_MASSAGE,
        massage
    }
};

export const actRemoveProductInCart = (product) =>{
    return {
        type : Types.DELETE_PRODUCT_IN_CART,
        product
    }
};

export const actUpdateProductInCart = (product , quantity) =>{
    return {
        type : Types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
};