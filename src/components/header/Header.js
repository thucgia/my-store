import React from 'react';

function Header(props) {
    return (
        <header className='header-style-1'>
            <div className="top-bar animate-dropdown">
                <div className="container">
                    <div className="header-top-inner">
                        <div className="cnt-account">
                            <ul className="list-unstyled">
                                <li className="myaccount"><a href="#"><span>My Account</span></a></li>
                                <li className="wishlist"><a href="#"><span>Wishlist</span></a></li>
                                <li className="header_cart hidden-xs"><a href="#"><span>My Cart</span></a></li>
                                <li className="check"><a href="#"><span>Checkout</span></a></li>
                                <li className="login"><a href="#"><span>Login</span></a></li>
                            </ul>
                        </div>

                        <div className="cnt-block">
                        <ul className="list-unstyled list-inline">
                            <li className="dropdown dropdown-small"> <a href="#" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown"><span className="value">USD </span><b className="caret"></b></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">USD</a></li>
                                <li><a href="#">INR</a></li>
                                <li><a href="#">GBP</a></li>
                            </ul>
                            </li>
                            <li className="dropdown dropdown-small"> <a href="#" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown"><span className="value">English </span><b className="caret"></b></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">English</a></li>
                                <li><a href="#">French</a></li>
                                <li><a href="#">German</a></li>
                            </ul>
                            </li>
                        </ul>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>

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
                                        <ul className="categories-filter animate-dropdown">
                                            <li className="dropdown"> <a className="dropdown-toggle"  data-toggle="dropdown" href="category.html">Categories <b className="caret"></b></a>
                                                <ul className="dropdown-menu" role="menu" >
                                                    <li className="menu-header">Computer</li>
                                                    <li role="presentation"><a role="menuitem" tabIndex="-1" href="category.html">- Clothing</a></li>
                                                    <li role="presentation"><a role="menuitem" tabIndex="-1" href="category.html">- Electronics</a></li>
                                                    <li role="presentation"><a role="menuitem" tabIndex="-1" href="category.html">- Shoes</a></li>
                                                    <li role="presentation"><a role="menuitem" tabIndex="-1" href="category.html">- Watches</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <input className="search-field" placeholder="Search here..." />
                                        <a className="search-button" href="#" ></a>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12 animate-dropdown top-cart-row"> 
                        <div class="dropdown dropdown-cart">
                            <a href="#" class="dropdown-toggle lnk-cart" data-toggle="dropdown">
                                <div class="items-cart-inner">
                                    <div class="basket">
                                        <div class="basket-item-count"><span class="count">2</span></div>
                                        <div class="total-price-basket"> <span class="lbl">Shopping Cart</span> <span class="value">$4580</span> </div>
                                    </div>
                                </div>
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <div class="cart-item product-summary">
                                        <div class="row">
                                            <div class="col-xs-4">
                                                <div class="image"> <a href="detail.html"><img src="assets/images/products/p4.jpg" alt=""/></a> </div>
                                            </div>
                                            <div class="col-xs-7">
                                                <h3 class="name"><a href="index8a95.html?page-detail">Simple Product</a></h3>
                                                <div class="price">$600.00</div>
                                            </div>
                                            <div class="col-xs-1 action"> <a href="#"><i class="fa fa-trash"></i></a> </div>
                                        </div>
                                    </div>
                                    {/* <!-- /.cart-item --> */}
                                    <div class="clearfix"></div>
                                    <hr/>
                                    <div class="clearfix cart-total">
                                        <div class="pull-right"> <span class="text">Sub Total :</span><span class='price'>$600.00</span> </div>
                                        <div class="clearfix"></div>
                                        <a href="checkout.html" class="btn btn-upper btn-primary btn-block m-t-20">Checkout</a>
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
        </header>
    );
}

export default Header;