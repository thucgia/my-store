import React, { useEffect } from 'react';

function UpdateProfile(props) {
    useEffect(() => {
        document.title = props.title
    }, [])
    return (
        <div>
            <div className="breadcrumb">
                <div className="container">
                    <div className="breadcrumb-inner">
                        <ul className="list-inline list-unstyled">
                            <li><a href="home.html">Home</a></li>
                            <li className='active'>Profile Update</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="body-content">
                <div className="container">
                    <div className="sign-in-page">
                        <div className="row">
                            <div className="col-md-4 col-sm-4">
                                <div className="avatar"><img src="assets/images/testimonials/member1.png" alt="123"/></div>
                                <div className='clients_author'><button type='button' className='btn-upper btn btn-primary'>Upload Image</button></div>
                            </div>
                            <div className="col-md-6 col-sm-6 create-new-account">
                                <h4 className="checkout-subtitle">Create a new account</h4>
                                <p className="text title-tag-line">Create your new account.</p>
                                <div className="form-group">
                                    <label className="info-title" htmlFor="email">Email Address <span>*</span></label>
                                    <input type="email" className="form-control unicase-form-control text-input" id="email" name="register-email" />
                                    {/* <p className='err-msg'>{(isAction === "register") && (!isValidEmail) && isErr === "invalid_email" && ErrorList[isErr]}</p> */}
                                </div>
                                <div className="form-group">
                                    <label className="info-title" htmlFor="name">Name <span>*</span></label>
                                    <input type="text" className="form-control unicase-form-control text-input" id="name" name="register-username" />
                                    <p className='err-msg'></p>
                                </div>
                                <div className="form-group">
                                    <label className="info-title" htmlFor="phone">Phone Number <span>*</span></label>
                                    <input type="number" className="form-control unicase-form-control text-input" id="phone" name="register-phone" />
                                    <p className='err-msg'></p>
                                </div>
                                <div className="form-group">
                                    <label className="info-title" htmlFor="password">Password <span>*</span></label>
                                    <input type="password" className="form-control unicase-form-control text-input" id="password" name="register-password" />
                                    {/* <p className='err-msg'>{(isAction === "register") && (!isValidPassword) && isErr === "invalid_password" && ErrorList[isErr]}</p> */}
                                </div>
                                <div className="form-group">
                                    <label className="info-title" htmlFor="confirmPassword">Confirm Password <span>*</span></label>
                                    <input type="password" className="form-control unicase-form-control text-input" id="confirmPassword" name="register-confirm-pwd" />
                                    {/* <p className='err-msg'>{(isAction === "register") && (!isPwdMatch) && isErr === "not_match_pwd" && ErrorList[isErr]}</p> */}
                                </div>
                                <button type="button" className="btn-upper btn btn-primary checkout-page-button">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateProfile;