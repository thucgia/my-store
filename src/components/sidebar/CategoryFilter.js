import React from 'react';

function CategoryFilter(props) {
    return (
        <div className="sidebar-widget">
            <h3 className="section-title">Shop by</h3>
            <div className="widget-header">
                <h4 className="widget-title">Category</h4>
            </div>
            <div className="sidebar-widget-body">
                <div className="accordion">
                    <div className="accordion-group">
                        <div className="accordion-heading"> <a href="#collapseOne" data-toggle="collapse" className="accordion-toggle collapsed"> Camera </a> </div>
                        {/* <!-- /.accordion-heading --> */}
                        <div className="accordion-body collapse" id="collapseOne" style={{height: "0px"}}>
                            <div className="accordion-inner">
                                <ul>
                                    <li><a href="!#">gaming</a></li>
                                    <li><a href="!#">office</a></li>
                                    <li><a href="!#">kids</a></li>
                                    <li><a href="!#">for women</a></li>
                                </ul>
                            </div>
                            {/* <!-- /.accordion-inner --> */}
                        </div>
                        {/* <!-- /.accordion-body --> */}
                    </div>
                    {/* <!-- /.accordion-group --> */}

                    <div className="accordion-group">
                        <div className="accordion-heading"> <a href="#collapseTwo" data-toggle="collapse" className="accordion-toggle collapsed"> Desktops </a> </div>
                        {/* <!-- /.accordion-heading --> */}
                        <div className="accordion-body collapse" id="collapseTwo" style={{height: "0px"}}>
                            <div className="accordion-inner">
                                <ul>
                                    <li><a href="!#">gaming</a></li>
                                    <li><a href="!#">office</a></li>
                                    <li><a href="!#">kids</a></li>
                                    <li><a href="!#">for women</a></li>
                                </ul>
                            </div>
                            {/* <!-- /.accordion-inner --> */}
                        </div>
                        {/* <!-- /.accordion-body --> */}
                    </div>
                    {/* <!-- /.accordion-group --> */}

                    <div className="accordion-group">
                        <div className="accordion-heading"> <a href="#collapseThree" data-toggle="collapse" className="accordion-toggle collapsed"> Pants </a> </div>
                        {/* <!-- /.accordion-heading --> */}
                        <div className="accordion-body collapse" id="collapseThree" style={{height: "0px"}}>
                            <div className="accordion-inner">
                                <ul>
                                    <li><a href="!#">gaming</a></li>
                                    <li><a href="!#">office</a></li>
                                    <li><a href="!#">kids</a></li>
                                    <li><a href="!#">for women</a></li>
                                </ul>
                            </div>
                            {/* <!-- /.accordion-inner --> */}
                        </div>
                        {/* <!-- /.accordion-body --> */}
                    </div>
                    {/* <!-- /.accordion-group --> */}

                    <div className="accordion-group">
                        <div className="accordion-heading"> <a href="#collapseFour" data-toggle="collapse" className="accordion-toggle collapsed"> Bags </a> </div>
                        {/* <!-- /.accordion-heading --> */}
                        <div className="accordion-body collapse" id="collapseFour" style={{height: "0px"}}>
                            <div className="accordion-inner">
                                <ul>
                                    <li><a href="!#">gaming</a></li>
                                    <li><a href="!#">office</a></li>
                                    <li><a href="!#">kids</a></li>
                                    <li><a href="!#">for women</a></li>
                                </ul>
                            </div>
                            {/* <!-- /.accordion-inner --> */}
                        </div>
                        {/* <!-- /.accordion-body --> */}
                    </div>
                    {/* <!-- /.accordion-group --> */}

                    <div className="accordion-group">
                        <div className="accordion-heading"> <a href="#collapseFive" data-toggle="collapse" className="accordion-toggle collapsed"> Hats </a> </div>
                        {/* <!-- /.accordion-heading --> */}
                        <div className="accordion-body collapse" id="collapseFive" style={{height: "0px"}}>
                            <div className="accordion-inner">
                                <ul>
                                    <li><a href="!#">gaming</a></li>
                                    <li><a href="!#">office</a></li>
                                    <li><a href="!#">kids</a></li>
                                    <li><a href="!#">for women</a></li>
                                </ul>
                            </div>
                            {/* <!-- /.accordion-inner --> */}
                        </div>
                        {/* <!-- /.accordion-body --> */}
                    </div>
                    {/* <!-- /.accordion-group --> */}

                    <div className="accordion-group">
                        <div className="accordion-heading"> <a href="#collapseSix" data-toggle="collapse" className="accordion-toggle collapsed"> Accessories </a> </div>
                        {/* <!-- /.accordion-heading --> */}
                        <div className="accordion-body collapse" id="collapseSix" style={{height: "0px"}}>
                            <div className="accordion-inner">
                                <ul>
                                    <li><a href="!#">gaming</a></li>
                                    <li><a href="!#">office</a></li>
                                    <li><a href="!#">kids</a></li>
                                    <li><a href="!#">for women</a></li>
                                </ul>
                            </div>
                            {/* <!-- /.accordion-inner --> */}
                        </div>
                        {/* <!-- /.accordion-body --> */}
                    </div>
                    {/* <!-- /.accordion-group --> */}

                </div>
                {/* <!-- /.accordion --> */}
            </div>
            {/* <!-- /.sidebar-widget-body --> */}
        </div>
    );
}

export default CategoryFilter;