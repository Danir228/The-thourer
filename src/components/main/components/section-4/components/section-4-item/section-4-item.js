import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './section-4-item.css';

function SectionForItem({number, title, text}) {
    return (
        <>
            <div className="section-4_content">
                <button className="left_item_btn" dangerouslySetInnerHTML={{ __html: number }}></button>
                <div className="left_item_body flex-column">
                    <h1 className="left_item_title">{title}</h1>
                    <p className="left_item_text">{text}</p>
                </div>
            </div>
        </>
    )
}

export default SectionForItem;