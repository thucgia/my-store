import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselButtonGroup from '../carousel-btn-group/CarouselButtonGroup';

function Testimonials(props) {
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
    return (
        <div className="sidebar-widget outer-top-vs ">
            <div id="advertisement" className="advertisement">
                <Carousel
                    arrows={false}
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
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
    );
}

export default Testimonials;