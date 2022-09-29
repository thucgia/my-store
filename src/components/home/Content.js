import React, { useEffect, useState } from 'react';
import ProductItem from '../products/ProductItem';
import { product_list } from '../../resources/productlist';
import { blog_list } from '../../resources/bloglist';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BlogItem from '../blogs/BlogItem';
import CarouselButtonGroup from '../carousel-btn-group/CarouselButtonGroup'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Content(props) {
    const [products, setProducts] = useState([])
    const [blogs, setBlogs] = useState(blog_list)
    const responsive_products = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
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

    const getProducts = () => {
        let url = "/products"
        axios.get(url)
        .then(res => {
            toast.success("API loaded successfully", { position: toast.POSITION.TOP_RIGHT })
            setProducts(res.data)
        })
        .catch(err => { toast.error("API loaded failed", { position: toast.POSITION.TOP_RIGHT }) })
    }

    useEffect(() => {
        getProducts()
    },[])

    return (
        <div className="col-xs-12 col-sm-12 col-md-9 homebanner-holder">
            <ToastContainer />
            <div id="product-tabs-slider" className="scroll-tabs">
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
                        <div className="product-slider">
                            <div className="home-owl-carousel custom-carousel owl-theme" style={{ position: "relative" }}>
                            <Carousel
                                arrows={false}
                                swipeable={false}
                                draggable={false}
                                showDots={false}
                                responsive={responsive_products}
                                ssr={true} // means to render carousel on server-side.
                                autoPlaySpeed={1000}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                itemClass="carousel-item-padding-40-px"
                                renderButtonGroupOutside={true}
                                customButtonGroup={<CarouselButtonGroup/>}
                            >
                                {products && products.map((item, index) => <ProductItem key={index} {...item} width="184px" setCart={props.setCart} />)}
                            </Carousel>
                            </div>
                        </div>
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
                            <div className="image"> <img className="img-responsive" src="assets/images/banners/home-banner1.jpg" alt="" /></div>
                        </div>
                        {/* <!-- /.wide-banner -->  */}
                    </div>

                    <div className="col-md-4 col-sm-4">
                        <div className="wide-banner cnt-strip">
                            <div className="image"> <img className="img-responsive" src="assets/images/banners/home-banner3.jpg" alt="" /></div>
                        </div>
                        {/* <!-- /.wide-banner -->  */}
                    </div>

                    {/* <!-- /.col --> */}
                    <div className="col-md-4 col-sm-4">
                        <div className="wide-banner cnt-strip">
                            <div className="image"> <img className="img-responsive" src="assets/images/banners/home-banner2.jpg" alt="" /></div>
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
                        <div className="homepage-owl-carousel custom-carousel owl-theme outer-top-xs" style={{ position: "relative" }}>
                            <Carousel
                                arrows={false}
                                swipeable={false}
                                draggable={false}
                                showDots={false}
                                responsive={responsive_products}
                                ssr={true} // means to render carousel on server-side.
                                autoPlaySpeed={1000}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                itemClass="carousel-item-padding-40-px"
                                renderButtonGroupOutside={true}
                                customButtonGroup={<CarouselButtonGroup/>}
                            >
                                {products && products.map((item, index) => <ProductItem key={index} {...item} width="172px" />)}
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
                            <div className="image"> <img className="img-responsive" src="assets/images/banners/home-banner.jpg" alt="" /></div>
                            <div className="strip strip-text">
                                <div className="strip-inner">
                                    <h2 className="text-right">Amazing Sunglasses<br />
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
                            <div className="image"> <img className="img-responsive" src="assets/images/banners/home-banner4.jpg" alt="" /></div>
                            {/* <!-- /.new-label -->  */}
                        </div>
                        {/* <!-- /.wide-banner -->  */}
                    </div>

                </div>
                {/* <!-- /.row -->  */}
            </div>
            {/* <!-- /.wide-banners -->  */}
            {/* <!-- ============================================== WIDE PRODUCTS : END ============================================== -->  */}
            {/* <!-- ============================================== BLOG SLIDER ============================================== --> */}
            <section className="section latest-blog outer-bottom-vs">
                <h3 className="section-title">Latest form Blog</h3>
                <div className="blog-slider-container outer-top-xs">
                    <div className="blog-slider custom-carousel" style={{ position: "relative" }}>
                    <Carousel
                        arrows={false}
                        swipeable={false}
                        draggable={false}
                        showDots={false}
                        responsive={responsive_blogs}
                        ssr={true} // means to render carousel on server-side.
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        itemClass="carousel-item-padding-40-px"
                        renderButtonGroupOutside={true}
                        customButtonGroup={<CarouselButtonGroup/>}
                    >
                        {blogs && blogs.map((item, index) => <BlogItem key={index} {...item} width="451px" />)}
                    </Carousel>
                    </div>
                    {/* <!-- /.owl-carousel -->  */}
                </div>
                {/* <!-- /.blog-slider-container -->  */}
            </section>
            {/* <!-- /.section -->  */}
            {/* <!-- ============================================== BLOG SLIDER : END ============================================== -->  */}
            {/* <!-- /.home-owl-carousel -->  */}
            {/* <!-- /.section -->  */}
            {/* <!-- ============================================== FEATURED PRODUCTS : END ============================================== -->  */}

        </div>
    );
}

export default Content;