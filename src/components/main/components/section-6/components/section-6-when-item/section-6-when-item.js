import React from 'react';

import './section-6-when-item.css';

export default function WhenItem({month, quarter, percent1, year, percent2 }) {
    return (
        <>
            <div className="whenitem_month">
                <div className="whenitem_style">{month}</div>
            </div>
            <div className="whenitem_quarter">
                <div className="whenitem_style">{quarter}</div>
                <div className="percent">{percent1}</div>
            </div>
            <div className="whenitem_year">
                <div className="whenitem_style">{year}</div>
                <div className="percent">{percent2}</div>
            </div>
        </>
    )
}