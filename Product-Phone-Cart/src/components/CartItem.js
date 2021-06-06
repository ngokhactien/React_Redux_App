
import React, { useState } from 'react';
import *  as Massage from './../constants/Massage';

export default function CartItem (props) {

    // var [quantityResult, setQuatity] = useState(1);
    var { item  , onDeleteProductInCart , onChangeMassage , onUpdataProductInCart} = props ;
    var {quantity} = item ;

    var onDelete = ( product ) => {
        onDeleteProductInCart(product) ;
        onChangeMassage(Massage.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    };

    const onUpdateQuantity = (product , quantity ) => {
        if(quantity > 0) {
            onUpdataProductInCart(product , quantity);
            onChangeMassage(Massage.MSG_UPDATE_CART_SUCCESS);
        };
    };

    var showSubTotal =  ( quantity , pice ) => {
        return quantity * pice ;
    };

    return (
        
        <tr>
            <th scope="row">
                <img src={item.product.image}
                    alt="" className="img-fluid z-depth-0" />
            </th>
            <td>
                <h5>
                    <strong>{item.product.name}</strong>
                </h5>
            </td>
            <td> {item.product.price} $</td>
            <td className="center-on-small-only">
                <span className="qty">{ quantity } &nbsp; </span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label 
                        className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                        onClick = { () => onUpdateQuantity( item.product , item.quantity - 1 ) }
                    >
                        <a href>—</a>
                    </label>
                    <label 
                        className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                        onClick = { () => onUpdateQuantity( item.product , item.quantity +1  ) }
                    >
                        <a href>+</a>
                    </label>
                </div>
            </td>
            <td>{ showSubTotal( quantity , item.product.price) } $</td>
            <td>
                <button 
                    type="button" 
                    className="btn btn-sm btn-primary waves-effect waves-light" 
                    data-toggle="tooltip" 
                    data-placement="top"
                    title="" data-original-title="Remove item"
                    onClick = { () => onDelete(item.product ) }
                >
                    X
                </button>
            </td>
        </tr>
    );
};

