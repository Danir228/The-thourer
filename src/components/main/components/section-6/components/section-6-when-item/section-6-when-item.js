import React from 'react';

import './section-6-when-item.css';

function WhenItem({month, quarter, percent1, year, percent2 }) {
    return (
        <>
            <span className="month">{month}</span>
            <div className="quarter">
                <span className="quarter_item-1">{quarter}</span>
                <span className="quarter_item-2">{percent1}</span>
            </div>
            <div className="year">
                <span className="year_item-1">{year}</span>
                <span className="year_item-2">{percent2}</span>
            </div>
        </>
    )
}

export default WhenItem;