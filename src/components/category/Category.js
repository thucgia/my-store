import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductItem from '../products/ProductItem';
import SideBar from './SideBar';

function Category(props) {
    const [ products, setProducts ] = useState([])
    useEffect(() => {
        let url = "/products"
        axios.get(url)
        .then(res => {
          toast.success("API loaded successfully", { position: toast.POSITION.TOP_RIGHT})
          setProducts(res.data)
        })
        .catch(err => { toast.error("API loaded failed", { position: toast.POSITION.TOP_RIGHT}) })
      }, [])
    return (
        <>
            <ToastContainer/>
            <div className="breadcrumb">
                <div className="container">
                    <div className="breadcrumb-inner">
                    <ul className="list-inline list-unstyled">
                        <li><a href="!#">Home</a></li>
                        <li className='active'>Handbags</li>
                    </ul>
                    </div>
                    {/* <!-- /.breadcrumb-inner --> */}
                </div>
                {/* <!-- /.container --> */}
            </div>
            {/* <!-- /.breadcrumb --> */}
            <div className="body-content outer-top-xs">
                <div className='container'>
                    <div className='row'>
                        <SideBar/>
                        <div className="col-xs-12 col-sm-12 col-md-9 rht-col">
                            <div className="clearfix filters-container">
                            <div className="row">
                                {/* <!-- /.col --> */}
                                <div className="col col-sm-12 col-md-5 col-lg-5 hidden-sm">
                                <div className="col col-sm-6 col-md-6 no-padding">
                                    <div className="lbl-cnt"> <span className="">Sort by</span>
                                    <div className="fld inline">
                                        <div className="dropdown dropdown-small dropdown-med dropdown-white inline">
                                        <button data-toggle="dropdown" type="button" className="btn dropdown-toggle"> Position <span className="caret"></span> </button>
                                        <ul role="menu" className="dropdown-menu">
                                            <li role="presentation"><a href="!#">position</a></li>
                                            <li role="presentation"><a href="!#">Price:Lowest first</a></li>
                                            <li role="presentation"><a href="!#">Price:HIghest first</a></li>
                                            <li role="presentation"><a href="!#">Product Name:A to Z</a></li>
                                        </ul>
                                        </div>
                                    </div>
                                    {/* <!-- /.fld --> */}
                                    </div>
                                    {/* <!-- /.lbl-cnt --> */}
                                </div>
                                {/* <!-- /.col --> */}
                                </div>
                                {/* <!-- /.col --> */}
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
                                        {/* <!-- /.list-inline --> */}
                                    </div>
                                    {/* <!-- /.pagination-container --> */}
                                </div>
                                {/* <!-- /.col --> */}
                            </div>
                            {/* <!-- /.row --> */}
                            </div>
                            <div className="search-result-container ">
                            <div id="myTabContent" className="tab-content category-list">
                                <div className="tab-pane active " id="grid-container">
                                <div className="category-product">
                                    <div className="row">
                                    { products && products.map((item, index) => 
                                    <div className="col-sm-6 col-md-4 col-lg-3" key={index}><ProductItem {...item} width="184px"/></div>
                                    ) }
                                    {/* <!-- /.item --> */}
                                    </div>
                                    {/* <!-- /.row --> */}
                                </div>
                                {/* <!-- /.category-product --> */}
                                
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
                                            {/* <!-- /.list-inline --> */}
                                        </div>
                                    {/* <!-- /.pagination-container --> */}
                                    </div>
                                    {/* <!-- /.text-right --> */}
                                </div>
                                {/* <!-- /.filters-container --> */}
                            </div>
                            {/* <!-- /.search-result-container --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Category;