import React, { useEffect, useState } from 'react';
import ProductItem from '../products/ProductItem';
import SideBar from './SideBar';
import categoryAPI from '../../api/products'
import { useAPI } from '../../hooks/useAPI';
import Loading from '../loading/Loading'

function Category(props) {
    const [ category, setCategory ] = useState("")
    const [ sort, setSort ] = useState()
    const [ showSortMenu, setShowSort ] = useState(false)
    const getProductsInCategory = useAPI(categoryAPI.getProductsInCategory)
    const getProductsSort = useAPI(categoryAPI.getProducts_Sort)
    useEffect(() => {
        if (category !== "") getProductsInCategory.request(category)
        if (sort !== "") getProductsSort.request(sort)
    }, [category, sort])
    return (
        <>
            { getProductsInCategory.loading && <Loading/> }
            <div className="breadcrumb">
                <div className="container">
                    <div className="breadcrumb-inner">
                    <ul className="list-inline list-unstyled">
                        <li><a href="!#">Home</a></li>
                        <li className='active'>Handbags</li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="body-content outer-top-xs">
                <div className='container'>
                    <div className='row'>
                        <SideBar setCategory={setCategory} setSort={setSort}/>
                        <div className="col-xs-12 col-sm-12 col-md-9 rht-col">
                            <div className="clearfix filters-container">
                            <div className="row">
                                <div className="col col-sm-12 col-md-5 col-lg-8 hidden-sm">
                                <div className="col col-sm-6 col-md-6 no-padding">
                                    <div className="lbl-cnt"> <span className="">Sort by </span>
                                        <div className="fld inline">
                                            <div className={"dropdown dropdown-small dropdown-med dropdown-white inline" + (showSortMenu && " open")}>
                                            <button
                                                data-toggle="dropdown"
                                                type="button"
                                                className="btn dropdown-toggle"
                                                onClick={() => setShowSort(!showSortMenu)}
                                            >
                                                <span className="caret"></span>
                                            </button>
                                            <ul role="menu" className="dropdown-menu" onMouseLeave={() => setShowSort(false)}>
                                                <li role="presentation"></li>
                                                <li role="presentation"><a onClick={e => { e.preventDefault(); setSort("desc"); setCategory("") }} style={{ cursor:"pointer" }}>Price:Lowest first</a></li>
                                                <li role="presentation"><a onClick={e => { e.preventDefault(); setSort("asc"); setCategory("") }} style={{ cursor:"pointer" }}>Price:HIghest first</a></li>
                                            </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col col-sm-6 col-md-4 col-xs-6 col-lg-4 text-right">
                                    <div className="pagination-container">
                                        <ul className="list-inline list-unstyled">
                                            <li className="prev"><a href="!#"><i className="fa fa-angle-left"></i></a></li>
                                            <li><a href="!#">1</a></li>
                                            <li className="active"><a href="!#">2</a></li>
                                            <li><a href="!#">3</a></li>
                                            <li><a href="!#">4</a></li>
                                            <li className="next"><a href="!#"><i className="fa fa-angle-right"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="search-result-container ">
                            <div id="myTabContent" className="tab-content category-list">
                                <div className="tab-pane active " id="grid-container">
                                <div className="category-product">
                                    <div className="row">
                                    { category !== "" && getProductsInCategory.data?.map((item, index) => 
                                        <div className="col-sm-6 col-md-4 col-lg-3" key={index}><ProductItem {...item} width="184px" setCart={props.setCart}/></div>
                                    ) }
                                    { sort !== "" && getProductsSort.data?.map((item, index) => 
                                        <div className="col-sm-6 col-md-4 col-lg-3" key={index}><ProductItem {...item} width="184px" setCart={props.setCart}/></div>
                                    ) }
                                    </div>
                                </div>
                                
                                </div>
                                <div className="clearfix filters-container bottom-row">
                                    <div className="text-right">
                                        <div className="pagination-container">
                                            <ul className="list-inline list-unstyled">
                                            <li className="prev"><a href="!#"><i className="fa fa-angle-left"></i></a></li>
                                            <li><a href="!#">1</a></li>
                                            <li className="active"><a href="!#">2</a></li>
                                            <li><a href="!#">3</a></li>
                                            <li><a href="!#">4</a></li>
                                            <li className="next"><a href="!#"><i className="fa fa-angle-right"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Category;