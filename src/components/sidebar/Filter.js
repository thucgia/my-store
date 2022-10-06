import React from 'react';
import CategoryFilter from './CategoryFilter';
import ManufacturesFilter from './ManufacturesFilter';
import PriceSilderFilter from './PriceSilderFilter';
import ProductTag from './ProductTag';

function Filter(props) {
    return (
        <div className="sidebar-module-container">
            <div className="sidebar-filter">
                <CategoryFilter setCategory={props.setCategory} setSort={props.setSort}/>
                <PriceSilderFilter rangePrice={props.rangePrice} minPrice={props.minPrice} maxPrice={props.maxPrice}/>
                <ManufacturesFilter/>
                <ProductTag/>
            </div>
        </div>
    );
}

export default Filter;