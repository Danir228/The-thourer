import React from 'react';

import google from './google.svg';
import './googlePlay.css';

const GooglePlayButton = ({textButton}) => {
    return (
        <>
            <button className="google-play_btn">
                <img src={google} alt={google} /><span>{textButton}</span></button>
        </>
    )
}

export default GooglePlayButton;