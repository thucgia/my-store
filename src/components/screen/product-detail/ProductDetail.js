import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAPI } from '../../../hooks/useAPI';
import productAPI from '../../../api/products'
import ProductItem from '../../utils/product/ProductItem';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselButtonGroup from '../../utils/carousel-btn-group/CarouselButtonGroup'

function ProductDetail(props) {
    const {productId} = useParams()
    const getProduct = useAPI(productAPI.getProduct)
    const getProductInCategory = useAPI(productAPI.getProductsInCategory)
    const [ navTab, setNavTab ] = useState("description")
    const [ product, setProduct ] = useState({})
    const [ productInCategory, setProductInCategory ] = useState([])

    const responsive_products = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        }
    };

    useEffect(() => {
        getProduct.request(productId)
        .then(res => {
            setProduct(res.result)
            getProductInCategory.request(res.result.category)
            .then(cat_res => {
                setProductInCategory(cat_res.result)
            })
        })
    }, [])
    return (
        <div>
            <div className="breadcrumb">
                <div className="container">
                    <div className="breadcrumb-inner">
                        <ul className="list-inline list-unstyled">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Clothing</a></li>
                            <li className='active'>Floral Print Buttoned</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="body-content outer-top-xs">
                <div className='container'>
                    <div className='row single-product'>
                        <div className='col-xs-12 col-sm-12 col-md-12'>
                            <div className="detail-block">
                                <div className="row">

                                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 gallery-holder">
                                        <div className="product-item-holder size-big single-product-gallery small-gallery">

                                            <div id="owl-single-product">
                                                <div className="single-product-gallery-item" id="slide1">
                                                    <a data-lightbox="image-1" data-title="Gallery" href="assets/images/products/p1.jpg">
                                                        <img className="img-responsive" alt="" src="assets/images/blank.gif" data-echo="assets/images/products/p1.jpg" />
                                                    </a>
                                                </div>

                                                <div className="single-product-gallery-item" id="slide2">
                                                    <a data-lightbox="image-1" data-title="Gallery" href="assets/images/products/p2.jpg">
                                                        <img className="img-responsive" alt="" src="assets/images/blank.gif" data-echo="assets/images/products/p2.jpg" />
                                                    </a>
                                                </div>

                                                <div className="single-product-gallery-item" id="slide3">
                                                    <a data-lightbox="image-1" data-title="Gallery" href="assets/images/products/p3.jpg">
                                                        <img className="img-responsive" alt="" src="assets/images/blank.gif" data-echo="assets/images/products/p3.jpg" />
                                                    </a>
                                                </div>

                                                <div className="single-product-gallery-item" id="slide4">
                                                    <a data-lightbox="image-1" data-title="Gallery" href="assets/images/products/p4.jpg">
                                                        <img className="img-responsive" alt="" src="assets/images/blank.gif" data-echo="assets/images/products/p4.jpg" />
                                                    </a>
                                                </div>

                                                <div className="single-product-gallery-item" id="slide5">
                                                    <a data-lightbox="image-1" data-title="Gallery" href="assets/images/products/p5.jpg">
                                                        <img className="img-responsive" alt="" src="assets/images/blank.gif" data-echo="assets/images/products/p5.jpg" />
                                                    </a>
                                                </div>

                                                <div className="single-product-gallery-item" id="slide6">
                                                    <a data-lightbox="image-1" data-title="Gallery" href="assets/images/products/p6.jpg">
                                                        <img className="img-responsive" alt="" src="assets/images/blank.gif" data-echo="assets/images/products/p6.jpg" />
                                                    </a>
                                                </div>

                                                <div className="single-product-gallery-item" id="slide7">
                                                    <a data-lightbox="image-1" data-title="Gallery" href="assets/images/products/p7.jpg">
                                                        <img className="img-responsive" alt="" src="assets/images/blank.gif" data-echo="assets/images/products/p7.jpg" />
                                                    </a>
                                                </div>

                                                <div className="single-product-gallery-item" id="slide8">
                                                    <a data-lightbox="image-1" data-title="Gallery" href="assets/images/products/p8.jpg">
                                                        <img className="img-responsive" alt="" src="assets/images/blank.gif" data-echo="assets/images/products/p8.jpg" />
                                                    </a>
                                                </div>

                                                <div className="single-product-gallery-item" id="slide9">
                                                    <a data-lightbox="image-1" data-title="Gallery" href="assets/images/products/p9.jpg">
                                                        <img className="img-responsive" alt="" src="assets/images/blank.gif" data-echo="assets/images/products/p9.jpg" />
                                                    </a>
                                                </div>

                                            </div>
                                            <div className="single-product-gallery-thumbs gallery-thumbs">

                                                <div id="owl-single-product-thumbnails">
                                                    <div className="item">
                                                        <a className="horizontal-thumb active" data-target="#owl-single-product" data-slide="1" href="#slide1">
                                                            <img className="img-responsive" alt="" src="assets/images/blank.gif" data-echo="assets/images/products/p1.jpg" />
                                                        </a>
                                                    </div>

                                                    <div className="item">
                                                        <a className="horizontal-thumb" data-target="#owl-single-product" data-slide="2" href="#slide2">
                                                            <img className="img-responsive" alt="" src="assets/images/blank.gif" data-echo="assets/images/products/p2.jpg" />
                                                        </a>
                                                    </div>
                                                    <div className="item">

                                                        <a className="horizontal-thumb" data-target="#owl-single-product" data-slide="3" href="#slide3">
                                                            <img className="img-responsive" alt="" src="assets/images/blank.gif" data-echo="assets/images/products/p3.jpg" />
                                                        </a>
                                                    </div>
                                                    <div className="item">

                                                        <a className="horizontal-thumb" data-target="#owl-single-product" data-slide="4" href="#slide4">
                                                            <img className="img-responsive" alt="" src="assets/images/blank.gif" data-echo="assets/images/products/p4.jpg" />
                                                        </a>
                                                    </div>
                                                    <div className="item">

                                                        <a className="horizontal-thumb" data-target="#owl-single-product" data-slide="5" href="#slide5">
                                                            <img className="img-responsive" alt="" src="assets/images/blank.gif" data-echo="assets/images/products/p5.jpg" />
                                                        </a>
                                                    </div>
                                                    <div className="item">

                                                        <a className="horizontal-thumb" data-target="#owl-single-product" data-slide="6" href="#slide6">
                                                            <img className="img-responsive" alt="" src="assets/images/blank.gif" data-echo="assets/images/products/p6.jpg" />
                                                        </a>
                                                    </div>
                                                    <div className="item">

                                                        <a className="horizontal-thumb" data-target="#owl-single-product" data-slide="7" href="#slide7">
                                                            <img className="img-responsive" alt="" src="assets/images/blank.gif" data-echo="assets/images/products/p7.jpg" />
                                                        </a>
                                                    </div>
                                                    <div className="item">

                                                        <a className="horizontal-thumb" data-target="#owl-single-product" data-slide="8" href="#slide8">
                                                            <img className="img-responsive" alt="" src="assets/images/blank.gif" data-echo="assets/images/products/p8.jpg" />
                                                        </a>
                                                    </div>
                                                    <div className="item">

                                                        <a className="horizontal-thumb" data-target="#owl-single-product" data-slide="9" href="#slide9">
                                                            <img className="img-responsive" alt="" src="assets/images/blank.gif" data-echo="assets/images/products/p9.jpg" />
                                                        </a>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    <div className='col-sm-12 col-md-8 col-lg-8 product-info-block'>
                                        <div className="product-info">
                                            <h1 className="name">{ product.title }</h1>

                                            <div className="rating-reviews m-t-20">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="pull-left">
                                                            <div className="rating rateit-small"></div>
                                                        </div>
                                                        <div className="pull-left">
                                                            <div className="reviews">
                                                                <a href="#" className="lnk">(13 Reviews)</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="stock-container info-container m-t-10">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="pull-left">
                                                            <div className="stock-box">
                                                                <span className="label">Availability :</span>
                                                            </div>
                                                        </div>
                                                        <div className="pull-left">
                                                            <div className="stock-box">
                                                                <span className="value">In Stock</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="description-container m-t-20">
                                                <p>{ product.description }</p>
                                            </div>

                                            <div className="price-container info-container m-t-30">
                                                <div className="row">
                                                    <div className="col-sm-6 col-xs-6">
                                                        <div className="price-box">
                                                            <span className="price">${ product.price }</span>
                                                            <span className="price-strike">${ product.price }</span>
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-6 col-xs-6">
                                                        <div className="favorite-button m-t-5">
                                                            <a className="btn btn-primary" data-toggle="tooltip" data-placement="right" title="Wishlist" href="#">
                                                                <i className="fa fa-heart"></i>
                                                            </a>
                                                            <a className="btn btn-primary" data-toggle="tooltip" data-placement="right" title="Add to Compare" href="#">
                                                                <i className="fa fa-signal"></i>
                                                            </a>
                                                            <a className="btn btn-primary" data-toggle="tooltip" data-placement="right" title="E-mail" href="#">
                                                                <i className="fa fa-envelope"></i>
                                                            </a>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="quantity-container info-container">
                                                <div className="row">

                                                    <div className="qty">
                                                        <span className="label">Qty :</span>
                                                    </div>

                                                    <div className="qty-count">
                                                        <div className="cart-quantity">
                                                            <div className="quant-input">
                                                                <div className="arrows">
                                                                    <div className="arrow plus gradient"><span className="ir"><i className="icon fa fa-sort-asc"></i></span></div>
                                                                    <div className="arrow minus gradient"><span className="ir"><i className="icon fa fa-sort-desc"></i></span></div>
                                                                </div>
                                                                <input type="text" defaultValue="1" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="add-btn">
                                                        <a href="#" className="btn btn-primary"><i className="fa fa-shopping-cart inner-right-vs"></i> ADD TO CART</a>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="product-tabs inner-bottom-xs">
                                <div className="row">
                                    <div className="col-sm-12 col-md-3 col-lg-3">
                                        <ul id="product-tabs" className="nav nav-tabs nav-tab-cell">
                                            <li className={(navTab === "description") ? "active" : ""}><a id="description" onClick={(e) => { setNavTab(e.target.id) }}>DESCRIPTION</a></li>
                                            <li className={(navTab === "review") ? "active" : ""}><a id="review" onClick={(e) => { setNavTab(e.target.id)}} >REVIEW</a></li>
                                            <li className={(navTab === "tags") ? "active" : ""}><a id="tags" onClick={(e) => { setNavTab(e.target.id)}} >TAGS</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-12 col-md-9 col-lg-9">

                                        <div className="tab-content">

                                            {/* description */}
                                            <div id="" className={"tab-pane" + ((navTab === "description") ? " in active" : "")}>
                                                <div className="product-tab">
                                                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br /> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                </div>
                                            </div>

                                            {/* review */}
                                            <div className={"tab-pane" + ((navTab === "review") ? " in active" : "")}>
                                                <div className="product-tab">

                                                    <div className="product-reviews">
                                                        <h4 className="title">Customer Reviews</h4>

                                                        <div className="reviews">
                                                            <div className="review">
                                                                <div className="review-title"><span className="summary">We love this product</span><span className="date"><i className="fa fa-calendar"></i><span>1 days ago</span></span></div>
                                                                <div className="text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam suscipit."</div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div className="product-add-review">
                                                        <h4 className="title">Write your own review</h4>
                                                        <div className="review-table">
                                                            <div className="table-responsive">
                                                                <table className="table">
                                                                    <thead>
                                                                        <tr>
                                                                            <th className="cell-label">&nbsp;</th>
                                                                            <th>1 star</th>
                                                                            <th>2 stars</th>
                                                                            <th>3 stars</th>
                                                                            <th>4 stars</th>
                                                                            <th>5 stars</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="cell-label">Quality</td>
                                                                            <td><input type="radio" name="quality" className="radio" defaultValue="1" /></td>
                                                                            <td><input type="radio" name="quality" className="radio" defaultValue="2" /></td>
                                                                            <td><input type="radio" name="quality" className="radio" defaultValue="3" /></td>
                                                                            <td><input type="radio" name="quality" className="radio" defaultValue="4" /></td>
                                                                            <td><input type="radio" name="quality" className="radio" defaultValue="5" /></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="cell-label">Price</td>
                                                                            <td><input type="radio" name="quality" className="radio" defaultValue="1" /></td>
                                                                            <td><input type="radio" name="quality" className="radio" defaultValue="2" /></td>
                                                                            <td><input type="radio" name="quality" className="radio" defaultValue="3" /></td>
                                                                            <td><input type="radio" name="quality" className="radio" defaultValue="4" /></td>
                                                                            <td><input type="radio" name="quality" className="radio" defaultValue="5" /></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="cell-label">Value</td>
                                                                            <td><input type="radio" name="quality" className="radio" defaultValue="1" /></td>
                                                                            <td><input type="radio" name="quality" className="radio" defaultValue="2" /></td>
                                                                            <td><input type="radio" name="quality" className="radio" defaultValue="3" /></td>
                                                                            <td><input type="radio" name="quality" className="radio" defaultValue="4" /></td>
                                                                            <td><input type="radio" name="quality" className="radio" defaultValue="5" /></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>

                                                        <div className="review-form">
                                                            <div className="form-container">
                                                                <form className="cnt-form">

                                                                    <div className="row">
                                                                        <div className="col-sm-6">
                                                                            <div className="form-group">
                                                                                <label htmlFor="exampleInputName">Your Name <span className="astk">*</span></label>
                                                                                <input type="text" className="form-control txt" id="exampleInputName" placeholder="" />
                                                                            </div>
                                                                            <div className="form-group">
                                                                                <label htmlFor="exampleInputSummary">Summary <span className="astk">*</span></label>
                                                                                <input type="text" className="form-control txt" id="exampleInputSummary" placeholder="" />
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-6">
                                                                            <div className="form-group">
                                                                                <label htmlFor="exampleInputReview">Review <span className="astk">*</span></label>
                                                                                <textarea className="form-control txt txt-review" id="exampleInputReview" rows="4" placeholder=""></textarea>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="action text-right">
                                                                        <button className="btn btn-primary btn-upper">SUBMIT REVIEW</button>
                                                                    </div>

                                                                </form>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                            {/* tags */}
                                            <div className={"tab-pane" + ((navTab === "tags") ? " in active" : "")}>
                                                <div className="product-tag">

                                                    <h4 className="title">Product Tags</h4>
                                                    <form className="form-inline form-cnt">
                                                        <div className="form-container">

                                                            <div className="form-group">
                                                                <label htmlFor="exampleInputTag">Add Your Tags: </label>
                                                                <input type="email" id="exampleInputTag" className="form-control txt" />
                                                            </div>

                                                            <button className="btn btn-upper btn-primary" type="submit">ADD TAGS</button>
                                                        </div>
                                                    </form>

                                                    <form className="form-inline form-cnt">
                                                        <div className="form-group">
                                                            <label>&nbsp;</label>
                                                            <span className="text col-md-offset-3">Use spaces to separate tags. Use single quotes (') for phrases.</span>
                                                        </div>
                                                    </form>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <section className="section">
                                <div className="row">
                                    <div id="product-tabs-slider" className="scroll-tabs">
                                        <div className="more-info-tab clearfix ">
                                            <h3 className="new-product-title pull-left">Related Products</h3>
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
                                                        {productInCategory?.map((item, index) => <ProductItem key={index} product={item} width="184px" setCart={props.setCart} addToCart={props.addToCart} />)}
                                                    </Carousel>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;