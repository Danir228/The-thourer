import React from 'react';

import './section-4-item.css';

function SectionForItem({number, title, text}) {
    return (
        <>
            <button className="left_item_btn" dangerouslySetInnerHTML={{ __html: number }}></button>
            <h1 className="left_item_title">{title}</h1>
            <p className="left_item_text">{text}</p>
        </>
    )
}

export default SectionForItem;