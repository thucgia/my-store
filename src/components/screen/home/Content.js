import React, { useEffect, useState } from 'react';
import ProductItem from '../../utils/product/ProductItem';
import { blog_list } from '../../../resources/bloglist';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselButtonGroup from '../../utils/carousel-btn-group/CarouselButtonGroup'
import BlogItem from '../../utils/blog/BlogItem';
import { useAPI } from '../../../hooks/useAPI'
import productAPI from '../../../api/products'
import Loading from '../../utils/loading/Loading'
import { faq_list } from '../../../resources/faqlist';
import FAQItem from '../faq/FAQItem'
import { Link } from 'react-router-dom';
import FeatureItem from './FeatureItem';
import { features_list } from '../../../resources/featureslist';
import './home.css'
import { expertslist } from '../../../resources/expertslist';
import CarouselButtonGroupCus1 from '../../utils/carousel-btn-group//CarouselButtonGroupCus1';

function Content(props) {
    const getProductsAPI = useAPI(productAPI.getProducts)
    const [ products, setProducts ] = useState([])
    const blogs = [...blog_list].slice(0, 4)
    const faqs = [...faq_list].slice(0, 3)

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
    const responsive_experts_img = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        }
    };

    useEffect(() => {
        getProductsAPI.request().then(res => setProducts(res.result))
    },[])

    return (
        <div>
            { getProductsAPI.loading && <Loading/> }
            <div id="product-tabs-slider" className="scroll-tabs">
                <div className="more-info-tab clearfix ">
                    <h3 className="new-product-title pull-left">Hot Services</h3>
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
                                {products?.map((item, index) => <ProductItem key={index} product={item} setCart={props.setCart} addToCart={props.addToCart} width={"235px"} />)}
                            </Carousel>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="checkout-box faq-page">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="heading-title">Frequently Asked Questions</h2>
                        <div className="panel-group checkout-steps" id="accordion">
                            {/* items */}
                            { faqs && faqs.map((item, index) => <FAQItem key={index} { ...item } index={index}/>) }
                        </div>
                        <button className="btn btn-primary" style={{ float: 'right' }}><Link to='/faq' style={{ color: '#fff' }}>View All FAQs</Link></button>
                    </div>
                </div>
            </div>
            <div className="wide-banners outer-bottom-xs outer-top-vs">
                <div className='feature-title-section outer-bottom-sm'>
                    <h2 className='h2'>Our Experts</h2>
                    <p>Introduce Our Professional</p>
                </div>
                <div className="row">
                    <Carousel
                        arrows={false}
                        swipeable={false}
                        draggable={false}
                        showDots={false}
                        responsive={responsive_experts_img}
                        ssr={true} // means to render carousel on server-side.
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        itemClass="carousel-item-padding-40-px"
                        renderButtonGroupOutside={true}
                        customButtonGroup={<CarouselButtonGroupCus1/>}
                    >
                        {expertslist?.map((item, index) => 
                            <div align="center" key={index}>
                                <div className="wide-banner cnt-strip">
                                    <div className="image"> <img className="img-responsive" src={item} alt="" /></div>
                                </div>
                            </div>
                        )}
                    </Carousel>
                </div>
            </div>
            <div className='container'>
                <div className='feature-title-section outer-bottom-sm'>
                    <h2 className='h2'>Why Choose Us?</h2>
                    <p>Some of Our Features</p>
                </div>
                <div className='row'>
                    { features_list.map((item, index) => <div className='col-md-3 col-sm-3' key={index}><FeatureItem {...item} /></div>) }
                </div>
            </div>
            <section className="section latest-blog outer-bottom-vs">
                <h3 className="section-title">Latest form Blog</h3>
                <div className="blog-slider-container outer-top-xs">
                    <div className="blog-slider custom-carousel" >
                        {blogs && blogs.map((item, index) => <BlogItem key={index} {...item} />)}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Content;