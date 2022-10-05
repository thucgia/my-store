import React, { useEffect } from 'react';
import CartItem from './CartItem';

function ShoppingCart(props) {
    useEffect(() => {
        document.title = props.title
    }, [])
    return (
        <>
            <div className="breadcrumb">
                <div className="container">
                    <div className="breadcrumb-inner">
                        <ul className="list-inline list-unstyled">
                            <li><a href="!#">Home</a></li>
                            <li className='active'>Shopping Cart</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="body-content outer-top-xs">
                <div className="container">
                    <div className="row ">
                        <div className="shopping-cart">
                            <div className="shopping-cart-table ">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="cart-romove item">Remove</th>
                                                <th className="cart-description item">Image</th>
                                                <th className="cart-product-name item">Product Name</th>
                                                <th className="cart-qty item">Quantity</th>
                                                <th className="cart-sub-total item">Subtotal</th>
                                                <th className="cart-total last-item">Grandtotal</th>
                                            </tr>
                                        </thead>
                                        
                                        <tbody>
                                            { props.cart && props.cart.map((item, index) => <CartItem key={index} {...item} updateProductQuatity={props.updateProductQuatity} deleteCartItem={props.deleteCartItem} />) }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12 estimate-ship-tax">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>
                                                <span className="estimate-title">Estimate shipping and tax</span>
                                                <p>Enter your destination to get shipping and tax.</p>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            <tr>
                                                <td>
                                                    <div className="form-group">
                                                        <label className="info-title control-label">Country <span>*</span></label>
                                                        <select className="form-control unicase-form-control selectpicker">
                                                            <option>--Select options--</option>
                                                            <option>India</option>
                                                            <option>SriLanka</option>
                                                            <option>united kingdom</option>
                                                            <option>saudi arabia</option>
                                                            <option>united arab emirates</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="info-title control-label">State/Province <span>*</span></label>
                                                        <select className="form-control unicase-form-control selectpicker">
                                                            <option>--Select options--</option>
                                                            <option>TamilNadu</option>
                                                            <option>Kerala</option>
                                                            <option>Andhra Pradesh</option>
                                                            <option>Karnataka</option>
                                                            <option>Madhya Pradesh</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="info-title control-label">Zip/Postal Code</label>
                                                        <input type="text" className="form-control unicase-form-control text-input" placeholder=""/>
                                                    </div>
                                                    <div className="pull-right">
                                                        <button type="submit" className="btn-upper btn btn-primary">GET A QOUTE</button>
                                                    </div>
                                                </td>
                                            </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="col-md-4 col-sm-12 estimate-ship-tax">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>
                                                <span className="estimate-title">Discount Code</span>
                                                <p>Enter your coupon code if you have one..</p>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            <tr>
                                                <td>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control unicase-form-control text-input" placeholder="You Coupon.."/>
                                                    </div>
                                                    <div className="clearfix pull-right">
                                                        <button type="submit" className="btn-upper btn btn-primary">APPLY COUPON</button>
                                                    </div>
                                                </td>
                                            </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="col-md-4 col-sm-12 cart-shopping-total">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>
                                                <div className="cart-sub-total">
                                                    Subtotal<span className="inner-left-md">${props.totalPrice}</span>
                                                </div>
                                                <div className="cart-grand-total">
                                                    Grand Total<span className="inner-left-md">${props.totalPrice}</span>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            <tr>
                                                <td>
                                                    <div className="cart-checkout-btn pull-right">
                                                        <button type="submit" className="btn btn-primary checkout-btn">PROCCED TO CHEKOUT</button>
                                                        <span className="">Checkout with multiples address!</span>
                                                    </div>
                                                </td>
                                            </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShoppingCart;