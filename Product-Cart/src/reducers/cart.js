import * as types from './../constants/ActionType';

var data = JSON.parse(localStorage.getItem('CART')) ;
var initialState = [
    {
        product : {
            id :1 ,
            name : 'Iphone 7 Plus',
            image : 'https://vienthongtuanlinh.net/images/detailed/1/iphone_7_plus_vienthongtuanlinh-min.jpg',
            description : 'Sản phẩm do Apple sản phẩm',
            price : 500,
            inventory : 10 ,// sản phẩm  trong kho
            rating : 3
        },
        quantity : 5
    },
    {
        product : {
            id :1 ,
            name : 'Iphone 12 Plus',
            image : 'https://img.websosanh.vn/v2/users/review/images/g0uimocg53p63.jpg?compress=85',
            description : 'Sản phẩm do Apple sản phẩm',
            price : 1000,
            inventory : 5 ,// sản phẩm  trong kho
            rating : 4
        },
        quantity : 3
    }
];

const cart = (state = initialState , action) => {
    switch(action.type){
        case types.ADD_TO_CART :

            return[...state] ;
        default : return state ;
    }
};

export default cart;