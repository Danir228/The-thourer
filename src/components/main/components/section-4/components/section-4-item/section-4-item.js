import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './section-4-item.css';

function SectionForItem({number, title, text}) {
    return (
        <>
            <div className="section-4_content">
                <button className="section-4_btn" dangerouslySetInnerHTML={{ __html: number }}></button>
                <div className="section-4_body flex-column">
                    <h1 className="section-4_title">{title}</h1>
                    <p className="section-4_text">{text}</p>
                </div>
            </div>
        </>
    )
}

export default SectionForItem;