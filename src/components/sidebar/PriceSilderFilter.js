import React, { useEffect, useState } from 'react';

function PriceSilderFilter(props) {
    const [ range, setRange ] = useState({})

    const handleChangeRange = (e) => {
        let range_min = (e.target.name === "rangeMin") ? e.target.value : range.rangeMin
        let range_max = (e.target.name === "rangeMax") ? e.target.value : range.rangeMax
        if ( parseFloat(range_min) <= parseFloat(range_max) ) {
            setRange({ ...range, [e.target.name] : e.target.value })
        }
    }

    useEffect(() => {
        setRange({rangeMin: props.minPrice, rangeMax: props.maxPrice})
    }, [])

    return (
        <div className="sidebar-widget">
            {console.log(props.minPrice)}
            <div className="widget-header">
                <h4 className="widget-title">Price Slider</h4>
            </div>
            <div className='tooltip-cus'>

            <div className="sidebar-widget-body m-t-10">
                <section className="range-slider container-range">
                    <span className="full-range"></span>
                    <span className="incl-range"></span>
                    <input
                        name="rangeMin"
                        value={range.rangeMin}
                        min="0"
                        max={props.maxPrice}
                        step="1"
                        type="range"
                        onChange={handleChangeRange}
                    />
                    <input
                        name="rangeMax"
                        value={range.rangeMax}
                        min="0"
                        max={props.maxPrice}
                        step="1"
                        type="range"
                        onChange={handleChangeRange}
                    />
                    <span className='price-min-max'>
                        <span className='pull-left'>$ {props.minPrice}</span>
                        <span className='pull-right'>$ {props.maxPrice}</span>
                    </span>
                    <span className="tooltiptext tooltip-top">{ range.rangeMin } : { range.rangeMax }</span>
                </section>
                <a href="!#" className="lnk btn btn-primary" onClick={e => { e.preventDefault(); props.rangePrice(range); }}>Show Now</a>
            </div>
            </div>
        </div>
    );
}

export default PriceSilderFilter;