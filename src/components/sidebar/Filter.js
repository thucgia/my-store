import React from 'react';
import CategoryFilter from './CategoryFilter';
import ColorFilter from './ColorFilter';
import ManufacturesFilter from './ManufacturesFilter';
import PriceSilderFilter from './PriceSilderFilter';
import ProductTag from './ProductTag';

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
            </div>
            {/* <!-- /.sidebar-filter --> */}
        </div>
    );
}

export default Filter;