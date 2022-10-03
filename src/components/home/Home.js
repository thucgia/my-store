import React from 'react';
import Content from './Content';
import SideBar from './SideBar';

function Home(props) {
    return (
        <div className="body-content outer-top-vs" id="top-banner-and-menu">
            <div className="container">
                <div className="row">
                    <SideBar/>
                    <Content cart={props.cart} setCart={props.setCart}/>
                </div>
            </div>
        </div>
    );
}

export default Home;