import React from 'react';
import CategoryFilter from './CategoryFilter';
import ColorFilter from './ColorFilter';
import ManufacturesFilter from './ManufacturesFilter';
import PriceSilderFilter from './PriceSilderFilter';
import ProductTag from './ProductTag';
import Testimonials from '../sidebar/Testimonials'
import NewLetter from '../sidebar/NewLetter'

function Filter(props) {
    return (
        <div className="sidebar-module-container">
            <div className="sidebar-filter">
                {/* <!-- ============================================== SIDEBAR CATEGORY ============================================== --> */}
                <CategoryFilter/>
                {/* <!-- /.sidebar-widget --> */}
                {/* <!-- ============================================== SIDEBAR CATEGORY : END ============================================== --> */}

                {/* <!-- ============================================== PRICE SILDER============================================== --> */}
                <PriceSilderFilter/>
                {/* <!-- /.sidebar-widget --> */}
                {/* <!-- ============================================== PRICE SILDER : END ============================================== --> */}
                {/* <!-- ============================================== MANUFACTURES============================================== --> */}
                <ManufacturesFilter/>
                {/* <!-- /.sidebar-widget --> */}
                {/* <!-- ============================================== MANUFACTURES: END ============================================== --> */}
                {/* <!-- ============================================== COLOR============================================== --> */}
                <ColorFilter/>
                {/* <!-- /.sidebar-widget --> */}
                {/* <!-- ============================================== COLOR: END ============================================== --> */}
                {/* <!-- ============================================== PRODUCT TAGS ============================================== --> */}
                <ProductTag/>
                {/* <!-- /.sidebar-widget --> */}
                {/* <!-- /.Testimonials --> */}
                <Testimonials/>

                {/* <!-- ============================================== Testimonials: END ============================================== --> */}

                {/* <!-- ============================================== NEWSLETTER ============================================== --> */}
                <NewLetter/>
                {/* <!-- /.sidebar-widget --> */}
                {/* <!-- ============================================== NEWSLETTER: END ============================================== --> */}


            </div>
            {/* <!-- /.sidebar-filter --> */}
        </div>
    );
}

export default Filter;