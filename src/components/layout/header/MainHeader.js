import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartItemPreview from '../../utils/cart/CartItemPreview';
import { useAPI } from '../../../hooks/useAPI';
import productAPI from '../../../api/products'

function MainHeader(props) {
    const [ openCartTotal, setOpenCartTotal ] = useState(false)
    const [ searchString, setSearchString ] = useState("")
    const [ products, setProducts ] = useState([])

    const getProducts = useAPI(productAPI.getProducts)

    const searchItem = (e) => {
        e.preventDefault()
        getProducts.request(searchString)
        .then(res => {
            let products = res.result
            let re = new RegExp(searchString, "gi")
            setProducts(() => products.filter(s => s.title.match(re)))
        })
    }

    const handleInputSearch = (e) => {
        setSearchString(e.target.value)
    }

    const showCartTotal = (mouse_leave) => (e) => {
        e.preventDefault();
        if (mouse_leave) {
            setOpenCartTotal(false)
        } else {
            setOpenCartTotal(!openCartTotal);
        }
    }

    useEffect(() => {
        setOpenCartTotal(false)
    }, [])
    return (
        <div className="main-header">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-3 logo-holder"> 
                        <div className="logo"><Link to="/"><img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="logo"/></Link></div>
                    </div>
                    <div className="col-lg-7 col-md-6 col-sm-8 col-xs-12 top-search-holder"> 
                        <div className="search-area">
                            <form>
                                <div className="control-group">
                                    <input className="search-field" onChange={handleInputSearch} value={searchString}/>
                                    <a className="search-button" href="!#" onClick={ searchItem } >Search</a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12 animate-dropdown top-cart-row"> 
                        <div className={"dropdown dropdown-cart" + (openCartTotal ? " open" : "")}>
                            <a href="!#" className="dropdown-toggle lnk-cart" data-toggle="dropdown" onClick={ showCartTotal(false) }>
                                <div className="items-cart-inner">
                                    <div className="basket">
                                        <div className="basket-item-count"><span className="count">{ props.cart.reduce((prev, total) => prev + total.count, 0) }</span></div>
                                        <div className="total-price-basket"> <span className="lbl">Shopping Cart</span> <span className="value">${props.totalPrice}</span> </div>
                                    </div>
                                </div>
                            </a>
                            <ul className="dropdown-menu" onMouseLeave={ showCartTotal(true) }>
                                <li>
                                    { props.cart && props.cart.map((item, index) => <CartItemPreview key={index} { ...item } setCart={props.setCart} deleteCartItem={props.deleteCartItem}/>) }
                                    <div className="clearfix cart-total">
                                        <div className="pull-right"> <span className="text">Sub Total :</span><span className='price'>${props.totalPrice}</span> </div>
                                        <div className="clearfix"></div>
                                        <Link to="/shopping-cart" className="btn btn-upper btn-primary btn-block m-t-20">Checkout</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainHeader;