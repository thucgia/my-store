import React from 'react';
import HeaderNav from './HeaderNav';
import HeaderTop from './HeaderTop';
import MainHeader from './MainHeader';

function Header(props) {
    return (
        <header className='header-style-1'>
            <HeaderTop/>
            <MainHeader cart={props.cart} setCart={props.setCart}/>
            <HeaderNav/>
        </header>
    );
}

export default Header;