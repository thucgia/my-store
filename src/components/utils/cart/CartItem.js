import React from 'react';

function CartItem(props) {
    const delCartItem = (e) => {
        e.preventDefault();
        props.deleteCartItem(props.id)
    }
    const inputUpdateProductQuantity = (isInput, arrow_type) => (e) => {
        if (isInput) {
            props.updateProductQuatity(false, e.target.value, props.id)
        } else {
            if (arrow_type === "plus")
                props.updateProductQuatity(true, "plus", props.id)
            else
                props.updateProductQuatity(true, "minus", props.id)
        }
    }
    return (
        <tr>
            <td className="romove-item"><a href="!#" title="cancel" className="icon" onClick={delCartItem}><i className="fa fa-trash-o"></i></a></td>
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
                        <div className="arrow plus gradient" onClick={inputUpdateProductQuantity(false, "plus")}><span className="ir"><i className="icon fa fa-sort-asc"></i></span></div>
                        <div className="arrow minus gradient" onClick={inputUpdateProductQuantity(false, "minus")}><span className="ir"><i className="icon fa fa-sort-desc"></i></span></div>
                    </div>
                    <input type="text" value={props.count} onChange={inputUpdateProductQuantity(true)} />
                </div>
            </td>
            <td className="cart-product-sub-total"><span className="cart-sub-total-price">${ props.price }</span></td>
            <td className="cart-product-grand-total"><span className="cart-grand-total-price">${ props.price * props.count }</span></td>
        </tr>
    );
}

export default CartItem;