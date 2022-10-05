import React, { useEffect } from 'react';
import Content from './Content';
import SideBar from './SideBar';

function Home(props) {
    useEffect(() => {
        document.title = props.title
    }, [])
    return (
        <div className="body-content outer-top-vs" id="top-banner-and-menu">
            <div className="container">
                <div className="row">
                    {/* <SideBar/> */}
                    <Content setCart={props.setCart}/>
                </div>
            </div>
        </div>
    );
}

export default Home;