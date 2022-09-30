import React from 'react';
import './loading.css'

function Loading(props) {
    return (
        <div className="overlay">
            <div className="overlay__inner">
                <div className="overlay__content"><span className="spinner"></span></div>
            </div>
        </div>
    );
}

export default Loading;