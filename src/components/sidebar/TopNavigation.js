import React, { useState } from 'react';

function TopNavigation(props) {
    const [ megaMenu, setMegaMenu ] = useState("")
    const showMegaMenu = (e) => {
        e.preventDefault()
        let mega_menu_id = e.target.id
        if (megaMenu !== "" && megaMenu === mega_menu_id) setMegaMenu("")
        else {
            setMegaMenu(mega_menu_id)
        }
    }
    return (
        <div className="side-menu animate-dropdown outer-bottom-xs">
            <div className="head"><i className="icon fa fa-align-justify fa-fw"></i> Categories</div>
            <nav className="yamm megamenu-horizontal">
                <ul className="nav">
                    <li className={"dropdown menu-item" + (megaMenu === "clothing" ? " open" : "")}> <a href="!#" className="dropdown-toggle" data-toggle="dropdown" id="clothing" onClick={showMegaMenu}><i className="icon fa fa-shopping-bag" aria-hidden="true"></i>Clothing</a>
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
    );
}

export default TopNavigation;