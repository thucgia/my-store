import React, { useEffect, useState } from 'react';
import ProductItem from '../../utils/product/ProductItem';
import SideBar from './SideBar';
import categoryAPI from '../../../api/products'
import { useAPI } from '../../../hooks/useAPI';
import Loading from '../../utils/loading/Loading'

function Category(props) {
    const getProductsInCategory = useAPI(categoryAPI.getProductsInCategory)

    const [ category, setCategory ] = useState("")
    const [ sort, setSort ] = useState("")
    const [ sortName, setSortName ] = useState("")
    const [ showSortMenu, setShowSort ] = useState(false)
    const [ showRecords, setShowRecords ] = useState(false)
    const [ products, setProducts ] = useState([])
    // stored product when filter
    const [ productsFilter, setProductFilter ] = useState([])
    // stored product when filter
    const [ minPrice, setMinPrice ] = useState(0)
    const [ maxPrice, setMaxPrice ] = useState(0)
    // pagination
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ numPages, setNumPages ] = useState(1)
    const [ btnPrev, setBtnPrev ] = useState(false)
    const [ btnNext, setBtnNext ] = useState(false)
    const [ productsShowing, setProductsShowing ] = useState([])
    const [ records, setRecords ] = useState(4)

    const changePage = (page) => {
        let products_temp = []

        if (page < 1) page = 1
        if (page > numPages) page = numPages
        if (page === 1) {
            setBtnPrev(false)
        } else {
            setBtnPrev(true)
        }

        if (page === numPages) {
            setBtnNext(false)
        } else {
            setBtnNext(true)
        }

        for (let i = (page - 1) * records; i < (page * records) && i < products.length; i++) {
            products_temp.push(products[i])
        }

        setProductsShowing(products_temp)
    }

    const selectPage = (page) => {
        changePage(page)
        setCurrentPage(page)
    }

    const selectRecordsPerPage = (e) => {
        setRecords(e.target.innerHTML)
        setShowRecords(false)
    }
    // end

    const sortProductPrice = (type) => {
        if (type === "asc") setProducts ([...products].sort((a, b) => a.price - b.price))
        else setProducts ([...products].sort((a, b) => b.price - a.price))
    }

    const rangePrice = (range) => {
        setProducts([...productsFilter].filter(item => range.rangeMin <= item.price && item.price <= range.rangeMax))
    }

    const createPage = () => {
        // let getDataTemp = await getProductsInCategory.request(category ? category : "")
        // let productInCategory = await getDataTemp.result
        // console.log(productInCategory)
        // setProducts(productInCategory)
        // setProductFilter(productInCategory)
    }

    const selectSortType = (type) => e => {
        e.preventDefault();
        console.log("fsdf")
        setSort(type);
        setSortName(e.target.innerHTML);
        setShowSort(false);
    }

    useEffect(() => {
        document.title = props.title
    }, [])

    // useEffect(() => {
    //     console.log("testttt")
    //     let getDataTemp = getProductsInCategory.request(category ? category : "")
    //     getDataTemp.then(res => {
    //         console.log(res.result)
    //         setProducts(res.result)
    //         setProductFilter(res.result)
    //     })
    // }, [category])

    // useState(() => {
    //     console.log(products.length)
    //     if (products.length !== 0) {
    //         // if (sort !== "") sortProductPrice(sort)
    //         console.log("tests")
    //         setNumPages(Math.ceil(products.length / records))
    //         setCurrentPage(1)
    //         changePage(1)
    //         setMinPrice(Math.floor(productsFilter.reduce((prev, current) => { return prev.price < current.price ? prev : current }, 0).price))
    //         setMaxPrice(Math.ceil(productsFilter.reduce((prev, current) => { return prev.price > current.price ? prev : current }, 0).price))
    //     }
    // }, [products])

    useEffect(() => {
        let getData = null
        getData = getProductsInCategory.request(category ? category : "")
        getData.then(data => {
            // setNumPages(Math.ceil(data.result.length / records))
            setProducts(data.result)
            setProductFilter(data.result)
        })
    }, [ category ])

    useEffect(() => {
        if (sort !== "") {
            sortProductPrice(sort)
        }
    }, [ sort ])

    useEffect(() => {
        if (products.length !== 0) {
            // change products list => rerender
            setNumPages(Math.ceil(products.length / records))
            setCurrentPage(1)
            changePage(1)
            setMinPrice(Math.floor(productsFilter.reduce((prev, current) => { return prev.price < current.price ? prev : current }, 0).price))
            setMaxPrice(Math.ceil(productsFilter.reduce((prev, current) => { return prev.price > current.price ? prev : current }, 0).price))
        }
    }, [products])

    useEffect(() => {
        if (products.length !== 0) {
            setNumPages(Math.ceil(products.length / records))
            setCurrentPage(1)
            changePage(1)
        }
    }, [ records ])

    useEffect(() => {
        setCurrentPage(1)
        changePage(1)
    }, [numPages])

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
                        <SideBar setCategory={setCategory} setSort={setSort} rangePrice={rangePrice} minPrice={minPrice} maxPrice={maxPrice} />
                        <div className="col-xs-12 col-sm-12 col-md-9 rht-col">
                            <div className="clearfix filters-container">
                            <div className="row">
                                <div className="col col-sm-12 col-md-5 col-lg-6 hidden-sm">
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
                                                    { sortName }
                                                    <span className="caret"></span>
                                                </button>
                                                <ul role="menu" className="dropdown-menu" onMouseLeave={() => setShowSort(false)}>
                                                    <li role="presentation"></li>
                                                    <li role="presentation"><a onClick={selectSortType("asc")} style={{ cursor:"pointer" }}>Price:Lowest first</a></li>
                                                    <li role="presentation"><a onClick={selectSortType("desc")} style={{ cursor:"pointer" }}>Price:Highest first</a></li>
                                                </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-sm-6 col-md-6 no-padding hidden-sm hidden-md">
                                        <div className="lbl-cnt"> <span className="lbl">Show</span>
                                            <div className="fld inline">
                                                <div className={"dropdown dropdown-small dropdown-med dropdown-white inline" + (showRecords ? " open" : "")}>
                                                    <button data-toggle="dropdown" type="button" className="btn dropdown-toggle" onClick={(e) => { setShowRecords(!showRecords) }}> { records } <span className="caret"></span> </button>
                                                    <ul role="menu" className="dropdown-menu" onMouseLeave={() => setShowRecords(false)}>
                                                        <li role="presentation" style={{ padding: "3px 30px", cursor: "pointer" }} onClick={selectRecordsPerPage} >1</li>
                                                        <li role="presentation" style={{ padding: "3px 30px", cursor: "pointer" }} onClick={selectRecordsPerPage} >2</li>
                                                        <li role="presentation" style={{ padding: "3px 30px", cursor: "pointer" }} onClick={selectRecordsPerPage} >3</li>
                                                        <li role="presentation" style={{ padding: "3px 30px", cursor: "pointer" }} onClick={selectRecordsPerPage} >4</li>
                                                        <li role="presentation" style={{ padding: "3px 30px", cursor: "pointer" }} onClick={selectRecordsPerPage} >5</li>
                                                        <li role="presentation" style={{ padding: "3px 30px", cursor: "pointer" }} onClick={selectRecordsPerPage} >6</li>
                                                        <li role="presentation" style={{ padding: "3px 30px", cursor: "pointer" }} onClick={selectRecordsPerPage} >7</li>
                                                        <li role="presentation" style={{ padding: "3px 30px", cursor: "pointer" }} onClick={selectRecordsPerPage} >8</li>
                                                        <li role="presentation" style={{ padding: "3px 30px", cursor: "pointer" }} onClick={selectRecordsPerPage} >9</li>
                                                        <li role="presentation" style={{ padding: "3px 30px", cursor: "pointer" }} onClick={selectRecordsPerPage} >10</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-sm-6 col-md-4 col-xs-6 col-lg-6 text-right">
                                    <div className="pagination-container">
                                        <ul className="list-inline list-unstyled">
                                            <li className="prev" style={{ backgroundColor: btnPrev ? "" : "#dddddd" }}><a href="!#" onClick={ (e) => { e.preventDefault(); if (currentPage > 1) selectPage(currentPage - 1); } }><i className="fa fa-angle-left"></i></a></li>
                                            <li><a href="!#"> {currentPage} / {numPages} </a></li>
                                            <li className="next" style={{ backgroundColor: btnNext ? "" : "#dddddd" }}><a href="!#" onClick={ (e) => { e.preventDefault(); if (currentPage < numPages) selectPage(currentPage + 1); } }><i className="fa fa-angle-right"></i></a></li>
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
                                    { (!getProductsInCategory.loading) && (products.length === 0) ? <h1>No Data</h1> : 
                                     productsShowing?.map((item, index) => 
                                        // <div className="col-sm-6 col-md-4 col-lg-3" key={index}><ProductItem product={item} width="184px" setCart={props.setCart} addToCart={props.addToCart}/></div>
                                        <div className="col-sm-6 col-md-4 col-lg-3" key={index}><ProductItem product={item} width="184px" setCart={props.setCart} addToCart={props.addToCart}/></div>
                                    ) }
                                    </div>
                                </div>
                                
                                </div>
                                <div className="clearfix filters-container bottom-row">
                                    <div className="text-right">
                                        <div className="pagination-container">
                                            <ul className="list-inline list-unstyled">
                                                <li className="prev" style={{ backgroundColor: btnPrev ? "" : "#dddddd" }}><a href="!#" onClick={ (e) => { e.preventDefault(); if (currentPage > 1) selectPage(currentPage - 1); } }><i className="fa fa-angle-left"></i></a></li>
                                                <li><a href="!#"> {currentPage} / {numPages} </a></li>
                                                <li className="next" style={{ backgroundColor: btnNext ? "" : "#dddddd" }}><a href="!#" onClick={ (e) => { e.preventDefault(); if (currentPage < numPages) selectPage(currentPage + 1); } }><i className="fa fa-angle-right"></i></a></li>
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