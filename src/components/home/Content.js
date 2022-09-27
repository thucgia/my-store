import React, { useEffect, useState } from 'react';
import ProductItem from '../products/ProductItem';
import { product_list } from '../../resources/productlist';
import { blog_list } from '../../resources/bloglist';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BlogItem from '../blogs/BlogItem';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Content(props) {
    const [ products, setProducts ] = useState(product_list)
    const [ blogs, setBlogs ] = useState(blog_list)
    const responsive_products = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const responsive_blogs = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    useEffect(() => {
      let url = "/products"
      axios.get(url)
      .then(res => {
        toast.success("API loaded successfully", { position: toast.POSITION.TOP_RIGHT})
        setProducts(res.data)
      })
      .catch(err => { toast.error("API loaded failed", { position: toast.POSITION.TOP_RIGHT}) })
    }, [])

    return (
        <div className="col-xs-12 col-sm-12 col-md-9 homebanner-holder"> 
        {/* <!-- ========================================== SECTION – HERO ========================================= --> */}
        <ToastContainer />
        <div id="hero">
          <div id="owl-main" className="owl-carousel owl-inner-nav owl-ui-sm">
            <div className="item" style={{ backgroundImage: "url(assets/images/sliders/01.jpg)" }}>
              <div className="container-fluid">
                <div className="caption bg-color vertical-center text-left">
                  <div className="slider-header fadeInDown-1">Top Brands</div>
                  <div className="big-text fadeInDown-1"> New Collections </div>
                  <div className="excerpt fadeInDown-2 hidden-xs"> <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span> </div>
                  <div className="button-holder fadeInDown-3"> <a href="index6c11.html?page=single-product" className="btn-lg btn btn-uppercase btn-primary shop-now-button">Shop Now</a> </div>
                </div>
                {/* <!-- /.caption -->  */}
              </div>
              {/* <!-- /.container-fluid -->  */}
            </div>
            {/* <!-- /.item --> */}
            
            <div className="item" style={{ backgroundImage: "url(assets/images/sliders/02.jpg)" }}>
              <div className="container-fluid">
                <div className="caption bg-color vertical-center text-left">
                  <div className="slider-header fadeInDown-1">Spring 2018</div>
                  <div className="big-text fadeInDown-1"> Women Fashion </div>
                  <div className="excerpt fadeInDown-2 hidden-xs"> <span>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</span> </div>
                  <div className="button-holder fadeInDown-3"> <a href="index6c11.html?page=single-product" className="btn-lg btn btn-uppercase btn-primary shop-now-button">Shop Now</a> </div>
                </div>
                {/* <!-- /.caption -->  */}
              </div>
              {/* <!-- /.container-fluid -->  */}
            </div>
            {/* <!-- /.item -->  */}
            
          </div>
          {/* <!-- /.owl-carousel -->  */}
        </div>
        
        {/* <!-- ========================================= SECTION – HERO : END ========================================= -->  */}
        

        {/* <!-- ============================================== SCROLL TABS ============================================== --> */}
        <div id="product-tabs-slider" className="scroll-tabs outer-top-vs">
          <div className="more-info-tab clearfix ">
            <h3 className="new-product-title pull-left">New Products</h3>
            <ul className="nav nav-tabs nav-tab-line pull-right" id="new-products-1">
              <li className="active"><a data-transition-type="backSlide" href="#all" data-toggle="tab">All</a></li>
              <li><a data-transition-type="backSlide" href="#smartphone" data-toggle="tab">Clothing</a></li>
              <li><a data-transition-type="backSlide" href="#laptop" data-toggle="tab">Electronics</a></li>
              <li><a data-transition-type="backSlide" href="#apple" data-toggle="tab">Shoes</a></li>
            </ul>
            {/* <!-- /.nav-tabs -->  */}
          </div>
          <div className="tab-content outer-top-xs">
            <div className="tab-pane in active" id="all">
                <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive_products}
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
                    { products && products.map((item, index) => <ProductItem key={index} {...item} width="184px"/>) }
                </Carousel>
                {/* <!-- /.product-slider -->  */}
            </div>
            {/* <!-- /.tab-pane --> */}
            
          </div>
          {/* <!-- /.tab-content -->  */}
        </div>
        {/* <!-- /.scroll-tabs -->  */}
        {/* <!-- ============================================== SCROLL TABS : END ============================================== -->  */}
        {/* <!-- ============================================== WIDE PRODUCTS ============================================== --> */}
        <div className="wide-banners outer-bottom-xs">
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <div className="wide-banner cnt-strip">
                <div className="image"> <img className="img-responsive" src="assets/images/banners/home-banner1.jpg" alt=""/></div>
              </div>
              {/* <!-- /.wide-banner -->  */}
            </div>
            
            <div className="col-md-4 col-sm-4">
              <div className="wide-banner cnt-strip">
                <div className="image"> <img className="img-responsive" src="assets/images/banners/home-banner3.jpg" alt=""/></div>
              </div>
              {/* <!-- /.wide-banner -->  */}
            </div>
            
            {/* <!-- /.col --> */}
            <div className="col-md-4 col-sm-4">
              <div className="wide-banner cnt-strip">
                <div className="image"> <img className="img-responsive" src="assets/images/banners/home-banner2.jpg" alt=""/></div>
              </div>
              {/* <!-- /.wide-banner -->  */}
            </div>
            {/* <!-- /.col -->  */}
          </div>
          {/* <!-- /.row -->  */}
        </div>
        {/* <!-- /.wide-banners -->  */}
        
        {/* <!-- ============================================== WIDE PRODUCTS : END ============================================== -->  */}
        {/* <!-- ============================================== FEATURED PRODUCTS ============================================== --> */}
        <section className="section featured-product">
        <div className="row">
        <div className="col-lg-3">
          <h3 className="section-title">Electronics & Digital</h3>
          <ul className="sub-cat">
          <li><a href="!#">Computers</a></li>
          <li><a href="!#">Air Condtion</a></li>
          <li><a href="!#">Mobile Phones</a></li>
          <li><a href="!#">Camera</a></li>
          <li><a href="!#">Television</a></li>
          <li><a href="!#">Sound & Speakers</a></li>
          <li><a href="!#">Games & Audio Music</a></li>
          <li><a href="!#">Digital Watches</a></li>
          <li><a href="!#">Washing Machines</a></li>
         <li><a href="!#">Office Electronics</a></li>
          </ul>
          </div>
          <div className="col-lg-9">
          <div className="outer-top-xs">
            <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive_products}
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
                { products && products.map((item, index) => <ProductItem key={index} {...item} width="172px"/>) }
            </Carousel>
          </div>
          </div>
          </div>
          {/* <!-- /.home-owl-carousel -->  */}
        </section>
        {/* <!-- /.section -->  */}
        {/* <!-- ============================================== FEATURED PRODUCTS : END ============================================== -->  */}
        {/* <!-- ============================================== WIDE PRODUCTS ============================================== --> */}
        <div className="wide-banners outer-bottom-xs">
          <div className="row">
            <div className="col-md-8">
              <div className="wide-banner1 cnt-strip">
                <div className="image"> <img className="img-responsive" src="assets/images/banners/home-banner.jpg" alt=""/></div>
                <div className="strip strip-text">
                  <div className="strip-inner">
                    <h2 className="text-right">Amazing Sunglasses<br/>
                      <span className="shopping-needs">Get 40% off on selected items</span></h2>
                  </div>
                </div>
                <div className="new-label">
                  <div className="text">NEW</div>
                </div>
                {/* <!-- /.new-label -->  */}
              </div>
              {/* <!-- /.wide-banner -->  */}
            </div>
            {/* <!-- /.col -->  */}
            <div className="col-md-4">
              <div className="wide-banner cnt-strip">
                <div className="image"> <img className="img-responsive" src="assets/images/banners/home-banner4.jpg" alt=""/></div>
                
                
                {/* <!-- /.new-label -->  */}
              </div>
              {/* <!-- /.wide-banner -->  */}
            </div>
            
          </div>
          {/* <!-- /.row -->  */}
        </div>
        {/* <!-- /.wide-banners -->  */}
        {/* <!-- ============================================== WIDE PRODUCTS : END ============================================== -->  */}
        
        
        
        {/* <!-- /.sidebar-widget -->  */}
        {/* <!-- ============================================== BEST SELLER : END ============================================== -->  */}
        
        {/* <!-- ============================================== BLOG SLIDER ============================================== --> */}
        <section className="section latest-blog outer-bottom-vs">
          <h3 className="section-title">Latest form Blog</h3>
          <div className="blog-slider-container outer-top-xs">
            {/* <div className="owl-carousel blog-slider custom-carousel"> */}
            <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive_blogs}
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
                { blogs && blogs.map((item, index) => <BlogItem key={index} {...item} width="281px"/>) }
            </Carousel>
            {/* </div> */}
            {/* <!-- /.owl-carousel -->  */}
          </div>
          {/* <!-- /.blog-slider-container -->  */}
        </section>
        {/* <!-- /.section -->  */}
        {/* <!-- ============================================== BLOG SLIDER : END ============================================== -->  */}
        
        {/* <!-- ============================================== FEATURED PRODUCTS ============================================== --> */}
        <section className="section new-arriavls">
          <h3 className="section-title">Featured Products</h3>
          <div className="owl-carousel home-owl-carousel custom-carousel owl-theme outer-top-xs">
            <div className="item item-carousel">
              <div className="products">
                <div className="product">
                  <div className="product-image">
                    <div className="image"> 
                          <a href="detail.html">
                             <img src="assets/images/products/p10.jpg" alt=""/>
                              <img src="assets/images/products/p10_hover.jpg" alt="" className="hover-image"/>
                          </a>
                          
                          </div>
                    {/* <!-- /.image --> */}
                    
                    <div className="tag new"><span>new</span></div>
                  </div>
                  {/* <!-- /.product-image --> */}
                  
                  <div className="product-info text-left">
                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                    <div className="rating rateit-small"></div>
                    <div className="description"></div>
                    <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                    {/* <!-- /.product-price -->  */}
                    
                  </div>
                  {/* <!-- /.product-info --> */}
                  <div className="cart clearfix animate-effect">
                    <div className="action">
                      <ul className="list-unstyled">
                        <li className="add-cart-button btn-group">
                          <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                          <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                        </li>
                        <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                        <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                      </ul>
                    </div>
                    {/* <!-- /.action -->  */}
                  </div>
                  {/* <!-- /.cart -->  */}
                </div>
                {/* <!-- /.product -->  */}
                
              </div>
              {/* <!-- /.products -->  */}
            </div>
            {/* <!-- /.item --> */}
            
            <div className="item item-carousel">
              <div className="products">
                <div className="product">
                  <div className="product-image">
                    <div className="image"> 
                          <a href="detail.html">
                             <img src="assets/images/products/p2.jpg" alt=""/>
                              <img src="assets/images/products/p2_hover.jpg" alt="" className="hover-image"/>
                          </a>
                          
                          </div>
                    {/* <!-- /.image --> */}
                    
                    <div className="tag new"><span>new</span></div>
                  </div>
                  {/* <!-- /.product-image --> */}
                  
                  <div className="product-info text-left">
                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                    <div className="rating rateit-small"></div>
                    <div className="description"></div>
                    <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                    {/* <!-- /.product-price -->  */}
                    
                  </div>
                  {/* <!-- /.product-info --> */}
                  <div className="cart clearfix animate-effect">
                    <div className="action">
                      <ul className="list-unstyled">
                        <li className="add-cart-button btn-group">
                          <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                          <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                        </li>
                        <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                        <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                      </ul>
                    </div>
                    {/* <!-- /.action -->  */}
                  </div>
                  {/* <!-- /.cart -->  */}
                </div>
                {/* <!-- /.product -->  */}
                
              </div>
              {/* <!-- /.products -->  */}
            </div>
            {/* <!-- /.item --> */}
            
            <div className="item item-carousel">
              <div className="products">
                <div className="product">
                  <div className="product-image">
                    <div className="image"> 
                          <a href="detail.html">
                             <img src="assets/images/products/p3.jpg" alt=""/>
                              <img src="assets/images/products/p3_hover.jpg" alt="" className="hover-image"/>
                          </a>
                          
                          </div>
                    {/* <!-- /.image --> */}
                    
                    <div className="tag hot"><span>hot</span></div>
                  </div>
                  {/* <!-- /.product-image --> */}
                  
                  <div className="product-info text-left">
                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                    <div className="rating rateit-small"></div>
                    <div className="description"></div>
                    <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                    {/* <!-- /.product-price -->  */}
                    
                  </div>
                  {/* <!-- /.product-info --> */}
                  <div className="cart clearfix animate-effect">
                    <div className="action">
                      <ul className="list-unstyled">
                        <li className="add-cart-button btn-group">
                          <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                          <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                        </li>
                        <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                        <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                      </ul>
                    </div>
                    {/* <!-- /.action -->  */}
                  </div>
                  {/* <!-- /.cart -->  */}
                </div>
                {/* <!-- /.product -->  */}
                
              </div>
              {/* <!-- /.products -->  */}
            </div>
            {/* <!-- /.item --> */}
            
            <div className="item item-carousel">
              <div className="products">
                <div className="product">
                  <div className="product-image">
                    <div className="image"> 
                          <a href="detail.html">
                             <img src="assets/images/products/p1.jpg" alt=""/>
                              <img src="assets/images/products/p1_hover.jpg" alt="" className="hover-image"/>
                          </a>
                          
                          </div>
                    {/* <!-- /.image --> */}
                    
                    <div className="tag hot"><span>hot</span></div>
                  </div>
                  {/* <!-- /.product-image --> */}
                  
                  <div className="product-info text-left">
                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                    <div className="rating rateit-small"></div>
                    <div className="description"></div>
                    <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                    {/* <!-- /.product-price -->  */}
                    
                  </div>
                  {/* <!-- /.product-info --> */}
                  <div className="cart clearfix animate-effect">
                    <div className="action">
                      <ul className="list-unstyled">
                        <li className="add-cart-button btn-group">
                          <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                          <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                        </li>
                        <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                        <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                      </ul>
                    </div>
                    {/* <!-- /.action -->  */}
                  </div>
                  {/* <!-- /.cart -->  */}
                </div>
                {/* <!-- /.product -->  */}
                
              </div>
              {/* <!-- /.products -->  */}
            </div>
            {/* <!-- /.item --> */}
            
            <div className="item item-carousel">
              <div className="products">
                <div className="product">
                  <div className="product-image">
                    <div className="image"> 
                          <a href="detail.html">
                             <img src="assets/images/products/p7.jpg" alt=""/>
                              <img src="assets/images/products/p7_hover.jpg" alt="" className="hover-image"/>
                          </a>
                          
                          </div>
                    {/* <!-- /.image --> */}
                    
                    <div className="tag sale"><span>sale</span></div>
                  </div>
                  {/* <!-- /.product-image --> */}
                  
                  <div className="product-info text-left">
                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                    <div className="rating rateit-small"></div>
                    <div className="description"></div>
                    <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                    {/* <!-- /.product-price -->  */}
                    
                  </div>
                  {/* <!-- /.product-info --> */}
                  <div className="cart clearfix animate-effect">
                    <div className="action">
                      <ul className="list-unstyled">
                        <li className="add-cart-button btn-group">
                          <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                          <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                        </li>
                        <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                        <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                      </ul>
                    </div>
                    {/* <!-- /.action -->  */}
                  </div>
                  {/* <!-- /.cart -->  */}
                </div>
                {/* <!-- /.product -->  */}
                
              </div>
              {/* <!-- /.products -->  */}
            </div>
            {/* <!-- /.item --> */}
            
            <div className="item item-carousel">
              <div className="products">
                <div className="product">
                  <div className="product-image">
                    <div className="image"> 
                          <a href="detail.html">
                             <img src="assets/images/products/p9.jpg" alt=""/>
                              <img src="assets/images/products/p9_hover.jpg" alt="" className="hover-image"/>
                          </a>
                          
                          </div>
                    {/* <!-- /.image --> */}
                    
                    <div className="tag sale"><span>sale</span></div>
                  </div>
                  {/* <!-- /.product-image --> */}
                  
                  <div className="product-info text-left">
                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                    <div className="rating rateit-small"></div>
                    <div className="description"></div>
                    <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                    {/* <!-- /.product-price -->  */}
                    
                  </div>
                  {/* <!-- /.product-info --> */}
                  <div className="cart clearfix animate-effect">
                    <div className="action">
                      <ul className="list-unstyled">
                        <li className="add-cart-button btn-group">
                          <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                          <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                        </li>
                        <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                        <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true"></i> </a> </li>
                      </ul>
                    </div>
                    {/* <!-- /.action -->  */}
                  </div>
                  {/* <!-- /.cart -->  */}
                </div>
                {/* <!-- /.product -->  */}
                
              </div>
              {/* <!-- /.products -->  */}
            </div>
            {/* <!-- /.item -->  */}
          </div>
          {/* <!-- /.home-owl-carousel -->  */}
        </section>
        {/* <!-- /.section -->  */}
        {/* <!-- ============================================== FEATURED PRODUCTS : END ============================================== -->  */}
        
        </div>
    );
}

export default Content;