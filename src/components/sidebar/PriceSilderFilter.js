import React from 'react';

function PriceSilderFilter(props) {
    return (
        <div className="sidebar-widget">
            <div className="widget-header">
                <h4 className="widget-title">Price Slider</h4>
            </div>
            <div className="sidebar-widget-body m-t-10">
                <div className="price-range-holder"> <span className="min-max"> <span className="pull-left">$200.00</span> <span className="pull-right">$800.00</span> </span>
                    <input type="text" id="amount" style={{border: "0", color: "#666666", fontWeight: "bold", textAlign: "center"}} />
                    <input type="text" className="price-slider" defaultValue={""} />
                </div>
                {/* <!-- /.price-range-holder --> */}
                <a href="!#" className="lnk btn btn-primary">Show Now</a> </div>
            {/* <!-- /.sidebar-widget-body --> */}
        </div>
    );
}

export default PriceSilderFilter;