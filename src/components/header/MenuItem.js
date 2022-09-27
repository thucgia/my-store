import React from 'react';

function MenuItem(props) {
    return (
        <li className={"dropdown" + (props.mega_menu ? " mega-menu" : "") + (props.isShowing === props.id ? " open" : "")}>
            <a href="home.html" data-hover="dropdown" className="dropdown-toggle" data-toggle="dropdown" id={props.id} onClick={props.showMenu}>{props.parent}</a>
            { props.child.length > 0 ? <ul className={"dropdown-menu " + props.type}>
                <li>
                    <div className="yamm-content ">
                        <div className="row">
                            { props.child && props.child.map((item, index) => 
                            <div className="col-xs-12 col-sm-6 col-md-2 col-menu" key={index}>
                                { item.name ? <h2 className="title">{item.name}</h2> : "" }
                                <ul className="links">
                                    { item.child && item.child.map((item_li, index_li) => 
                                        <li key={ index_li }><a href="!#">{ item_li }</a></li>
                                    ) }
                                </ul>
                            </div>
                            )}
                            { props.image !== "" ? 
                            <div className="col-xs-12 col-sm-6 col-md-4 col-menu banner-image"> <img className="img-responsive" src={ props.image } alt=""/> </div> :
                            ""}
                        </div>
                    </div>
                </li>
            </ul> : ""}
        </li>
    );
}

export default MenuItem;