import React from 'react';

function CartItem(props) {
    return (
        <tr>
            <td className="romove-item"><a href="!#" title="cancel" className="icon" onClick={ e => { e.preventDefault(); props.deleteCartItem(props.id) } }><i className="fa fa-trash-o"></i></a></td>
            <td className="cart-image">
                <a className="entry-thumbnail" href="detail.html">
                    <img src={ props.image } alt=""/>
                </a>
            </td>
            <td className="cart-product-name-info">
                <h4 className='cart-product-description'><a href="detail.html">{ props.title }</a></h4>
            </td>
            <td className="cart-product-quantity">
                <div className="quant-input">
                    <div className="arrows">
                        <div className="arrow plus gradient" onClick={() => props.updateProductQuatity(true, "plus", props.id)}><span className="ir"><i className="icon fa fa-sort-asc"></i></span></div>
                        <div className="arrow minus gradient" onClick={() => props.updateProductQuatity(true, "minus", props.id)}><span className="ir"><i className="icon fa fa-sort-desc"></i></span></div>
                    </div>
                    <input type="text" value={props.count} onChange={e => props.updateProductQuatity(false, e.target.value, props.id)} />
                </div>
            </td>
            <td className="cart-product-sub-total"><span className="cart-sub-total-price">${ props.price }</span></td>
            <td className="cart-product-grand-total"><span className="cart-grand-total-price">${ props.price * props.count }</span></td>
        </tr>
    );
}

export default CartItem;