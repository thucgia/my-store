import React, { useState } from 'react';
import CartItemPreview from '../cart/CartItemPreview';

function MainHeader(props) {
    const [ openCartTotal, setOpenCartTotal ] = useState(false)
    return (
        <div className="main-header">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-3 logo-holder"> 
                        <div className="logo"> <a href="home.html"> <img src="assets/images/logo.png" alt="logo"/> </a> </div>
                    </div>
                    <div className="col-lg-7 col-md-6 col-sm-8 col-xs-12 top-search-holder"> 
                        <div className="search-area">
                            <form>
                                <div className="control-group">
                                    <input className="search-field"/>
                                    <a className="search-button" href="!#" ></a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12 animate-dropdown top-cart-row"> 
                    <div className={"dropdown dropdown-cart" + (openCartTotal ? " open" : "")}>
                        <a href="!#" className="dropdown-toggle lnk-cart" data-toggle="dropdown" onClick={(e) => {e.preventDefault(); setOpenCartTotal(!openCartTotal);}}>
                            <div className="items-cart-inner">
                                <div className="basket">
                                    <div className="basket-item-count"><span className="count">{ props.cart.length }</span></div>
                                    <div className="total-price-basket"> <span className="lbl">Shopping Cart</span> <span className="value">$4580</span> </div>
                                </div>
                            </div>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                { props.cart && props.cart.map((item, index) => <CartItemPreview key={index} { ...item } setCart={props.setCart}/>) }
                                <div className="clearfix cart-total">
                                    <div className="pull-right"> <span className="text">Sub Total :</span><span className='price'>${props.cart.reduce((prev, total) => prev + total.price, 0)}</span> </div>
                                    <div className="clearfix"></div>
                                    <a href="checkout.html" className="btn btn-upper btn-primary btn-block m-t-20">Checkout</a>
                                </div>
                                {/* <!-- /.cart-total-->  */}
                                
                            </li>
                        </ul>
                        {/* <!-- /.dropdown-menu-->  */}
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainHeader;