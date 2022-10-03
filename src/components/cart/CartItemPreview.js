import React from 'react';

function CartItemPreview(props) {
    return (
        <>
            <div className="cart-item product-summary">
                <div className="row">
                    <div className="col-xs-4">
                        <div className="image"> <a href="detail.html"><img src={props.image} alt=""/></a> </div>
                    </div>
                    <div className="col-xs-7">
                        <h3 className="name"><a href="index8a95.html?page-detail">{props.title}</a></h3>
                        <div className="price">${props.price + props.count}</div>
                    </div>
                    <div className="col-xs-1 action"> <a href="!#" onClick={e => { e.preventDefault(); props.deleteCartItem(props.id); }}><i className="fa fa-trash"></i></a> </div>
                </div>
            </div>
            <div className="clearfix"></div>
            <hr/>
        </>
    );
}

export default CartItemPreview;