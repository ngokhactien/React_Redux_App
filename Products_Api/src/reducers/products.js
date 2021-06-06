var initialState = [
    {
        id : 1 ,
        name : 'Iphone 6 Plus',
        price : 400,
        status : true
    },
    {
        id :2 ,
        name : 'SamSung galaxy S7',
        price : 400,
        status : false
    },
    {
        id :3 ,
        name : 'Iphone 12 Plus',
        price : 1000,
        status :false
    }
];

const products = (state = initialState , action) =>{
    switch(action.type)
    {
        // case type.LIST_All :
        //     return [...state] ;
        default :
            return  [...state] ;
    }
};

export default products;