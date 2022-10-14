import React, { useState } from 'react';
import { menu_list } from '../../../resources/menulist';
import MenuItem from '../../utils/menu/MenuItem';

function HeaderNav(props) {
    const [ menus, getMenus ] = useState(menu_list)
    const [isShowing, setShowing] = useState("")
    const showMenu = (e) => {
        e.preventDefault()
        let menu_showing = e.target.id
        if (isShowing !== "" && isShowing === menu_showing) setShowing("")
        else {
            setShowing(menu_showing)
        }
    }

    return (
        <div className="header-nav animate-dropdown">
            <div className="container">
            <div className="yamm navbar navbar-default" role="navigation">
                <div className="navbar-header">
                    <button data-target="#mc-horizontal-menu-collapse" data-toggle="collapse" className="navbar-toggle collapsed" type="button"> 
                    <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
                </div>
                <div className="nav-bg-class">
                <div className="navbar-collapse collapse" id="mc-horizontal-menu-collapse">
                    <div className="nav-outer">
                    <ul className="nav navbar-nav">
                        { menus && menus.map((item, index) => <MenuItem key={index} {...item}/>) }
                    </ul>
                    {/* <!-- /.navbar-nav --> */}
                    <div className="clearfix"></div>
                    </div>
                    {/* <!-- /.nav-outer -->  */}
                </div>
                {/* <!-- /.navbar-collapse -->  */}
                
                </div>
                {/* <!-- /.nav-bg-class -->  */}
            </div>
            {/* <!-- /.navbar-default -->  */}
            </div>
            {/* <!-- /.container-class -->  */}
            
        </div>
    );
}

export default HeaderNav;