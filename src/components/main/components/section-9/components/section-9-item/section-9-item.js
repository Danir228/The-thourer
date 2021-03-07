import React from 'react';

import up from './arrow-up.svg';
import down from './arrow-down.svg';

import './section-9-item.css';

export default function SectionNineAccordion({title, text1, text2, text3, text4, text5 }) {
    return (
        <>
            <div className="accordion_block">
                <div className="accordion_title">
                    <div className="arrow_up">
                        <img className="arrow" src={up} alt={up}/>
                    </div>
                    <div className="arrow_down">
                        <img className="arrow" src={down} alt={down}/>
                    </div>
                    <span>{title}</span>
                </div>
                <div className="accordion_body">
                    <span>{text1}</span>
                    <ul>
                        <li>{text2}</li>
                        <li>{text3}</li>
                        <li dangerouslySetInnerHTML={{ __html: text4 }}></li>
                        <li>{text5}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}









