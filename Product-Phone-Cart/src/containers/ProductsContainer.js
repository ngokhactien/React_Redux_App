import  { connect } from 'react-redux';
import Products from './../components/Products';
import PropTypes from 'prop-types';
import { actAddToCart , actChangeMassage } from './../actions/index';
import Product from './../components/Product';

function ProductsContainer ( props) {
    var {products , onAddToCart ,onChangeMassage } = props;   // để chuẩn onAddToCart.props xuống showProducts() này để có thể dùng props onAddToCart.props từ redux 
    return (
        <Products>
            { showProducts(products , onAddToCart , onChangeMassage) }
        </Products>
    );
};

ProductsContainer.propTypes = {
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            image : PropTypes.string.isRequired,
            description : PropTypes.string.isRequired,
            price : PropTypes.number.isRequired,
            inventory : PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired
        })
    ).isRequired ,
    onChangeMassage :PropTypes.func.isRequired ,
    onAddToCart :PropTypes.func.isRequired
}

var showProducts = (products , onAddToCart , onChangeMassage) =>{
    var result = null ;
    if( products.length > 0 ){
        result = products.map((product , index)=>{
            return <Product 
                        key={ index }  
                        product={ product } 
                        onAddToCart = { onAddToCart }
                        onChangeMassage = {onChangeMassage}
                    />;
        });
    };
    return result;
}


const mapStatetoProps = state =>{
    return{
        products : state.products
    }

} 

const mapDispatchToProps = ( dispatch , props) => {
    return {
        onAddToCart : (product) =>{
            dispatch( actAddToCart(product , 1) )
        },
        onChangeMassage : (massage) =>{
            dispatch( actChangeMassage(massage) )
        }
    }
}
export default connect(mapStatetoProps, mapDispatchToProps) (ProductsContainer);
