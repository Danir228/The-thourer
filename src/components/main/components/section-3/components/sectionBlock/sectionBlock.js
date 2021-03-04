import React from 'react';

import './sectionBlock.css'

function SectionBlock({image, title, text}) {
    return (
        <div className="sectionblock_item">
            <img src={image}></img>
            <h1>{title}</h1>
            <p dangerouslySetInnerHTML={{ __html: text }}></p>
        </div>
    )
}

export default SectionBlock;