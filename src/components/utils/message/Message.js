import React from 'react';
import './message.css'

function Message(props) {
    const delCartItem = () => {
        props.deleteCartItem(props.cartItem);
        props.setShowMessage("");
    }
    const closeMessage = () => {
        props.setShowMessage("")
    }
    return (
        <div id="demo-modal" className="modal">
            <div className="modal__content">
                <h1>Notification</h1>

                <p>{ props.message }</p>

                <div className="modal__footer">
                    <button className='btn btn-secondary' onClick={delCartItem}>OK</button>
                </div>

                <button className="modal__close" onClick={closeMessage}>&times;</button>
            </div>
        </div>
    );
}

export default Message;