import React from 'react';

function CarouselButtonGroup({ next, previous, goToSlide, carouselState }) {
    const { totalItems, currentSlide } = carouselState;
    return (
        <div className="owl-controls clickable">
            <div className="owl-buttons">
                <div className="owl-prev" onClick={() => previous()}></div>
                <div className="owl-next" onClick={() => next()}></div>
            </div>
        </div>
    );
}

export default CarouselButtonGroup;