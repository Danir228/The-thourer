import React from 'react';

import './social-link.css';

const SocialLink = ({image}) => {
    return (
        <>
            <div className="social-link">
                <img className="social_link_img" src={image} alt={image}/>
            </div>
        </>
    )
}

export default SocialLink;