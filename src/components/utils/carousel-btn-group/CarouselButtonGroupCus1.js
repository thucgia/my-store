import React from 'react';

function CarouselButtonGroupCus1({ next, previous, goToSlide, carouselState }) {
    return (
        <div className='row outer-top-vs'>
            <div className="expert-members-nav text-center">
                <div className="btn-groups">
                    <button type="button" onClick={previous} ><i className="fa fm fa-long-arrow-left"></i>Previous</button>
                    <button type="button" onClick={next} >Next<i className="fa flm fa-long-arrow-right"></i></button>
                </div>
            </div>
        </div>
    );
}

export default CarouselButtonGroupCus1;