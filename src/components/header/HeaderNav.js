import React from 'react';

function HeaderNav(props) {
    return (
        <div className="header-nav animate-dropdown">
            <div className="container">
            <div className="yamm navbar navbar-default" role="navigation">
                <div className="navbar-header">
            <button data-target="#mc-horizontal-menu-collapse" data-toggle="collapse" className="navbar-toggle collapsed" type="button"> 
            <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
                </div>
                <div className="nav-bg-class">
                <div className="navbar-collapse collapse" id="mc-horizontal-menu-collapse">
                    <div className="nav-outer">
                    <ul className="nav navbar-nav">
                        <li className="active dropdown"> <a href="home.html">Home</a> </li>
                        <li className="dropdown yamm mega-menu"> <a href="home.html" data-hover="dropdown" className="dropdown-toggle" data-toggle="dropdown">Clothing</a>
                        <ul className="dropdown-menu container">
                            <li>
                            <div className="yamm-content ">
                                <div className="row">
                                <div className="col-xs-12 col-sm-6 col-md-2 col-menu">
                                    <h2 className="title">Men</h2>
                                    <ul className="links">
                                    <li><a href="#">Dresses</a></li>
                                    <li><a href="#">Shoes </a></li>
                                    <li><a href="#">Jackets</a></li>
                                    <li><a href="#">Sunglasses</a></li>
                                    <li><a href="#">Sport Wear</a></li>
                                    <li><a href="#">Blazers</a></li>
                                    <li><a href="#">Shirts</a></li>
                                    </ul>
                                </div>
                                {/* <!-- /.col --> */}
                                
                                <div className="col-xs-12 col-sm-6 col-md-2 col-menu">
                                    <h2 className="title">Women</h2>
                                    <ul className="links">
                                    <li><a href="#">Handbags</a></li>
                                    <li><a href="#">Jwellery</a></li>
                                    <li><a href="#">Swimwear </a></li>
                                    <li><a href="#">Tops</a></li>
                                    <li><a href="#">Flats</a></li>
                                    <li><a href="#">Shoes</a></li>
                                    <li><a href="#">Winter Wear</a></li>
                                    </ul>
                                </div>
                                {/* <!-- /.col --> */}
                                
                                <div className="col-xs-12 col-sm-6 col-md-2 col-menu">
                                    <h2 className="title">Boys</h2>
                                    <ul className="links">
                                    <li><a href="#">Toys & Games</a></li>
                                    <li><a href="#">Jeans</a></li>
                                    <li><a href="#">Shirts</a></li>
                                    <li><a href="#">Shoes</a></li>
                                    <li><a href="#">School Bags</a></li>
                                    <li><a href="#">Lunch Box</a></li>
                                    <li><a href="#">Footwear</a></li>
                                    </ul>
                                </div>
                                {/* <!-- /.col --> */}
                                
                                <div className="col-xs-12 col-sm-6 col-md-2 col-menu">
                                    <h2 className="title">Girls</h2>
                                    <ul className="links">
                                    <li><a href="#">Sandals </a></li>
                                    <li><a href="#">Shorts</a></li>
                                    <li><a href="#">Dresses</a></li>
                                    <li><a href="#">Jwellery</a></li>
                                    <li><a href="#">Bags</a></li>
                                    <li><a href="#">Night Dress</a></li>
                                    <li><a href="#">Swim Wear</a></li>
                                    </ul>
                                </div>
                                {/* <!-- /.col --> */}
                                
                                <div className="col-xs-12 col-sm-6 col-md-4 col-menu banner-image"> <img className="img-responsive" src="assets/images/banners/top-menu-banner.jpg" alt=""/> </div>
                                {/* <!-- /.yamm-content -->  */}
                                </div>
                            </div>
                            </li>
                        </ul>
                        </li>
                        <li className="dropdown mega-menu"> 
                        <a href="category.html"  data-hover="dropdown" className="dropdown-toggle" data-toggle="dropdown">Electronics <span className="menu-label hot-menu hidden-xs">hot</span> </a>
                        <ul className="dropdown-menu container">
                            <li>
                            <div className="yamm-content">
                                <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-2 col-menu">
                                    <h2 className="title">Laptops</h2>
                                    <ul className="links">
                                    <li><a href="#">Gaming</a></li>
                                    <li><a href="#">Laptop Skins</a></li>
                                    <li><a href="#">Apple</a></li>
                                    <li><a href="#">Dell</a></li>
                                    <li><a href="#">Lenovo</a></li>
                                    <li><a href="#">Microsoft</a></li>
                                    <li><a href="#">Asus</a></li>
                                    <li><a href="#">Adapters</a></li>
                                    <li><a href="#">Batteries</a></li>
                                    <li><a href="#">Cooling Pads</a></li>
                                    </ul>
                                </div>
                                {/* <!-- /.col --> */}
                                
                                <div className="col-xs-12 col-sm-12 col-md-2 col-menu">
                                    <h2 className="title">Desktops</h2>
                                    <ul className="links">
                                    <li><a href="#">Routers & Modems</a></li>
                                    <li><a href="#">CPUs, Processors</a></li>
                                    <li><a href="#">PC Gaming Store</a></li>
                                    <li><a href="#">Graphics Cards</a></li>
                                    <li><a href="#">Components</a></li>
                                    <li><a href="#">Webcam</a></li>
                                    <li><a href="#">Memory (RAM)</a></li>
                                    <li><a href="#">Motherboards</a></li>
                                    <li><a href="#">Keyboards</a></li>
                                    <li><a href="#">Headphones</a></li>
                                    </ul>
                                </div>
                                {/* <!-- /.col --> */}
                                
                                <div className="col-xs-12 col-sm-12 col-md-2 col-menu">
                                    <h2 className="title">Cameras</h2>
                                    <ul className="links">
                                    <li><a href="#">Accessories</a></li>
                                    <li><a href="#">Binoculars</a></li>
                                    <li><a href="#">Telescopes</a></li>
                                    <li><a href="#">Camcorders</a></li>
                                    <li><a href="#">Digital</a></li>
                                    <li><a href="#">Film Cameras</a></li>
                                    <li><a href="#">Flashes</a></li>
                                    <li><a href="#">Lenses</a></li>
                                    <li><a href="#">Surveillance</a></li>
                                    <li><a href="#">Tripods</a></li>
                                    </ul>
                                </div>
                                {/* <!-- /.col --> */}
                                <div className="col-xs-12 col-sm-12 col-md-2 col-menu">
                                    <h2 className="title">Mobile Phones</h2>
                                    <ul className="links">
                                    <li><a href="#">Apple</a></li>
                                    <li><a href="#">Samsung</a></li>
                                    <li><a href="#">Lenovo</a></li>
                                    <li><a href="#">Motorola</a></li>
                                    <li><a href="#">LeEco</a></li>
                                    <li><a href="#">Asus</a></li>
                                    <li><a href="#">Acer</a></li>
                                    <li><a href="#">Accessories</a></li>
                                    <li><a href="#">Headphones</a></li>
                                    <li><a href="#">Memory Cards</a></li>
                                    </ul>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-4 col-menu custom-banner"> <a href="#"><img alt="" src="assets/images/banners/top-menu-banner1.jpg"/></a> </div>
                                </div>
                                {/* <!-- /.row -->  */}
                            </div>
                            {/* <!-- /.yamm-content -->  */}
                            </li>
                        </ul>
                        </li>
                        <li className="dropdown hidden-sm"> <a href="category.html">Health & Beauty <span className="menu-label new-menu hidden-xs">new</span> </a> </li>
                        <li className="dropdown hidden-sm"> <a href="category.html">Watches</a> </li>
                        <li className="dropdown"> <a href="contact.html">Jewellery</a> </li>
                        <li className="dropdown"> <a href="contact.html">Shoes</a> </li>
                        <li className="dropdown"> <a href="contact.html">Kids & Girls</a> </li>
                        <li className="dropdown"> <a href="#" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">Pages</a>
                        <ul className="dropdown-menu pages">
                            <li>
                            <div className="yamm-content">
                                <div className="row">
                                <div className="col-xs-12 col-menu">
                                    <ul className="links">
                                    <li><a href="home.html">Home</a></li>
                                    <li><a href="category.html">Category</a></li>
                                    <li><a href="detail.html">Detail</a></li>
                                    <li><a href="shopping-cart.html">Shopping Cart Summary</a></li>
                                    <li><a href="checkout.html">Checkout</a></li>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="blog-details.html">Blog Detail</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                    <li><a href="sign-in.html">Sign In</a></li>
                                    <li><a href="my-wishlist.html">Wishlist</a></li>
                                    <li><a href="terms-conditions.html">Terms and Condition</a></li>
                                    <li><a href="track-orders.html">Track Orders</a></li>
                                    <li><a href="product-comparison.html">Product-Comparison</a></li>
                                    <li><a href="faq.html">FAQ</a></li>
                                    <li><a href="404.html">404</a></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </li>
                        </ul>
                        </li>
                        <li className="dropdown  navbar-right special-menu"> <a href="#">Get 30% off on selected items</a> </li>
                    </ul>
                    {/* <!-- /.navbar-nav --> */}
                    <div className="clearfix"></div>
                    </div>
                    {/* <!-- /.nav-outer -->  */}
                </div>
                {/* <!-- /.navbar-collapse -->  */}
                
                </div>
                {/* <!-- /.nav-bg-class -->  */}
            </div>
            {/* <!-- /.navbar-default -->  */}
            </div>
            {/* <!-- /.container-class -->  */}
            
        </div>
    );
}

export default HeaderNav;