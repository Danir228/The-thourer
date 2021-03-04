import React from 'react';

import google from './google.png';
import './googlePlay.css';

const GooglePlayButton = ({textButton}) => {
    return (
        <>
            <button className="google-play_btn"><img src={google} alt={google} />{textButton}</button>
        </>
    )
}

export default GooglePlayButton;