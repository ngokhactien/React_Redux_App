var initialState = [
    {
        id :1 ,
        name : 'Iphone 7 Plus',
        image : 'https://vienthongtuanlinh.net/images/detailed/1/iphone_7_plus_vienthongtuanlinh-min.jpg',
        description : 'Sản phẩm do Apple sản phẩm',
        price : 500,
        inventory : 10 ,// sản phẩm  trong kho
        rating : 3

    },
    {
        id :2 ,
        name : 'SamSung galaxy S7',
        image : 'https://sudospaces.com/mobilecity-vn/images/2019/12/galaxy-s7-gold.jpg',
        description : 'Sản phẩm do SamSung sản phẩm',
        price : 400,
        inventory : 15 ,// sản phẩm  trong kho
        rating : 3
    },
    {
        id :3 ,
        name : 'Iphone 12 Plus',
        image : 'https://img.websosanh.vn/v2/users/review/images/g0uimocg53p63.jpg?compress=85',
        description : 'Sản phẩm do Apple sản phẩm',
        price : 1000,
        inventory : 5 ,// sản phẩm  trong kho
        rating : 4
    }
];

const products = (state = initialState , action) => {
    switch(action.type){
        default : return state
    }
};

export default products;