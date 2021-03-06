import React from 'react';

import './section-6-price-item.css';

export default function PriceItem({image, price, rate, text1, text2, text3, text4, text5}) {
    return (
        <>
            <img className="price_image" src={image} alt={image}></img>
            <span className="price">{price}</span>
            <span className="rate">{rate}</span>
            <ul className="price_text">
                <li><i className="fas fa-check"></i><span>{text1}</span></li>
                <li><i className="fas fa-check"></i><span>{text2}</span></li>
                <li><i className="fas fa-check"></i><span>{text3}</span></li>
                <li><i className="fas fa-times"></i><span>{text4}</span></li>
                <li><i className="fas fa-times"></i><span>{text5}</span></li>
            </ul>
        </>
    )
}