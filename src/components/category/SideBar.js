import React from 'react';
import Filter from '../sidebar/Filter';

function SideBar(props) {
    return (
        <div className='col-xs-12 col-sm-12 col-md-3 sidebar'>
            <Filter/>
        </div>
    );
}

export default SideBar;