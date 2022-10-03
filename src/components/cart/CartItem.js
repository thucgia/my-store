import React, { useState } from 'react';

function CartItem(props) {
    const updateCountProduct = (type) => {
        props.setCart(prevState => {
            let items = [...prevState]
            let index = prevState.findIndex(item => item.id === props.id)
            if (type === "plus") items[index].count++
            else if (type === "minus") {
                if (items[index].count === 1) {
                    props.setShowMessage("Remove CartItem?")
                    props.setDelCartItem(props.id)
                } else {
                    items[index].count--
                }
            }
            return items
        })
    }
    return (
        <tr>
            <td className="romove-item"><a href="!#" title="cancel" className="icon"><i className="fa fa-trash-o"></i></a></td>
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
                        <div className="arrow plus gradient" onClick={() => updateCountProduct("plus")}><span className="ir"><i className="icon fa fa-sort-asc"></i></span></div>
                        <div className="arrow minus gradient" onClick={() => updateCountProduct("minus")}><span className="ir"><i className="icon fa fa-sort-desc"></i></span></div>
                    </div>
                    <input type="text" value={props.count} disabled/>
                </div>
            </td>
            <td className="cart-product-sub-total"><span className="cart-sub-total-price">${ props.price }</span></td>
            <td className="cart-product-grand-total"><span className="cart-grand-total-price">${ props.price * props.count }</span></td>
        </tr>
    );
}

export default CartItem;