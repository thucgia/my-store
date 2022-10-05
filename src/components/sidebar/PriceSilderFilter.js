import React, { useEffect, useState } from 'react';
import './temp.css'

function PriceSilderFilter(props) {
    const [ range, setRange ] = useState({rangeMin: 10, rangeMax: 200})

    const handleChangeRange = (e) => {
        // check (min < max)
        // end check
        setRange({ ...range, [e.target.name] : e.target.value })
    }

    // useEffect(() => {
    //     if (range.rangeMin > range.rangeMax) {

    //     }
    // }, [range])

    return (
        <div className="sidebar-widget">
            <div className="widget-header">
                <h4 className="widget-title">Price Slider</h4>
            </div>
            <div className="sidebar-widget-body m-t-10">
                <section className="range-slider container-range">
                    <span className="full-range"></span>
                    <span className="incl-range"></span>
                    <input name="rangeMin" defaultValue={10} min="0" max="800" step="1" type="range" onChange={handleChangeRange}/>
                    <input name="rangeMax" defaultValue={200} min="0" max="800" step="1" type="range" onChange={handleChangeRange}/>
                </section>
                <a href="!#" className="lnk btn btn-primary">Show Now</a>
            </div>
        </div>
    );
}

export default PriceSilderFilter;