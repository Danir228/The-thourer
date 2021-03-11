import React from 'react';

import appstore from './applestoreqc.png';
import './modal.css';

export default function Modal({image, text}) {
    const imgModal = image === undefined ? appstore : image;
    const textModal = text === undefined ? '' : text;
    return (
        <>
            <div className="modal-window">
                <img src={imgModal} alt={imgModal}/>
                <p>{textModal}</p>
            </div>
        </>
    )
}