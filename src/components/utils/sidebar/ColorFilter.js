import React from 'react';

function ColorFilter(props) {
    return (
        <div className="sidebar-widget">
            <div className="widget-header">
                <h4 className="widget-title">Colors</h4>
            </div>
            <div className="sidebar-widget-body">
                <ul className="list">
                    <li><a href="!#">Red</a></li>
                    <li><a href="!#">Blue</a></li>
                    <li><a href="!#">Yellow</a></li>
                    <li><a href="!#">Pink</a></li>
                    <li><a href="!#">Brown</a></li>
                    <li><a href="!#">Teal</a></li>
                </ul>
            </div>
            {/* <!-- /.sidebar-widget-body --> */}
        </div>
    );
}

export default ColorFilter;