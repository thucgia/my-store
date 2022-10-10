import React from 'react';
import HeaderTop from '../../header/HeaderTop';

function AdminHeader(props) {
    return (
        <header className='header-style-1'>
            <HeaderTop token={props.token} removeToken={props.removeToken}/>
        </header>
    );
}

export default AdminHeader;