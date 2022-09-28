import React from 'react';

function HeaderTop(props) {
    return (
        <div className="top-bar animate-dropdown">
            <div className="container">
                <div className="header-top-inner">
                    <div className="cnt-account">
                        <ul className="list-unstyled">
                            <li className="myaccount"><a href="!#"><span>My Account</span></a></li>
                            <li className="login"><a href="!#"><span>Login</span></a></li>
                        </ul>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>
    );
}

export default HeaderTop;