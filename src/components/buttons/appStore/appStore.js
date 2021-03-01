import React from 'react';

import './appStore.css';

const AppStoreButton = ({textButton}) => {
    return (
        <>
            <button className="app-store_btn"><i className="fab fa-apple"></i>{textButton}</button>
        </>
    )
}

export default AppStoreButton;