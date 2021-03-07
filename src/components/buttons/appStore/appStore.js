import React from 'react';

import apple from './apple.svg';

import './appStore.css';

const AppStoreButton = ({textButton, customIcon}) => {
    const src = customIcon == undefined ? apple : customIcon;
    return (
        <>
            <button className="app-store_btn"><img src={src} alt={apple} /><span>{textButton}</span></button>
        </>
    )
}

export default AppStoreButton;