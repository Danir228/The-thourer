import React from 'react';

import './footer-link.css';

const FooterSocialLink = ({image}) => {
    return (
        <>
            <div className="footer-social_link">
                <img className="footer-social_link_img" src={image} alt={image}/>
            </div>
        </>
    )
}

export default FooterSocialLink;