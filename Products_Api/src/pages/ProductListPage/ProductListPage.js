import ProductList from './../../Components/ProductList/ProductList';
import { useEffect } from 'react';
import ProductItem from './../../Components/ProduceItem/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchProductsRequest , actDeleteProductsRequest } from './../../actions/index'

function ProductListPage(props) {
    
    const {products ,fetchAllProducts, ondeleteProducts} = props ;
    
    useEffect(()=>{   
        fetchAllProducts(); 
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
        ondeleteProducts(id)
    }
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

const mapDispathToProps = (dispatch , props) =>{
    return {
        fetchAllProducts : () =>{
            dispatch(actFetchProductsRequest());
        },
        ondeleteProducts : (id) =>{
            dispatch(actDeleteProductsRequest(id));
        }
    }
}

export default connect(mapStateToProps , mapDispathToProps) (ProductListPage);
