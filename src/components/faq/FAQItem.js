import React from 'react';

function FAQItem(props) {
    return (
        <div className="panel panel-default checkout-step-09">
            <div className="panel-heading">
                <h4 className="unicase-checkout-title">
                <a data-toggle="collapse" className="collapsed" data-parent="#accordion" href="#collapseNine">
                    <span>{ props.index + 1 }</span>{ props.question }
                </a>
                </h4>
            </div>
            <div id="collapseNine" className="panel-collapse collapse">
                <div className="panel-body">
                    { props.answer }
                </div>
            </div>
        </div>
    );
}

export default FAQItem;