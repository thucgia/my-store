import React from 'react';

function Contact(props) {
    return (
        <>
            <div class="breadcrumb">
                <div class="container">
                    <div class="breadcrumb-inner">
                        <ul class="list-inline list-unstyled">
                            <li><a href="!#">Home</a></li>
                            <li class='active'>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="body-content">
                <div class="container">
                    <div class="contact-page">
                        <div class="row">
                            <div class="col-md-8 contact-form">
                                <div class="col-md-12 contact-title">
                                    <h4>Contact Form</h4>
                                </div>
                                <div class="col-md-4 ">
                                    <form class="register-form">
                                        <div class="form-group">
                                            <label class="info-title" for="exampleInputName">Your Name <span>*</span></label>
                                            <input type="email" class="form-control unicase-form-control text-input" id="exampleInputName" placeholder="" />
                                        </div>
                                    </form>
                                </div>
                                <div class="col-md-4">
                                    <form class="register-form">
                                        <div class="form-group">
                                            <label class="info-title" for="exampleInputEmail1">Email Address <span>*</span></label>
                                            <input type="email" class="form-control unicase-form-control text-input" id="exampleInputEmail1" placeholder="" />
                                        </div>
                                    </form>
                                </div>
                                <div class="col-md-4">
                                    <form class="register-form">
                                        <div class="form-group">
                                            <label class="info-title" for="exampleInputTitle">Title <span>*</span></label>
                                            <input type="email" class="form-control unicase-form-control text-input" id="exampleInputTitle" placeholder="Title" />
                                        </div>
                                    </form>
                                </div>
                                <div class="col-md-12">
                                    <form class="register-form">
                                        <div class="form-group">
                                            <label class="info-title" for="exampleInputComments">Your Comments <span>*</span></label>
                                            <textarea class="form-control unicase-form-control" id="exampleInputComments"></textarea>
                                        </div>
                                    </form>
                                </div>
                                <div class="col-md-12 outer-bottom-small m-t-20">
                                    <button type="submit" class="btn-upper btn btn-primary checkout-page-button">Send Message</button>
                                </div>
                            </div>
                            <div class="col-md-4 contact-info">
                                <div class="contact-title">
                                    <h4>Information</h4>
                                </div>
                                <div class="clearfix address">
                                    <span class="contact-i"><i class="fa fa-map-marker"></i></span>
                                    <span class="contact-span">ThemesGround, 789 Main rd, Anytown, CA 12345 USA</span>
                                </div>
                                <div class="clearfix phone-no">
                                    <span class="contact-i"><i class="fa fa-mobile"></i></span>
                                    <span class="contact-span">+(888) 123-4567<br />+(888) 456-7890</span>
                                </div>
                                <div class="clearfix email">
                                    <span class="contact-i"><i class="fa fa-envelope"></i></span>
                                    <span class="contact-span"><a href="!#">marazoo@themesground.com</a></span>
                                </div>
                            </div>			</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;