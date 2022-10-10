import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../loading/Loading';

function Contact(props) {
    const initContactState = { to_name: "Admin", from_name: "", from_email: "", subject: "", messages: "" }
    const [ contact, setContact ] = useState({ to_name: "Admin", from_name: "", from_email: "", subject: "", messages: "" })
    const [ isLoading, setIsLoading ] = useState(false)

    useEffect(() => {
        document.title = props.title
    }, [])

    const handleContact = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value })
    }
    
    const sendMessage = () => {
        setIsLoading(true)
        emailjs.send('service_01', 'template_01', contact, 'mAzlYpRK1dUef09dF')
        .then(res => {
            toast.success(res.text, { position: toast.POSITION.TOP_RIGHT})
        }, (error => {
            toast.error(error.text, { position: toast.POSITION.TOP_RIGHT})
        }))
        .finally(() => {
            setIsLoading(false)
            setContact(initContactState)
        })
    }

    return (
        <>
            { isLoading && <Loading/> }
            <ToastContainer/>
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
                                            <input
                                                type="text"
                                                className="form-control unicase-form-control text-input"
                                                id="exampleInputName"
                                                name="from_name"
                                                placeholder=""
                                                onChange={handleContact}
                                                value={ contact.from_name }
                                            />
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-4">
                                    <form className="register-form">
                                        <div className="form-group">
                                            <label className="info-title" htmlFor="exampleInputEmail1">Email Address <span>*</span></label>
                                            <input
                                                type="email"
                                                className="form-control unicase-form-control text-input"
                                                id="exampleInputEmail1"
                                                name='from_mail'
                                                placeholder=""
                                                onChange={handleContact}
                                                value={ contact.from_mail }
                                            />
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-4">
                                    <form className="register-form">
                                        <div className="form-group">
                                            <label className="info-title" htmlFor="exampleInputTitle">Title <span>*</span></label>
                                            <input
                                                type="text"
                                                className="form-control unicase-form-control text-input"
                                                id="exampleInputTitle"
                                                name='subject'
                                                placeholder="Title"
                                                onChange={handleContact}
                                                value={ contact.subject }
                                            />
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-12">
                                    <form className="register-form">
                                        <div className="form-group">
                                            <label className="info-title" htmlFor="exampleInputComments">Your Comments <span>*</span></label>
                                            <textarea
                                                className="form-control unicase-form-control"
                                                id="exampleInputComments"
                                                name='messages'
                                                onChange={handleContact}
                                                value={ contact.messages }
                                            ></textarea>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-12 outer-bottom-small m-t-20">
                                    <button type="submit" className="btn-upper btn btn-primary checkout-page-button" onClick={sendMessage}>Send Message</button>
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