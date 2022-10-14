import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function MenuItem(props) {
    let [isOverButton, setIsOverButton] = useState(false);
    let [isOverList, setIsOverList] = useState(false);
    let [isOpen, setIsOpen] = useState();
    let [isTouchInput, setIsTouchInput] = useState();
    let [hasClicked, setHasClicked] = useState();

    useLayoutEffect(() => {
        if (isOpen && !isOverButton && !isOverList && !isTouchInput) {
            setIsOpen(false);
        } else if (!isOpen && (isOverButton || isOverList) && !isTouchInput) {
            setIsOpen(true);
        }
    }, [isOverButton, isOverList]);

    useEffect(() => {
        setIsTouchInput(false);
        setHasClicked(false);
    }, [hasClicked]);
    return (
        <li
            className={"dropdown" + (props.mega_menu ? " mega-menu" : "") + (isOpen ? " open" : "")}
            onTouchStart={() => {
                setIsTouchInput(true);
            }}
            onMouseEnter={event => {
                setIsOverButton(true);
            }}
            onMouseLeave={event => {
                setIsOverButton(false);
            }}
            onKeyDown={() => {
                setIsOpen(!isOpen);
            }}
        >
            <Link to={props.route} className="dropdown-toggle">{props.parent}</Link>
            { props.child.length > 0 ? <ul className={"dropdown-menu " + props.type}>
                <li>
                    <div className="yamm-content">
                        <div className="row">
                            { props.child && props.child.map((item, index) => 
                            <div className="col-xs-12 col-sm-6 col-md-2 col-menu" key={index}>
                                { item.name ? <h2 className="title">{item.name}</h2> : "" }
                                <ul
                                    className="links"
                                    onMouseEnter={event => {
                                        setIsOverList(true);
                                    }}
                                    onMouseLeave={event => {
                                        setIsOverList(false);
                                    }}
                                >
                                    { item.child && item.child.map((item_li, index_li) => 
                                        <li key={ index_li }>
                                            <a
                                                href="!#"
                                                onSelect={(e) => {
                                                    e.preventDefault()
                                                    setIsOpen(false);
                                                }}
                                            >{ item_li }</a>
                                        </li>
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