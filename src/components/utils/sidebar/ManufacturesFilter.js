import React from 'react';

function ManufacturesFilter(props) {
    return (
        <div className="sidebar-widget">
            <div className="widget-header">
                <h4 className="widget-title">Manufactures</h4>
            </div>
            <div className="sidebar-widget-body">
                <ul className="list">
                    <li><a href="!#">iPhone</a></li>
                    <li><a href="!#">Samsung</a></li>
                    <li><a href="!#">Oppo</a></li>
                    <li><a href="!#">Xiaomi</a></li>
                    <li><a href="!#">Huawei</a></li>
                    <li><a href="!#">Vivo</a></li>
                    <li><a href="!#">Sony</a></li>
                    <li><a href="!#">LG</a></li>
                    <li><a href="!#">Zenfone</a></li>
                    <li><a href="!#">HTC</a></li>
                </ul>
                {/* <!--<a href="!#" className="lnk btn btn-primary">Show Now</a>--> */}
            </div>
            {/* <!-- /.sidebar-widget-body --> */}
        </div>
    );
}

export default ManufacturesFilter;