import React, { useEffect } from 'react';

function Contact(props) {
    useEffect(() => {
        document.title = props.title
    }, [])
    return (
        <>
            <div className="breadcrumb">
                <div className="container">
                    <div className="breadcrumb-inner">
                        <ul className="list-inline list-unstyled">
                            <li><a href="!#">Home</a></li>
                            <li className='active'>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="body-content">
                <div className="container">
                    <div className="contact-page">
                        <div className="row">
                            <div className="col-md-8 contact-form">
                                <div className="col-md-12 contact-title">
                                    <h4>Contact Form</h4>
                                </div>
                                <div className="col-md-4 ">
                                    <form className="register-form">
                                        <div className="form-group">
                                            <label className="info-title" htmlFor="exampleInputName">Your Name <span>*</span></label>
                                            <input type="email" className="form-control unicase-form-control text-input" id="exampleInputName" placeholder="" />
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-4">
                                    <form className="register-form">
                                        <div className="form-group">
                                            <label className="info-title" htmlFor="exampleInputEmail1">Email Address <span>*</span></label>
                                            <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail1" placeholder="" />
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-4">
                                    <form className="register-form">
                                        <div className="form-group">
                                            <label className="info-title" htmlFor="exampleInputTitle">Title <span>*</span></label>
                                            <input type="email" className="form-control unicase-form-control text-input" id="exampleInputTitle" placeholder="Title" />
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-12">
                                    <form className="register-form">
                                        <div className="form-group">
                                            <label className="info-title" htmlFor="exampleInputComments">Your Comments <span>*</span></label>
                                            <textarea className="form-control unicase-form-control" id="exampleInputComments"></textarea>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-12 outer-bottom-small m-t-20">
                                    <button type="submit" className="btn-upper btn btn-primary checkout-page-button">Send Message</button>
                                </div>
                            </div>
                            <div className="col-md-4 contact-info">
                                <div className="contact-title">
                                    <h4>Information</h4>
                                </div>
                                <div className="clearfix address">
                                    <span className="contact-i"><i className="fa fa-map-marker"></i></span>
                                    <span className="contact-span">ThemesGround, 789 Main rd, Anytown, CA 12345 USA</span>
                                </div>
                                <div className="clearfix phone-no">
                                    <span className="contact-i"><i className="fa fa-mobile"></i></span>
                                    <span className="contact-span">+(888) 123-4567<br />+(888) 456-7890</span>
                                </div>
                                <div className="clearfix email">
                                    <span className="contact-i"><i className="fa fa-envelope"></i></span>
                                    <span className="contact-span"><a href="!#">marazoo@themesground.com</a></span>
                                </div>
                            </div>			</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;