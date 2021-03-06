import React from 'react';

import './social-link.css';

const SocialLink = ({image}) => {
    return (
        <>
            <a href="/" className="social-link">
                <div className="social_link_img">
                    <img src={image} alt={image}/>
                </div>
            </a>
        </>
    )
}

export default SocialLink;