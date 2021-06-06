var initialState = [
    {
        id :1 ,
        name : 'Iphone 7 Plus',
        image : 'https://vienthongtuanlinh.net/images/detailed/1/iphone_7_plus_vienthongtuanlinh-min.jpg',
        description : 'Sản phẩm do Apple sản xuất',
        price : 500,
        inventory : 10 ,// sản phẩm  trong kho
        rating : 3

    },
    {
        id :2 ,
        name : 'SamSung galaxy S7',
        image : 'https://sudospaces.com/mobilecity-vn/images/2019/12/galaxy-s7-gold.jpg',
        description : 'Sản phẩm do SamSung sản xuất',
        price : 400,
        inventory : 15 ,// sản phẩm  trong kho
        rating : 3
    },
    {
        id :3 ,
        name : 'Iphone 12 Plus',
        image : 'https://img.websosanh.vn/v2/users/review/images/g0uimocg53p63.jpg?compress=85',
        description : 'Sản phẩm do Apple sản xuất',
        price : 1000,
        inventory : 5 ,// sản phẩm  trong kho
        rating : 4
    },
    {
        id :4 ,
        name : 'Iphone 11 Pro Max',
        image : 'https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-600x600.jpg',
        description : 'Sản phẩm do Apple sản xuất',
        price : 1000,
        inventory : 5 ,// sản phẩm  trong kho
        rating : 4
    },
    {
        id :5 ,
        name : 'Samsung Galaxy A Series',
        image : 'https://cdn.fptshop.com.vn/Uploads/Originals/2020/12/17/637437951489370946_samsung-a12-xanh-dd.png',
        description : 'Sản phẩm do Samsung sản xuất',
        price : 1000,
        inventory : 5 ,// sản phẩm  trong kho
        rating : 4
    },
    {
        id :6 ,
        name : 'Samsung Galaxy A32',
        image : 'https://cdn.tgdd.vn/Products/Images/42/234315/samsung-galaxy-a32-4g-thumb-xanh-600x600-200x200.jpg',
        description : 'Sản phẩm do Samsung sản xuất',
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