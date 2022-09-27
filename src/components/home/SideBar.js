import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function SideBar(props) {
    const [ megaMenu, setMegaMenu ] = useState("")
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const showMegaMenu = (e) => {
        e.preventDefault()
        let mega_menu_id = e.target.id
        if (megaMenu !== "" && megaMenu === mega_menu_id) setMegaMenu("")
        else {
            setMegaMenu(mega_menu_id)
        }
    }
    return (
        <div className="col-xs-12 col-sm-12 col-md-3 sidebar"> 
            
            {/* <!-- ================================== TOP NAVIGATION ================================== --> */}
            <div className="side-menu animate-dropdown outer-bottom-xs">
                <div className="head"><i className="icon fa fa-align-justify fa-fw"></i> Categories</div>
                <nav className="yamm megamenu-horizontal">
                    <ul className="nav">
                        <li className={"dropdown menu-item" + (megaMenu === "clothing" ? " open" : "")}> <a href="#" className="dropdown-toggle" data-toggle="dropdown" id="clothing" onClick={showMegaMenu}><i className="icon fa fa-shopping-bag" aria-hidden="true"></i>Clothing</a>
                            <ul className="dropdown-menu mega-menu">
                                <li className="yamm-content">
                                    <div className="row">
                                    <div className="col-sm-12 col-md-3">
                                        <ul className="links list-unstyled">
                                        <li><a href="!#">Dresses</a></li>
                                        <li><a href="!#">Shoes </a></li>
                                        <li><a href="!#">Jackets</a></li>
                                        <li><a href="!#">Sunglasses</a></li>
                                        <li><a href="!#">Sport Wear</a></li>
                                        <li><a href="!#">Blazers</a></li>
                                        <li><a href="!#">Shirts</a></li>
                                        <li><a href="!#">Shorts</a></li>
                                        </ul>
                                    </div>
                                    {/* <!-- /.col --> */}
                                    <div className="col-sm-12 col-md-3">
                                        <ul className="links list-unstyled">
                                        <li><a href="!#">Handbags</a></li>
                                        <li><a href="!#">Jwellery</a></li>
                                        <li><a href="!#">Swimwear </a></li>
                                        <li><a href="!#">Tops</a></li>
                                        <li><a href="!#">Flats</a></li>
                                        <li><a href="!#">Shoes</a></li>
                                        <li><a href="!#">Winter Wear</a></li>
                                        <li><a href="!#">Night Suits</a></li>
                                        </ul>
                                    </div>
                                    {/* <!-- /.col --> */}
                                    <div className="col-sm-12 col-md-3">
                                        <ul className="links list-unstyled">
                                        <li><a href="!#">Toys &amp; Games</a></li>
                                        <li><a href="!#">Jeans</a></li>
                                        <li><a href="!#">Shirts</a></li>
                                        <li><a href="!#">Shoes</a></li>
                                        <li><a href="!#">School Bags</a></li>
                                        <li><a href="!#">Lunch Box</a></li>
                                        <li><a href="!#">Footwear</a></li>
                                        <li><a href="!#">Wipes</a></li>
                                        </ul>
                                    </div>
                                    {/* <!-- /.col --> */}
                                    <div className="col-sm-12 col-md-3">
                                        <ul className="links list-unstyled">
                                        <li><a href="!#">Sandals </a></li>
                                        <li><a href="!#">Shorts</a></li>
                                        <li><a href="!#">Dresses</a></li>
                                        <li><a href="!#">Jwellery</a></li>
                                        <li><a href="!#">Bags</a></li>
                                        <li><a href="!#">Night Dress</a></li>
                                        <li><a href="!#">Swim Wear</a></li>
                                        <li><a href="!#">Toys</a></li>
                                        </ul>
                                    </div>
                                    {/* <!-- /.col -->  */}
                                    </div>
                                    {/* {/* <!-- /.row -->  */}
                                </li>
                                {/* <!-- /.yamm-content --> */}
                            </ul>
                            {/* <!-- /.dropdown-menu -->  */}
                        </li>
                        {/* <!-- /.menu-item --> */}
                        
                        <li className={"dropdown menu-item" + (megaMenu === "electronic" ? " open" : "")}> <a href="!#" className="dropdown-toggle" data-toggle="dropdown" id="electronic" onClick={showMegaMenu}><i className="icon fa fa-laptop" aria-hidden="true"></i>Electronics</a> 
                            {/* <!-- ================================== MEGAMENU VERTICAL ================================== --> */}
                            <ul className="dropdown-menu mega-menu">
                                <li className="yamm-content">
                                    <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-lg-4">
                                        <ul>
                                        <li><a href="!#">Gaming</a></li>
                                        <li><a href="!#">Laptop Skins</a></li>
                                        <li><a href="!#">Apple</a></li>
                                        <li><a href="!#">Dell</a></li>
                                        <li><a href="!#">Lenovo</a></li>
                                        <li><a href="!#">Microsoft</a></li>
                                        <li><a href="!#">Asus</a></li>
                                        <li><a href="!#">Adapters</a></li>
                                        <li><a href="!#">Batteries</a></li>
                                        <li><a href="!#">Cooling Pads</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-lg-4">
                                        <ul>
                                        <li><a href="!#">Routers &amp; Modems</a></li>
                                        <li><a href="!#">CPUs, Processors</a></li>
                                        <li><a href="!#">PC Gaming Store</a></li>
                                        <li><a href="!#">Graphics Cards</a></li>
                                        <li><a href="!#">Components</a></li>
                                        <li><a href="!#">Webcam</a></li>
                                        <li><a href="!#">Memory (RAM)</a></li>
                                        <li><a href="!#">Motherboards</a></li>
                                        <li><a href="!#">Keyboards</a></li>
                                        <li><a href="!#">Headphones</a></li>
                                        </ul>
                                    </div>
                                    <div className="dropdown-banner-holder"> <a href="!#"><img alt="" src="assets/images/banners/banner-side.png" /></a> </div>
                                    </div>
                                    {/* {/* <!-- /.row -->  */}
                                </li>
                                {/* <!-- /.yamm-content --> */}
                            </ul>
                            {/* <!-- /.dropdown-menu -->  */}
                            {/* <!-- ================================== MEGAMENU VERTICAL ================================== -->  */}
                        </li>
                        {/* <!-- /.menu-item --> */}
                        
                        <li className={"dropdown menu-item" + (megaMenu === "shoes" ? " open" : "")}> <a href="!#" className="dropdown-toggle" data-toggle="dropdown" id="shoes" onClick={showMegaMenu}><i className="icon fa fa-paw" aria-hidden="true"></i>Shoes</a>
                            <ul className="dropdown-menu mega-menu">
                                <li className="yamm-content">
                                    <div className="row">
                                    <div className="col-sm-12 col-md-3">
                                        <ul className="links list-unstyled">
                                        <li><a href="!#">Dresses</a></li>
                                        <li><a href="!#">Shoes </a></li>
                                        <li><a href="!#">Jackets</a></li>
                                        <li><a href="!#">Sunglasses</a></li>
                                        <li><a href="!#">Sport Wear</a></li>
                                        <li><a href="!#">Blazers</a></li>
                                        <li><a href="!#">Shirts</a></li>
                                        <li><a href="!#">Shorts</a></li>
                                        </ul>
                                    </div>
                                    {/* <!-- /.col --> */}
                                    <div className="col-sm-12 col-md-3">
                                        <ul className="links list-unstyled">
                                        <li><a href="!#">Handbags</a></li>
                                        <li><a href="!#">Jwellery</a></li>
                                        <li><a href="!#">Swimwear </a></li>
                                        <li><a href="!#">Tops</a></li>
                                        <li><a href="!#">Flats</a></li>
                                        <li><a href="!#">Shoes</a></li>
                                        <li><a href="!#">Winter Wear</a></li>
                                        <li><a href="!#">Night Suits</a></li>
                                        </ul>
                                    </div>
                                    {/* <!-- /.col --> */}
                                    <div className="col-sm-12 col-md-3">
                                        <ul className="links list-unstyled">
                                        <li><a href="!#">Toys &amp; Games</a></li>
                                        <li><a href="!#">Jeans</a></li>
                                        <li><a href="!#">Shirts</a></li>
                                        <li><a href="!#">Shoes</a></li>
                                        <li><a href="!#">School Bags</a></li>
                                        <li><a href="!#">Lunch Box</a></li>
                                        <li><a href="!#">Footwear</a></li>
                                        <li><a href="!#">Wipes</a></li>
                                        </ul>
                                    </div>
                                    {/* <!-- /.col --> */}
                                    <div className="col-sm-12 col-md-3">
                                        <ul className="links list-unstyled">
                                        <li><a href="!#">Sandals </a></li>
                                        <li><a href="!#">Shorts</a></li>
                                        <li><a href="!#">Dresses</a></li>
                                        <li><a href="!#">Jwellery</a></li>
                                        <li><a href="!#">Bags</a></li>
                                        <li><a href="!#">Night Dress</a></li>
                                        <li><a href="!#">Swim Wear</a></li>
                                        <li><a href="!#">Toys</a></li>
                                        </ul>
                                    </div>
                                    {/* <!-- /.col -->  */}
                                    </div>
                                    {/* {/* <!-- /.row -->  */} 
                                </li>
                                {/* <!-- /.yamm-content --> */}
                            </ul>
                            {/* <!-- /.dropdown-menu -->  */}
                        </li>
                        {/* <!-- /.menu-item --> */}
                        
                        <li className={"dropdown menu-item" + (megaMenu === "watch" ? " open" : "")}> <a href="!#" className="dropdown-toggle" data-toggle="dropdown" id="watch" onClick={showMegaMenu}><i className="icon fa fa-clock-o"></i>Watches</a>
                            <ul className="dropdown-menu mega-menu">
                            <li className="yamm-content">
                                <div className="row">
                                <div className="col-xs-12 col-sm-12 col-lg-4">
                                    <ul>
                                    <li><a href="!#">Gaming</a></li>
                                    <li><a href="!#">Laptop Skins</a></li>
                                    <li><a href="!#">Apple</a></li>
                                    <li><a href="!#">Dell</a></li>
                                    <li><a href="!#">Lenovo</a></li>
                                    <li><a href="!#">Microsoft</a></li>
                                    <li><a href="!#">Asus</a></li>
                                    <li><a href="!#">Adapters</a></li>
                                    <li><a href="!#">Batteries</a></li>
                                    <li><a href="!#">Cooling Pads</a></li>
                                    </ul>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-4">
                                    <ul>
                                    <li><a href="!#">Routers &amp; Modems</a></li>
                                    <li><a href="!#">CPUs, Processors</a></li>
                                    <li><a href="!#">PC Gaming Store</a></li>
                                    <li><a href="!#">Graphics Cards</a></li>
                                    <li><a href="!#">Components</a></li>
                                    <li><a href="!#">Webcam</a></li>
                                    <li><a href="!#">Memory (RAM)</a></li>
                                    <li><a href="!#">Motherboards</a></li>
                                    <li><a href="!#">Keyboards</a></li>
                                    <li><a href="!#">Headphones</a></li>
                                    </ul>
                                </div>
                                <div className="dropdown-banner-holder"> <a href="!#"><img alt="" src="assets/images/banners/banner-side.png" /></a> </div>
                                </div>
                                {/* {/* <!-- /.row -->  */}
                            </li>
                            {/* <!-- /.yamm-content --> */}
                            </ul>
                            {/* <!-- /.dropdown-menu -->  */}
                        </li>
                        {/* <!-- /.menu-item --> */}
                        
                        <li className={"dropdown menu-item" + (megaMenu === "jewellery" ? " open" : "")}> <a href="!#" className="dropdown-toggle" data-toggle="dropdown" id="jewellery" onClick={showMegaMenu}><i className="icon fa fa-diamond"></i>Jewellery</a>
                            <ul className="dropdown-menu mega-menu">
                            <li className="yamm-content">
                                <div className="row">
                                <div className="col-sm-12 col-md-3">
                                    <ul className="links list-unstyled">
                                    <li><a href="!#">Dresses</a></li>
                                    <li><a href="!#">Shoes </a></li>
                                    <li><a href="!#">Jackets</a></li>
                                    <li><a href="!#">Sunglasses</a></li>
                                    <li><a href="!#">Sport Wear</a></li>
                                    <li><a href="!#">Blazers</a></li>
                                    <li><a href="!#">Shirts</a></li>
                                    <li><a href="!#">Shorts</a></li>
                                    </ul>
                                </div>
                                {/* <!-- /.col --> */}
                                <div className="col-sm-12 col-md-3">
                                    <ul className="links list-unstyled">
                                    <li><a href="!#">Handbags</a></li>
                                    <li><a href="!#">Jwellery</a></li>
                                    <li><a href="!#">Swimwear </a></li>
                                    <li><a href="!#">Tops</a></li>
                                    <li><a href="!#">Flats</a></li>
                                    <li><a href="!#">Shoes</a></li>
                                    <li><a href="!#">Winter Wear</a></li>
                                    <li><a href="!#">Night Suits</a></li>
                                    </ul>
                                </div>
                                {/* <!-- /.col --> */}
                                <div className="col-sm-12 col-md-3">
                                    <ul className="links list-unstyled">
                                    <li><a href="!#">Toys &amp; Games</a></li>
                                    <li><a href="!#">Jeans</a></li>
                                    <li><a href="!#">Shirts</a></li>
                                    <li><a href="!#">Shoes</a></li>
                                    <li><a href="!#">School Bags</a></li>
                                    <li><a href="!#">Lunch Box</a></li>
                                    <li><a href="!#">Footwear</a></li>
                                    <li><a href="!#">Wipes</a></li>
                                    </ul>
                                </div>
                                {/* <!-- /.col --> */}
                                <div className="col-sm-12 col-md-3">
                                    <ul className="links list-unstyled">
                                    <li><a href="!#">Sandals </a></li>
                                    <li><a href="!#">Shorts</a></li>
                                    <li><a href="!#">Dresses</a></li>
                                    <li><a href="!#">Jwellery</a></li>
                                    <li><a href="!#">Bags</a></li>
                                    <li><a href="!#">Night Dress</a></li>
                                    <li><a href="!#">Swim Wear</a></li>
                                    <li><a href="!#">Toys</a></li>
                                    </ul>
                                </div>
                                {/* <!-- /.col -->  */}
                                </div>
                                {/* {/* <!-- /.row -->  */}
                            </li>
                            {/* <!-- /.yamm-content --> */}
                            </ul>
                            {/* <!-- /.dropdown-menu -->  */}
                        </li>
                        {/* <!-- /.menu-item --> */}
                        
                        <li className={"dropdown menu-item" + (megaMenu === "heath_beauty" ? " open" : "")}> <a href="!#" className="dropdown-toggle" data-toggle="dropdown" id="heath_beauty" onClick={showMegaMenu}><i className="icon fa fa-heartbeat"></i>Health and Beauty</a>
                            <ul className="dropdown-menu mega-menu">
                            <li className="yamm-content">
                                <div className="row">
                                <div className="col-xs-12 col-sm-12 col-lg-4">
                                    <ul>
                                    <li><a href="!#">Gaming</a></li>
                                    <li><a href="!#">Laptop Skins</a></li>
                                    <li><a href="!#">Apple</a></li>
                                    <li><a href="!#">Dell</a></li>
                                    <li><a href="!#">Lenovo</a></li>
                                    <li><a href="!#">Microsoft</a></li>
                                    <li><a href="!#">Asus</a></li>
                                    <li><a href="!#">Adapters</a></li>
                                    <li><a href="!#">Batteries</a></li>
                                    <li><a href="!#">Cooling Pads</a></li>
                                    </ul>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-4">
                                    <ul>
                                    <li><a href="!#">Routers &amp; Modems</a></li>
                                    <li><a href="!#">CPUs, Processors</a></li>
                                    <li><a href="!#">PC Gaming Store</a></li>
                                    <li><a href="!#">Graphics Cards</a></li>
                                    <li><a href="!#">Components</a></li>
                                    <li><a href="!#">Webcam</a></li>
                                    <li><a href="!#">Memory (RAM)</a></li>
                                    <li><a href="!#">Motherboards</a></li>
                                    <li><a href="!#">Keyboards</a></li>
                                    <li><a href="!#">Headphones</a></li>
                                    </ul>
                                </div>
                                <div className="dropdown-banner-holder"> <a href="!#"><img alt="" src="assets/images/banners/banner-side.png" /></a> </div>
                                </div>
                                {/* <!-- /.row -->  */}
                            </li>
                            {/* <!-- /.yamm-content --> */}
                            </ul>
                            {/* <!-- /.dropdown-menu -->  */}
                            </li>
                        {/* <!-- /.menu-item --> */}
                        
                        <li className="dropdown menu-item"> <a href="!#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-paper-plane"></i>Kids and Babies</a> 
                            {/* <!-- /.dropdown-menu -->  */}
                        </li>
                        {/* <!-- /.menu-item --> */}
                        
                        <li className="dropdown menu-item"> <a href="!#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-futbol-o"></i>Sports</a> 
                            {/* <!-- ================================== MEGAMENU VERTICAL ================================== -->  */}
                            {/* <!-- /.dropdown-menu -->  */}
                            {/* <!-- ================================== MEGAMENU VERTICAL ================================== -->  */}
                        </li>
                        {/* <!-- /.menu-item --> */}
                        
                        <li className="dropdown menu-item"> <a href="!#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon fa fa-envira"></i>Home and Garden</a> 
                            {/* <!-- /.dropdown-menu -->  */}
                        </li>
                        {/* <!-- /.menu-item --> */}
                    
                    </ul>
                    {/* <!-- /.nav -->  */}
                </nav>
            {/* <!-- /.megamenu-horizontal -->  */}
            </div>
            {/* <!-- /.side-menu -->  */}
            {/* <!-- ================================== TOP NAVIGATION : END ================================== -->  */}
            
            {/* <!-- ============================================== HOT DEALS ============================================== --> */}
            <div className="sidebar-widget hot-deals outer-bottom-xs">
            <h3 className="section-title">Hot deals</h3>
            <div className="owl-carousel sidebar-carousel custom-carousel owl-theme outer-top-ss">
                <div className="item">
                <div className="products">
                    <div className="hot-deal-wrapper">
                    <div className="image"> 
                    <a href="!#">
                        <img src="assets/images/hot-deals/p13.jpg" alt=""/> 
                        <img src="assets/images/hot-deals/p13_hover.jpg" alt="" className="hover-image"/>
                    </a>
                    </div>
                    <div className="sale-offer-tag"><span>49%<br/>
                        off</span></div>
                    <div className="timing-wrapper">
                        <div className="box-wrapper">
                        <div className="date box"> <span className="key">120</span> <span className="value">DAYS</span> </div>
                        </div>
                        <div className="box-wrapper">
                        <div className="hour box"> <span className="key">20</span> <span className="value">HRS</span> </div>
                        </div>
                        <div className="box-wrapper">
                        <div className="minutes box"> <span className="key">36</span> <span className="value">MINS</span> </div>
                        </div>
                        <div className="box-wrapper">
                        <div className="seconds box"> <span className="key">60</span> <span className="value">SEC</span> </div>
                        </div>
                    </div>
                    </div>
                    {/* <!-- /.hot-deal-wrapper --> */}
                    
                    <div className="product-info text-left m-t-20">
                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                    <div className="rating rateit-small"></div>
                    <div className="product-price"> <span className="price"> $600.00 </span> <span className="price-before-discount">$800.00</span> </div>
                    {/* <!-- /.product-price -->  */}
                    
                    </div>
                    {/* <!-- /.product-info --> */}
                    
                    <div className="cart clearfix animate-effect">
                    <div className="action">
                        <div className="add-cart-button btn-group">
                        <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                        <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                        </div>
                    </div>
                    {/* <!-- /.action -->  */}
                    </div>
                    {/* <!-- /.cart -->  */}
                </div>
                </div>
                <div className="item">
                <div className="products">
                    <div className="hot-deal-wrapper">
                    <div className="image"> 
                    <a href="!#">
                    <img src="assets/images/hot-deals/p14.jpg" alt=""/> 
                    <img src="assets/images/hot-deals/p14_hover.jpg" alt="" className="hover-image"/>
                    </a>
                    </div>
                    <div className="sale-offer-tag"><span>35%<br/>
                        off</span></div>
                    <div className="timing-wrapper">
                        <div className="box-wrapper">
                        <div className="date box"> <span className="key">120</span> <span className="value">Days</span> </div>
                        </div>
                        <div className="box-wrapper">
                        <div className="hour box"> <span className="key">20</span> <span className="value">HRS</span> </div>
                        </div>
                        <div className="box-wrapper">
                        <div className="minutes box"> <span className="key">36</span> <span className="value">MINS</span> </div>
                        </div>
                        <div className="box-wrapper">
                        <div className="seconds box"> <span className="key">60</span> <span className="value">SEC</span> </div>
                        </div>
                    </div>
                    </div>
                    {/* <!-- /.hot-deal-wrapper --> */}
                    
                    <div className="product-info text-left m-t-20">
                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                    <div className="rating rateit-small"></div>
                    <div className="product-price"> <span className="price"> $600.00 </span> <span className="price-before-discount">$800.00</span> </div>
                    {/* <!-- /.product-price -->  */}
                    
                    </div>
                    {/* <!-- /.product-info --> */}
                    
                    <div className="cart clearfix animate-effect">
                    <div className="action">
                        <div className="add-cart-button btn-group">
                        <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                        <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                        </div>
                    </div>
                    {/* <!-- /.action -->  */}
                    </div>
                    {/* <!-- /.cart -->  */}
                </div>
                </div>
                <div className="item">
                <div className="products">
                    <div className="hot-deal-wrapper">
                    <div className="image">
                    <a href="!#">
                    <img src="assets/images/hot-deals/p15.jpg" alt=""/> 
                    <img src="assets/images/hot-deals/p15_hover.jpg" alt="" className="hover-image"/>
                    </a>
                    </div>
                    <div className="sale-offer-tag"><span>35%<br/>
                        off</span></div>
                    <div className="timing-wrapper">
                        <div className="box-wrapper">
                        <div className="date box"> <span className="key">120</span> <span className="value">Days</span> </div>
                        </div>
                        <div className="box-wrapper">
                        <div className="hour box"> <span className="key">20</span> <span className="value">HRS</span> </div>
                        </div>
                        <div className="box-wrapper">
                        <div className="minutes box"> <span className="key">36</span> <span className="value">MINS</span> </div>
                        </div>
                        <div className="box-wrapper">
                        <div className="seconds box"> <span className="key">60</span> <span className="value">SEC</span> </div>
                        </div>
                    </div>
                    </div>
                    {/* <!-- /.hot-deal-wrapper --> */}
                    
                    <div className="product-info text-left m-t-20">
                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                    <div className="rating rateit-small"></div>
                    <div className="product-price"> <span className="price"> $600.00 </span> <span className="price-before-discount">$800.00</span> </div>
                    {/* <!-- /.product-price -->  */}
                    
                    </div>
                    {/* <!-- /.product-info --> */}
                    
                    <div className="cart clearfix animate-effect">
                    <div className="action">
                        <div className="add-cart-button btn-group">
                        <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                        <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                        </div>
                    </div>
                    {/* <!-- /.action -->  */}
                    </div>
                    {/* <!-- /.cart -->  */}
                </div>
                </div>
            </div>
            {/* <!-- /.sidebar-widget -->  */}
            </div>
            {/* <!-- ============================================== HOT DEALS: END ============================================== -->  */}
            
            {/* <!-- ============================================== SPECIAL OFFER ============================================== --> */}
            
            <div className="sidebar-widget outer-bottom-small">
            <h3 className="section-title">Special Offer</h3>
            <div className="sidebar-widget-body outer-top-xs">
                <div className="owl-carousel sidebar-carousel special-offer custom-carousel owl-theme outer-top-xs">
                <div className="item">
                    <div className="products special-product">
                    <div className="product">
                        <div className="product-micro">
                        <div className="row product-micro-row">
                            <div className="col col-xs-5">
                            <div className="product-image">
                                <div className="image"> <a href="!#"> <img src="assets/images/products/p5.jpg" alt=""/> </a> </div>
                                {/* <!-- /.image -->  */}
                                
                            </div>
                            {/* <!-- /.product-image -->  */}
                            </div>
                            {/* <!-- /.col --> */}
                            <div className="col col-xs-7">
                            <div className="product-info">
                                <h3 className="name"><a href="!#">Floral Print Shirt</a></h3>
                                <div className="rating rateit-small"></div>
                                <div className="product-price"> <span className="price"> $450.99 </span> </div>
                                {/* <!-- /.product-price -->  */}
                                
                            </div>
                            </div>
                            {/* <!-- /.col -->  */}
                        </div>
                        {/* <!-- /.product-micro-row -->  */}
                        </div>
                        {/* <!-- /.product-micro -->  */}
                        
                    </div>
                    <div className="product">
                        <div className="product-micro">
                        <div className="row product-micro-row">
                            <div className="col col-xs-5">
                            <div className="product-image">
                                <div className="image"> <a href="!#"> <img src="assets/images/products/p9.jpg" alt=""/> </a> </div>
                                {/* <!-- /.image -->  */}
                                
                            </div>
                            {/* <!-- /.product-image -->  */}
                            </div>
                            {/* <!-- /.col --> */}
                            <div className="col col-xs-7">
                            <div className="product-info">
                                <h3 className="name"><a href="!#">Floral Print Shirt</a></h3>
                                <div className="rating rateit-small"></div>
                                <div className="product-price"> <span className="price"> $450.99 </span> </div>
                                {/* <!-- /.product-price -->  */}
                                
                            </div>
                            </div>
                            {/* <!-- /.col -->  */}
                        </div>
                        {/* <!-- /.product-micro-row -->  */}
                        </div>
                        {/* <!-- /.product-micro -->  */}
                        
                    </div>
                    <div className="product">
                        <div className="product-micro">
                        <div className="row product-micro-row">
                            <div className="col col-xs-5">
                            <div className="product-image">
                                <div className="image"> <a href="!#"> <img src="assets/images/products/p11.jpg" alt=""/> </a> </div>
                                {/* <!-- /.image -->  */}
                                
                            </div>
                            {/* <!-- /.product-image -->  */}
                            </div>
                            {/* <!-- /.col --> */}
                            <div className="col col-xs-7">
                            <div className="product-info">
                                <h3 className="name"><a href="!#">Floral Print Shirt</a></h3>
                                <div className="rating rateit-small"></div>
                                <div className="product-price"> <span className="price"> $450.99 </span> </div>
                                {/* <!-- /.product-price -->  */}
                                
                            </div>
                            </div>
                            {/* <!-- /.col -->  */}
                        </div>
                        {/* <!-- /.product-micro-row -->  */}
                        </div>
                        {/* <!-- /.product-micro -->  */}
                        
                    </div>
                    </div>
                </div>
                <div className="item">
                    <div className="products special-product">
                    <div className="product">
                        <div className="product-micro">
                        <div className="row product-micro-row">
                            <div className="col col-xs-5">
                            <div className="product-image">
                                <div className="image"> <a href="!#"> <img src="assets/images/products/p15.jpg" alt=""/> </a> </div>
                                {/* <!-- /.image -->  */}
                                
                            </div>
                            {/* <!-- /.product-image -->  */}
                            </div>
                            {/* <!-- /.col --> */}
                            <div className="col col-xs-7">
                            <div className="product-info">
                                <h3 className="name"><a href="!#">Floral Print Shirt</a></h3>
                                <div className="rating rateit-small"></div>
                                <div className="product-price"> <span className="price"> $450.99 </span> </div>
                                {/* <!-- /.product-price -->  */}
                                
                            </div>
                            </div>
                            {/* <!-- /.col -->  */}
                        </div>
                        {/* <!-- /.product-micro-row -->  */}
                        </div>
                        {/* <!-- /.product-micro -->  */}
                        
                    </div>
                    <div className="product">
                        <div className="product-micro">
                        <div className="row product-micro-row">
                            <div className="col col-xs-5">
                            <div className="product-image">
                                <div className="image"> <a href="!#"> <img src="assets/images/products/p13.jpg" alt=""/> </a> </div>
                                {/* <!-- /.image -->  */}
                                
                            </div>
                            {/* <!-- /.product-image -->  */}
                            </div>
                            {/* <!-- /.col --> */}
                            <div className="col col-xs-7">
                            <div className="product-info">
                                <h3 className="name"><a href="!#">Floral Print Shirt</a></h3>
                                <div className="rating rateit-small"></div>
                                <div className="product-price"> <span className="price"> $450.99 </span> </div>
                                {/* <!-- /.product-price -->  */}
                                
                            </div>
                            </div>
                            {/* <!-- /.col -->  */}
                        </div>
                        {/* <!-- /.product-micro-row -->  */}
                        </div>
                        {/* <!-- /.product-micro -->  */}
                        
                    </div>
                    <div className="product">
                        <div className="product-micro">
                        <div className="row product-micro-row">
                            <div className="col col-xs-5">
                            <div className="product-image">
                                <div className="image"> <a href="!#"> <img src="assets/images/products/p12.jpg" alt=""/> </a> </div>
                                {/* <!-- /.image -->  */}
                                
                            </div>
                            {/* <!-- /.product-image -->  */}
                            </div>
                            {/* <!-- /.col --> */}
                            <div className="col col-xs-7">
                            <div className="product-info">
                                <h3 className="name"><a href="!#">Floral Print Shirt</a></h3>
                                <div className="rating rateit-small"></div>
                                <div className="product-price"> <span className="price"> $450.99 </span> </div>
                                {/* <!-- /.product-price -->  */}
                                
                            </div>
                            </div>
                            {/* <!-- /.col -->  */}
                        </div>
                        {/* <!-- /.product-micro-row -->  */}
                        </div>
                        {/* <!-- /.product-micro -->  */}
                        
                    </div>
                    </div>
                </div>
                <div className="item">
                    <div className="products special-product">
                    <div className="product">
                        <div className="product-micro">
                        <div className="row product-micro-row">
                            <div className="col col-xs-5">
                            <div className="product-image">
                                <div className="image"> <a href="!#"> <img src="assets/images/products/p1.jpg"  alt=""/> </a> </div>
                                {/* <!-- /.image -->  */}
                                
                            </div>
                            {/* <!-- /.product-image -->  */}
                            </div>
                            {/* <!-- /.col --> */}
                            <div className="col col-xs-7">
                            <div className="product-info">
                                <h3 className="name"><a href="!#">Floral Print Shirt</a></h3>
                                <div className="rating rateit-small"></div>
                                <div className="product-price"> <span className="price"> $450.99 </span> </div>
                                {/* <!-- /.product-price -->  */}
                                
                            </div>
                            </div>
                            {/* <!-- /.col -->  */}
                        </div>
                        {/* <!-- /.product-micro-row -->  */}
                        </div>
                        {/* <!-- /.product-micro -->  */}
                        
                    </div>
                    <div className="product">
                        <div className="product-micro">
                        <div className="row product-micro-row">
                            <div className="col col-xs-5">
                            <div className="product-image">
                                <div className="image"> <a href="!#"> <img src="assets/images/products/p3.jpg" alt=""/> </a> </div>
                                {/* <!-- /.image -->  */}
                                
                            </div>
                            {/* <!-- /.product-image -->  */}
                            </div>
                            {/* <!-- /.col --> */}
                            <div className="col col-xs-7">
                            <div className="product-info">
                                <h3 className="name"><a href="!#">Floral Print Shirt</a></h3>
                                <div className="rating rateit-small"></div>
                                <div className="product-price"> <span className="price"> $450.99 </span> </div>
                                {/* <!-- /.product-price -->  */}
                            </div>
                            </div>
                            {/* <!-- /.col -->  */}
                        </div>
                        {/* <!-- /.product-micro-row -->  */}
                        </div>
                        {/* <!-- /.product-micro -->  */}
                        
                    </div>
                    <div className="product">
                        <div className="product-micro">
                        <div className="row product-micro-row">
                            <div className="col col-xs-5">
                            <div className="product-image">
                                <div className="image"> <a href="!#"> <img src="assets/images/products/p7.jpg" alt=""/> </a> </div>
                                {/* <!-- /.image -->  */}
                                
                            </div>
                            {/* <!-- /.product-image -->  */}
                            </div>
                            {/* <!-- /.col --> */}
                            <div className="col col-xs-7">
                            <div className="product-info">
                                <h3 className="name"><a href="!#">Floral Print Shirt</a></h3>
                                <div className="rating rateit-small"></div>
                                <div className="product-price"> <span className="price"> $450.99 </span> </div>
                                {/* <!-- /.product-price -->  */}
                                
                            </div>
                            </div>
                            {/* <!-- /.col -->  */}
                        </div>
                        {/* <!-- /.product-micro-row -->  */}
                        </div>
                        {/* <!-- /.product-micro -->  */}
                        
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* <!-- /.sidebar-widget-body -->  */}
            </div>
            {/* <!-- /.sidebar-widget -->  */}
            {/* <!-- ============================================== SPECIAL OFFER : END ============================================== -->  */}
            {/* <!-- ============================================== PRODUCT TAGS ============================================== --> */}
            <div className="sidebar-widget product-tag">
            <h3 className="section-title">Product tags</h3>
            <div className="sidebar-widget-body outer-top-xs">
                <div className="tag-list"> <a className="item" title="Phone" href="category.html">Phone</a> <a className="item active" title="Vest" href="category.html">Vest</a> <a className="item" title="Smartphone" href="category.html">Smartphone</a> <a className="item" title="Furniture" href="category.html">Furniture</a> <a className="item" title="T-shirt" href="category.html">T-shirt</a> <a className="item" title="Sweatpants" href="category.html">Sweatpants</a> <a className="item" title="Sneaker" href="category.html">Sneaker</a> <a className="item" title="Toys" href="category.html">Toys</a> <a className="item" title="Rose" href="category.html">Rose</a> </div>
                {/* <!-- /.tag-list -->  */}
            </div>
            {/* <!-- /.sidebar-widget-body -->  */}
            </div>
            {/* <!-- /.sidebar-widget -->  */}
            {/* <!-- ============================================== PRODUCT TAGS : END ============================================== -->  */}
            {/* <!-- ============================================== SPECIAL DEALS ============================================== --> */}
            <div className="sidebar-widget outer-bottom-small">
            <h3 className="section-title">Special Deals</h3>
            <div className="sidebar-widget-body outer-top-xs">
                <div className="owl-carousel sidebar-carousel special-offer custom-carousel owl-theme outer-top-xs">
                <div className="item">
                    <div className="products special-product">
                    <div className="product">
                        <div className="product-micro">
                        <div className="row product-micro-row">
                            <div className="col col-xs-5">
                            <div className="product-image">
                                <div className="image"> <a href="!#"> <img src="assets/images/products/p8.jpg"  alt=""/> </a> </div>
                                {/* <!-- /.image -->  */}
                                
                            </div>
                            {/* <!-- /.product-image -->  */}
                            </div>
                            {/* <!-- /.col --> */}
                            <div className="col col-xs-7">
                            <div className="product-info">
                                <h3 className="name"><a href="!#">Floral Print Shirt</a></h3>
                                <div className="rating rateit-small"></div>
                                <div className="product-price"> <span className="price"> $450.99 </span> </div>
                                {/* <!-- /.product-price -->  */}
                                
                            </div>
                            </div>
                            {/* <!-- /.col -->  */}
                        </div>
                        {/* <!-- /.product-micro-row -->  */}
                        </div>
                        {/* <!-- /.product-micro -->  */}
                        
                    </div>
                    <div className="product">
                        <div className="product-micro">
                        <div className="row product-micro-row">
                            <div className="col col-xs-5">
                            <div className="product-image">
                                <div className="image"> <a href="!#"> <img src="assets/images/products/p5.jpg"  alt=""/> </a> </div>
                                {/* <!-- /.image -->  */}
                                
                            </div>
                            {/* <!-- /.product-image -->  */}
                            </div>
                            {/* <!-- /.col --> */}
                            <div className="col col-xs-7">
                            <div className="product-info">
                                <h3 className="name"><a href="!#">Floral Print Shirt</a></h3>
                                <div className="rating rateit-small"></div>
                                <div className="product-price"> <span className="price"> $450.99 </span> </div>
                                {/* <!-- /.product-price -->  */}
                                
                            </div>
                            </div>
                            {/* <!-- /.col -->  */}
                        </div>
                        {/* <!-- /.product-micro-row -->  */}
                        </div>
                        {/* <!-- /.product-micro -->  */}
                        
                    </div>
                    <div className="product">
                        <div className="product-micro">
                        <div className="row product-micro-row">
                            <div className="col col-xs-5">
                            <div className="product-image">
                                <div className="image"> <a href="!#"> <img src="assets/images/products/p6.jpg"  alt="abc"/> </a> </div>
                                {/* <!-- /.image -->  */}
                                
                            </div>
                            {/* <!-- /.product-image -->  */}
                            </div>
                            {/* <!-- /.col --> */}
                            <div className="col col-xs-7">
                            <div className="product-info">
                                <h3 className="name"><a href="!#">Floral Print Shirt</a></h3>
                                <div className="rating rateit-small"></div>
                                <div className="product-price"> <span className="price"> $450.99 </span> </div>
                                {/* <!-- /.product-price -->  */}
                                
                            </div>
                            </div>
                            {/* <!-- /.col -->  */}
                        </div>
                        {/* <!-- /.product-micro-row -->  */}
                        </div>
                        {/* <!-- /.product-micro -->  */}
                        
                    </div>
                    </div>
                </div>
                <div className="item">
                    <div className="products special-product">
                    <div className="product">
                        <div className="product-micro">
                        <div className="row product-micro-row">
                            <div className="col col-xs-5">
                            <div className="product-image">
                                <div className="image"> <a href="!#"> <img src="assets/images/products/p8.jpg" alt=""/> </a> </div>
                                {/* <!-- /.image -->  */}
                                
                            </div>
                            {/* <!-- /.product-image -->  */}
                            </div>
                            {/* <!-- /.col --> */}
                            <div className="col col-xs-7">
                            <div className="product-info">
                                <h3 className="name"><a href="!#">Floral Print Shirt</a></h3>
                                <div className="rating rateit-small"></div>
                                <div className="product-price"> <span className="price"> $450.99 </span> </div>
                                {/* <!-- /.product-price -->  */}
                                
                            </div>
                            </div>
                            {/* <!-- /.col -->  */}
                        </div>
                        {/* <!-- /.product-micro-row -->  */}
                        </div>
                        {/* <!-- /.product-micro -->  */}
                        
                    </div>
                    <div className="product">
                        <div className="product-micro">
                        <div className="row product-micro-row">
                            <div className="col col-xs-5">
                            <div className="product-image">
                                <div className="image"> <a href="!#"> <img src="assets/images/products/p7.jpg" alt=""/> </a> </div>
                                {/* <!-- /.image -->  */}
                                
                            </div>
                            {/* <!-- /.product-image -->  */}
                            </div>
                            {/* <!-- /.col --> */}
                            <div className="col col-xs-7">
                            <div className="product-info">
                                <h3 className="name"><a href="!#">Floral Print Shirt</a></h3>
                                <div className="rating rateit-small"></div>
                                <div className="product-price"> <span className="price"> $450.99 </span> </div>
                                {/* <!-- /.product-price -->  */}
                                
                            </div>
                            </div>
                            {/* <!-- /.col -->  */}
                        </div>
                        {/* <!-- /.product-micro-row -->  */}
                        </div>
                        {/* <!-- /.product-micro -->  */}
                        
                    </div>
                    <div className="product">
                        <div className="product-micro">
                        <div className="row product-micro-row">
                            <div className="col col-xs-5">
                            <div className="product-image">
                                <div className="image"> <a href="!#"> <img src="assets/images/products/p6.jpg" alt=""/> </a> </div>
                                {/* <!-- /.image -->  */}
                                
                            </div>
                            {/* <!-- /.product-image -->  */}
                            </div>
                            {/* <!-- /.col --> */}
                            <div className="col col-xs-7">
                            <div className="product-info">
                                <h3 className="name"><a href="!#">Floral Print Shirt</a></h3>
                                <div className="rating rateit-small"></div>
                                <div className="product-price"> <span className="price"> $450.99 </span> </div>
                                {/* <!-- /.product-price -->  */}
                            </div>
                            </div>
                            {/* <!-- /.col -->  */}
                        </div>
                        {/* <!-- /.product-micro-row -->  */}
                        </div>
                        {/* <!-- /.product-micro -->  */}
                        
                    </div>
                    </div>
                </div>
                <div className="item">
                    <div className="products special-product">
                    <div className="product">
                        <div className="product-micro">
                        <div className="row product-micro-row">
                            <div className="col col-xs-5">
                            <div className="product-image">
                                <div className="image"> <a href="!#"> <img src="assets/images/products/p5.jpg" alt="images"/>
                                <div className="zoom-overlay"></div>
                                </a> </div>
                                {/* <!-- /.image -->  */}
                                
                            </div>
                            {/* <!-- /.product-image -->  */}
                            </div>
                            {/* <!-- /.col --> */}
                            <div className="col col-xs-7">
                            <div className="product-info">
                                <h3 className="name"><a href="!#">Floral Print Shirt</a></h3>
                                <div className="rating rateit-small"></div>
                                <div className="product-price"> <span className="price"> $450.99 </span> </div>
                                {/* <!-- /.product-price -->  */}
                                
                            </div>
                            </div>
                            {/* <!-- /.col -->  */}
                        </div>
                        {/* <!-- /.product-micro-row -->  */}
                        </div>
                        {/* <!-- /.product-micro -->  */}
                        
                    </div>
                    <div className="product">
                        <div className="product-micro">
                        <div className="row product-micro-row">
                            <div className="col col-xs-5">
                            <div className="product-image">
                                <div className="image"> <a href="!#"> <img src="assets/images/products/p4.jpg"  alt=""/>
                                <div className="zoom-overlay"></div>
                                </a> </div>
                                {/* <!-- /.image -->  */}
                                
                            </div>
                            {/* <!-- /.product-image -->  */}
                            </div>
                            {/* <!-- /.col --> */}
                            <div className="col col-xs-7">
                            <div className="product-info">
                                <h3 className="name"><a href="!#">Floral Print Shirt</a></h3>
                                <div className="rating rateit-small"></div>
                                <div className="product-price"> <span className="price"> $450.99 </span> </div>
                                {/* <!-- /.product-price -->  */}
                                
                            </div>
                            </div>
                            {/* <!-- /.col -->  */}
                        </div>
                        {/* <!-- /.product-micro-row -->  */}
                        </div>
                        {/* <!-- /.product-micro -->  */}
                        
                    </div>
                    <div className="product">
                        <div className="product-micro">
                        <div className="row product-micro-row">
                            <div className="col col-xs-5">
                            <div className="product-image">
                                <div className="image"> <a href="!#"> <img src="assets/images/products/p13.jpg" alt="123"/> </a> </div>
                                {/* <!-- /.image -->  */}
                                
                            </div>
                            {/* <!-- /.product-image -->  */}
                            </div>
                            {/* <!-- /.col --> */}
                            <div className="col col-xs-7">
                            <div className="product-info">
                                <h3 className="name"><a href="!#">Floral Print Shirt</a></h3>
                                <div className="rating rateit-small"></div>
                                <div className="product-price"> <span className="price"> $450.99 </span> </div>
                                {/* <!-- /.product-price -->  */}
                                
                            </div>
                            </div>
                            {/* <!-- /.col -->  */}
                        </div>
                        {/* <!-- /.product-micro-row -->  */}
                        </div>
                        {/* <!-- /.product-micro -->  */}
                        
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* <!-- /.sidebar-widget-body -->  */}
            </div>
            {/* <!-- /.sidebar-widget -->  */}
            {/* <!-- ============================================== SPECIAL DEALS : END ============================================== -->  */}
            {/* <!-- ============================================== NEWSLETTER ============================================== --> */}
            <div className="sidebar-widget newsletter outer-bottom-small">
            <h3 className="section-title">Newsletters</h3>
            <div className="sidebar-widget-body outer-top-xs">
                <p>Sign Up for Our Newsletter!</p>
                <form>
                <div className="form-group">
                    <label className="sr-only" htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Subscribe to our newsletter"/>
                </div>
                <button className="btn btn-primary">Subscribe</button>
                </form>
            </div>
            {/* <!-- /.sidebar-widget-body -->  */}
            </div>
            {/* <!-- /.sidebar-widget -->  */}
            {/* <!-- ============================================== NEWSLETTER: END ============================================== -->  */}
            {/* <!-- ============================================== Testimonials============================================== --> */}
            <div className="sidebar-widget outer-top-vs ">
            <div id="advertisement" className="advertisement">
                <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                //   deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >
                    <div className="item">
                    <div className="avatar"><img src="assets/images/testimonials/member1.png" alt="123"/></div>
                    <div className="testimonials"><em>"</em> Vtae sodales aliq uam morbi non sem lacus port mollis. Nunc condime tum metus eud molest sed consectetuer. Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat.<em>"</em></div>
                    <div className="clients_author">John Doe <span>Abc Company</span> </div>
                    {/* <!-- /.container-fluid -->  */}
                    </div>
                    {/* <!-- /.item --> */}
                    
                    <div className="item">
                    <div className="avatar"><img src="assets/images/testimonials/member3.png" alt="123"/></div>
                    <div className="testimonials"><em>"</em>Vtae sodales aliq uam morbi non sem lacus port mollis. Nunc condime tum metus eud molest sed consectetuer. Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat.<em>"</em></div>
                    <div className="clients_author">Stephen Doe <span>Xperia Designs</span> </div>
                    </div>
                    {/* <!-- /.item --> */}
                    
                    <div className="item">
                    <div className="avatar"><img src="assets/images/testimonials/member2.png" alt="123"/></div>
                    <div className="testimonials"><em>"</em>Vtae sodales aliq uam morbi non sem lacus port mollis. Nunc condime tum metus eud molest sed consectetuer. Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat.<em>"</em></div>
                    <div className="clients_author">Saraha Smith <span>Datsun &amp; Co</span> </div>
                    {/* <!-- /.container-fluid -->  */}
                    </div>
                    {/* <!-- /.item -->  */}
                </Carousel>
                
                
            </div>
            {/* <!-- /.owl-carousel -->  */}
            </div>
            {/* <!-- ============================================== Testimonials: END ============================================== --> */}
        </div>
    );
}

export default SideBar;