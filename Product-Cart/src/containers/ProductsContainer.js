import  { connect } from 'react-redux';
import Products from './../components/Products';
import PropTypes from 'prop-types';

function ProductsContainer ( props) {
    var {products} = props;
    return (
        <Products products={products}/>
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
    ).isRequired
}


const mapStatetoProps = state =>{
    return{
        products : state.products
    }

} 

const mapDispatchToProps = () => {
    
}
export default connect(mapStatetoProps, null) (ProductsContainer);
