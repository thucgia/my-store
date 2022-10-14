import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function HeaderTop(props) {
    let navigate = useNavigate()
    const logOut = (e) => {
        e.preventDefault();
        props.removeToken()
        navigate("/")
    }
    return (
        <div className="top-bar animate-dropdown">
            <div className="container">
                <div className="header-top-inner">
                    <div className="cnt-account">
                        <ul className="list-unstyled">
                            { props.token ?
                            <>
                                <li className="myaccount"><Link to="/profile"><span>My Account</span></Link></li>
                                <li className="login"><a style={{ cursor: "pointer" }} onClick={ logOut }><span>Logout</span></a></li>
                            </> :
                            <li className="login"><Link to="login"><span>Login</span></Link></li>
                            }
                        </ul>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>
    );
}

export default HeaderTop;