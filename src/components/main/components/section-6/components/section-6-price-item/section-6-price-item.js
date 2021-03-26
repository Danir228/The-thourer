import React from 'react';

import './section-6-price-item.css';

export default function PriceItem({
        image, price, rate, text1, text2, text3, text4, text5, selector1, selector2, selector3, selector4, selector5
    }) {
    return (
        <>
            <img className="price_image" src={image} alt={image}></img>
            <span className="price">{price}</span>
            <span className="rate">{rate}</span>
            <ul className="price_text">
                <li>
                    <i className={selector1}></i>
                    <span>
                        {text1.start}
                        <span className="price_number">
                            {text1.center}
                        </span>
                        {text1.end}
                    </span>
                </li>
                <li><i className={selector2}></i><span>{text2}</span></li>
                <li><i className={selector3}></i><span>{text3}</span></li>
                <li><i className={selector4}></i><span>{text4}</span></li>
                <li><i className={selector5}></i><span>{text5}</span></li>
            </ul>
        </>
    )
}