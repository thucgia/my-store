import React, { useState } from 'react';

function FAQItem(props) {
    const [ collapse, setCollapse ] = useState(false)
    return (
        <div className="panel panel-default checkout-step-09">
            <div className="panel-heading">
                <h4 className="unicase-checkout-title">
                <a data-toggle="collapse" className={collapse? "" : "collapsed"} data-parent="#accordion" href="#collapseNine" onClick={(e) => { e.preventDefault(); setCollapse(!collapse); }}>
                    <span>{ props.index + 1 }</span>{ props.question }
                </a>
                </h4>
            </div>
            <div className={"panel-collapse collapse" + (collapse ? " in":  "")}>
                <div className="panel-body">
                    { props.answer }
                </div>
            </div>
        </div>
    );
}

export default FAQItem;