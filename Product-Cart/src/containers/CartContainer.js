import  { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Massage from './../constants/Massage';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';

function CartContainer ( props) {
    var { cart } = props ;
    return (
        <Cart>
            { showCartItem(cart) }
            { showTotalAmount(cart) }
        </Cart>
    );
};

var showCartItem = cart =>{
    var result = Massage.MSG_CART_EMPTY ;
    if(cart.length > 0){
        result = cart.map( (item , index) => {
            return (
                <CartItem 
                    key = {index}
                    item = {item}
                    index = { index }
                />
            );
        })
    }
    return result;
}

var showTotalAmount = cart =>{
    var result = null ;
    if(cart.length > 0){
        result = <CartResult cart = {cart} />
    }
    return result;
}

CartContainer.propTypes = {
    cart : PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            image : PropTypes.string.isRequired,
            description : PropTypes.string.isRequired,
            price : PropTypes.number.isRequired,
            inventory : PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired
        }).isRequired ,
        quatity : PropTypes.number.isRequired
    })).isRequired
}

const mapStatetoProps = state =>{
    return{
        cart : state.cart
    }
}

export default connect(mapStatetoProps, null) (CartContainer);
