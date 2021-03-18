import React from 'react';

import google from './google.svg';
import './googlePlay.css';

const GooglePlayButton = ({textButton, disabledbtn}) => {
    return (
        <>
            <button className="google-play_btn" disabled={disabledbtn}>
                <img src={google} alt={google} /><span>{textButton}</span></button>
        </>
    )
}

export default GooglePlayButton;