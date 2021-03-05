import React from 'react';

import intel from './images/intel.png';
import canonback from './images/canonback.png';
import canon from './images/canon.png';
import sumsung from './images/sumsung.png';

import './section-11.css';

export default function SectionEleven() {
    return (
        <>
            <div className="section-11_item">
                <img
                src={intel} alt={intel}
                className="intel"/>
                <img
                src={canonback} alt={canonback}
                className="canon"/>
                <img
                src={intel} alt={intel}
                className="intel"/>
                <img
                src={canon} alt={canon}
                className="canon"/>
                <img
                src={sumsung} alt={sumsung}
                className="sumsung"/>
            </div>

        </>
    )
}