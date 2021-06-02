import  { connect } from 'react-redux';
import Products from './../components/Products';
import PropTypes from 'prop-types';

function CartContainer ( props) {

    return (
        <div></div>
    );
};

CartContainer.propTypes = {
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



var mapStatetoProps = state =>{
    return{
        products : state.products
    }

} 

export default connect(mapStatetoProps, null) (CartContainer);
