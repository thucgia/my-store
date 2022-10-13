import React, { useEffect, useState } from 'react';
import categoryAPI from '../../api/products'
import { useAPI } from '../../hooks/useAPI';

function CategoryFilter(props) {
    const getAllCategories = useAPI(categoryAPI.getAllCategories)
    const [ categories, setCategories ] = useState([])
    useEffect(() => {
        getAllCategories.request().then(data => {
            setCategories(data.result)
        })
    }, [])
    return (
        <div className="sidebar-widget">
            <h3 className="section-title">Shop by</h3>
            <div className="widget-header">
                <h4 className="widget-title">Category</h4>
            </div>
            <div className="sidebar-widget-body">
                <div className="accordion" data-testid="categories">
                    <div className="accordion-group">
                        <div className="accordion-heading"> <a className="accordion-toggle" onClick={(e) => { e.preventDefault(); props.setCategory(false); }}> All </a> </div>
                    </div>
                    { categories.map((item, index) => 
                    <div className="accordion-group" key={index} data-testid="categories-test">
                        <div className="accordion-heading"> <a className="accordion-toggle" onClick={(e) => { e.preventDefault(); props.setCategory(item); }}> { item } </a> </div>
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