import  { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Massage from './../constants/Massage';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import { actChangeMassage, actRemoveProductInCart , actUpdateProductInCart } from './../actions/index';


function CartContainer ( props) {
    var { cart , onDeleteProductInCart , onChangeMassage , onUpdataProductInCart} = props ;

    var showTotalAmount = () =>{
        var result = null ;
        if(cart.length > 0){
            result = <CartResult cart = {cart} />
        }
        return result;
    };

    var showCartItem = () =>{
        var result = <tr>
            <td>
                {Massage.MSG_CART_EMPTY}
            </td>
        </tr> ;
        if(cart.length > 0){
            result = cart.map( (item , index) => {
                return (
                    <CartItem 
                        key = {index}
                        item = {item}
                        index = { index }
                        onDeleteProductInCart = {onDeleteProductInCart}
                        onChangeMassage = {onChangeMassage}
                        onUpdataProductInCart = {onUpdataProductInCart}
                    />
                );
            })
        }
        return result;
    }

    return (
        <Cart>
            { showCartItem() }
            { showTotalAmount() }
        </Cart>
    );
};

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
    })).isRequired ,
    onDeleteProductInCart :PropTypes.func.isRequired ,
    onChangeMassage : PropTypes.func.isRequired,
    onUpdataProductInCart :PropTypes.func.isRequired
}

const mapStatetoProps = state =>{
    return{
        cart : state.cart
    }
};
const mapDispatchToProps = (dispatch , props) => {
    return {
        onDeleteProductInCart : (product) => {
            dispatch(actRemoveProductInCart(product))
        },
        onChangeMassage : (message) => {
            dispatch(actChangeMassage(message))
        },
        onUpdataProductInCart : (product , quantity) => {
            dispatch(actUpdateProductInCart(product , quantity))
        }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps) (CartContainer);
