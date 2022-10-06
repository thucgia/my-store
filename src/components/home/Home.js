import React, { useEffect } from 'react';
import Content from './Content';

function Home(props) {
    useEffect(() => {
        document.title = props.title
    }, [])
    return (
        <div className="body-content outer-top-vs" id="top-banner-and-menu">
            <div className="container">
                <div className="row">
                    <Content setCart={props.setCart} addToCart={props.addToCart} />
                </div>
            </div>
        </div>
    );
}

export default Home;