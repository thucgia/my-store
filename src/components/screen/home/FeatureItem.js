import React from 'react';

function FeatureItem(props) {
    return (
        <div className='wpb_wrapper'>
            <div className='feature-item'>
                <div className='icon text-primary'>
                    <img src={ props.image } alt="aaaa"/>
                </div>
                <div className='title'>
                    <h3 className='h4'>{ props.title }</h3>
                </div>
                <div className='content'>
                    <p>{ props.content }</p>
                </div>
            </div>
        </div>
    );
}

export default FeatureItem;