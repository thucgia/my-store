import React from 'react';

function NotFound(props) {
    return (
        <div className="body-content outer-top-bd">
            <div className="container">
                <div className="x-page inner-bottom-sm">
                    <div className="row">
                        <div className="col-md-12 x-text text-center">
                            <h1>404</h1>
                            <p>We are sorry, the page you've requested is not available. </p>
                            <form className="outer-top-vs outer-bottom-xs">
                                <input placeholder="Search" autoComplete="off"/>
                                <button className="  btn-default le-button">Go</button>
                            </form>
                            <a href="home.html"><i className="fa fa-home"></i> Go To Homepage</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;