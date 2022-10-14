import React, { useState } from 'react';

function TopNavigation(props) {
    const [ megaMenu, setMegaMenu ] = useState("")
    const showMegaMenu = (e) => {
        e.preventDefault()
        let mega_menu_id = e.target.id
        if (megaMenu !== "" && megaMenu === mega_menu_id) setMegaMenu("")
        else {
            setMegaMenu(mega_menu_id)
        }
    }
    return (
        <div className="side-menu animate-dropdown outer-bottom-xs">
            <div className="head"><i className="icon fa fa-align-justify fa-fw"></i> Categories</div>
            <nav className="yamm megamenu-horizontal">
                <ul className="nav">
                    <li
                        className={"dropdown menu-item" + (megaMenu === "clothing" ? " open" : "")}
                    >
                        <a href="!#" className="dropdown-toggle" data-toggle="dropdown" id="clothing" onClick={showMegaMenu}>
                            <i className="icon fa fa-shopping-bag" aria-hidden="true"></i>Categoris
                        </a>
                        <a href="!#" className="dropdown-toggle" data-toggle="dropdown" id="clothing" onClick={showMegaMenu}>
                            <i className="icon fa fa-shopping-bag" aria-hidden="true"></i>Products
                        </a>
                        {/* <ul className="dropdown-menu pages">
                            <li className="yamm-content">
                                <div className="row">
                                    <div className="col-sm-12 col-md-3">
                                        <ul className="links list-unstyled">
                                        <li><a href="!#">All Products</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul> */}
                        <a href="!#" className="dropdown-toggle" data-toggle="dropdown" id="clothing" onClick={showMegaMenu}>
                            <i className="icon fa fa-shopping-bag" aria-hidden="true"></i>Users
                        </a>
                        <a href="!#" className="dropdown-toggle" data-toggle="dropdown" id="clothing" onClick={showMegaMenu}>
                            <i className="icon fa fa-shopping-bag" aria-hidden="true"></i>Faq
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default TopNavigation;