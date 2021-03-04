import React from 'react';

import './section-6-price-item.css';

function PriceItem({image, price, rate, text1, text2, text3, text4, text5}) {
    return (
        <>
            <img src={image}></img>
            <span>{price}</span>
            <span>{rate}</span>
            <ul>
                <li>{text1}</li>
                <li>{text2}</li>
                <li>{text3}</li>
                <li>{text4}</li>
                <li>{text5}</li>
            </ul>
        </>
    )
}

export default PriceItem;