import ProductList from './../../Components/ProductList/ProductList';
import { useEffect, useState } from 'react';
import ProductItem from './../../Components/ProduceItem/ProductItem';
import { connect } from 'react-redux';
import axios from 'axios';

function ProductListPage(props) {

    const [products ,setProducts] = useState([]);
    useEffect(()=>{   
        axios({
            method: 'GET',
            url: 'http://localhost:3000/products',
            data: null
        }).then(res => { 
            setProducts(res.data);
        }).catch(err =>{
            console.log(err);
        });
    });

    var showProducts = (products) =>{
        console.log(products);
        var result = null ;
        if(products.length >0){
            result = products.map((product , index)=>{
                return (
                    <ProductItem
                        key = {index}
                        product = {product}
                        index = {index}
                    />
                );
            })
        };
        return result;
    };

    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <button type="button" className="btn btn-info md-10">
                Thêm sản phẩm
            </button>
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
