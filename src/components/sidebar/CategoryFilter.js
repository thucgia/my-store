import React, { useEffect } from 'react';
import categoryAPI from '../../api/products'
import { useAPI } from '../../hooks/useAPI';

function CategoryFilter(props) {
    const getAllCategories = useAPI(categoryAPI.getAllCategories)
    useEffect(() => {
        getAllCategories.request()
    }, [])
    return (
        <div className="sidebar-widget">
            <h3 className="section-title">Shop by</h3>
            <div className="widget-header">
                <h4 className="widget-title">Category</h4>
            </div>
            <div className="sidebar-widget-body">
                <div className="accordion">
                    { getAllCategories.data?.map((item, index) => 
                    <div className="accordion-group" key={index}>
                        <div className="accordion-heading"> <a className="accordion-toggle" onClick={(e) => { e.preventDefault(); props.setCategory(item); props.setSort("") }}> { item } </a> </div>
                    </div>
                    ) }
                </div>
                {/* <!-- /.accordion --> */}
            </div>
            {/* <!-- /.sidebar-widget-body --> */}
        </div>
    );
}

export default CategoryFilter;