import React from 'react';

function ManufacturesFilter(props) {
    return (
        <div className="sidebar-widget">
            <div className="widget-header">
                <h4 className="widget-title">Manufactures</h4>
            </div>
            <div className="sidebar-widget-body">
                <ul className="list">
                    <li><a href="!#">Forever 18</a></li>
                    <li><a href="!#">Nike</a></li>
                    <li><a href="!#">Dolce & Gabbana</a></li>
                    <li><a href="!#">Alluare</a></li>
                    <li><a href="!#">Chanel</a></li>
                    <li><a href="!#">Other Brand</a></li>
                </ul>
                {/* <!--<a href="!#" className="lnk btn btn-primary">Show Now</a>--> */}
            </div>
            {/* <!-- /.sidebar-widget-body --> */}
        </div>
    );
}

export default ManufacturesFilter;