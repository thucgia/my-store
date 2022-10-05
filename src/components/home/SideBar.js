import React from 'react';
import HotDeals from '../sidebar/HotDeals';
import SpecialOffer from '../sidebar/SpecialOffer';
import TopNavigation from '../sidebar/TopNavigation';
import ProductTag from '../sidebar/ProductTag'
import SpecialDeals from '../sidebar/SpecialDeals'
import NewLetter from '../sidebar/NewLetter'
import Testimonials from '../sidebar/Testimonials'

function SideBar(props) {
    return (
        <div className="col-xs-12 col-sm-12 col-md-3 sidebar"> 
            {/* <TopNavigation/> */}
            <HotDeals/>
            <SpecialOffer/>
            <SpecialDeals/>
            <NewLetter/>
            <Testimonials/>
        </div>
    );
}

export default SideBar;