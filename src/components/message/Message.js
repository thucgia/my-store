import React from 'react';
import './message.css'

function Message(props) {
    return (
        <div id="demo-modal" className="modal">
            <div className="modal__content">
                <h1>Notification</h1>

                <p>{ props.message }</p>

                <div className="modal__footer">
                    <button className='btn btn-secondary' onClick={ () => { props.deleteCartItem(props.delCartItem); props.setShowMessage("") } }>OK</button>
                </div>

                <button className="modal__close" onClick={() => props.setShowMessage("")}>&times;</button>
            </div>
        </div>
    );
}

export default Message;