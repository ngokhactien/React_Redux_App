import ProductList from './../../Components/ProductList/ProductList';
import { useEffect, useState } from 'react';
import ProductItem from './../../Components/ProduceItem/ProductItem';
import { connect } from 'react-redux';
import apiCaller from './../../utils/apiCaller';
import { Link } from 'react-router-dom';

function ProductListPage(props) {

    const [products ,setProducts] = useState([]);
    useEffect(()=>{   
        apiCaller('products' , 'GET' ,null).then(res => {
            setProducts(res.data);
        })  
    });


    var showProducts = (products) =>{
        var result = null ;
        if(products.length >0){
            result = products.map((product , index)=>{
                return (
                    <ProductItem
                        key = {index}
                        product = {product}
                        index = {index}
                        onDeleteItem = {onDeleteItem}
                    />
                );
            })
        };
        return result;
    };

    const onDeleteItem =(id) =>{
        console.log(id)
        apiCaller(`products/${id}`, 'DELETE' ,null)
        // .then(res => {
        //     if(res.status === 200 ) { //ok
        //         var index = findIndex(products , id);
        //         if(index !== -1){
        //             products.splice(index , 1);
        //             setProducts({
        //                 products : products
        //             });
        //         }
        //     }

        // })
    }
    // khi nào ko load được khi xóa thì dùng
    // const findIndex = (products , id) =>{
    //     var result = -1 ;
    //     products.forEach((product , index) => {
    //         if(product === id){
    //             result = index ;
    //         }
    //     });
    //     return result ;
    // };

    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Link to='/product/add' className="btn btn-info md-10">
                Thêm sản phẩm
            </Link>
            <ProductList>
                {showProducts(products)}
            </ProductList>
        </div> 
        
    );
};

const mapStateToProps = state =>{
    return {
        products : state.products
    }
};

export default connect(mapStateToProps , null) (ProductListPage);
