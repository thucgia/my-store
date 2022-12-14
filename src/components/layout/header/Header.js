import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderNav from './HeaderNav';
import HeaderTop from './HeaderTop';
import MainHeader from './MainHeader';

function Header(props) {
    return (
        <>
            <header className='header-style-1'>
                <HeaderTop token={props.token} removeToken={props.removeToken}/>
                <MainHeader cart={props.cart} setCart={props.setCart} totalPrice={props.totalPrice} deleteCartItem={props.deleteCartItem}/>
                <HeaderNav/>
            </header>
            <Outlet/>
        </>
    );
}

export default Header;