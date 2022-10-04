import React, { useEffect } from 'react';
import { faq_list } from '../../resources/faqlist'
import FAQItem from './FAQItem';

function FAQ(props) {
    useEffect(() => {
        document.title = props.title
    }, [])
    return (
        <>
            <div className="breadcrumb">
                <div className="container">
                    <div className="breadcrumb-inner">
                        <ul className="list-inline list-unstyled">
                            <li><a href="home.html">Home</a></li>
                            <li className='active'>FAQ</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="body-content">
                <div className="container">
                    <div className="checkout-box faq-page">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="heading-title">Frequently Asked Questions</h2>
                                <span className="title-tag">Last Updated on November 02, 2014</span>
                                <div className="panel-group checkout-steps" id="accordion">
                                    {/* items */}
                                    { faq_list && faq_list.map((item, index) => <FAQItem key={index} { ...item } index={index}/>) }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FAQ;