import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem(props) {
    return (
        <div className="item item-carousel" style={{width:props.width}}>
            <div className="products">
                <div className="product">
                    <div className="product-image">
                        <div className="image"> 
                            <a href="detail.html">
                                <img src={props.product.image} alt=""/>
                                {/* <img src={props.images[1]} alt="" className="hover-image"/> */}
                            </a> 
                        </div>
                    </div>
                    
                    <div className="product-info text-left">
                        <h3 className="name"><Link to={`/product/${props.product.id}`} className="">{props.product.title}</Link></h3>
                        <div className="rating rateit-small"></div>
                        <div className="description"></div>
                        <div className="product-price"> <span className="price"> ${props.product.price} </span> <span className="price-before-discount">$ {props.product.price_before_discount}</span> </div>
                    </div>
                    <div className="cart clearfix animate-effect">
                        <div className="action">
                        <ul className="list-unstyled">
                            <li className="add-cart-button btn-group">
                                <button
                                    data-toggle="tooltip"
                                    className="btn btn-primary icon"
                                    type="button"
                                    title="Add Cart"
                                    onClick={() => props.addToCart(props.product)}
                                >
                                    <i className="fa fa-shopping-cart"></i>
                                </button>
                            </li>
                            <li className="lnk wishlist">
                                <a data-toggle="tooltip" className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i></a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default ProductItem;