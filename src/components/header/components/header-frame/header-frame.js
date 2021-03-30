import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppStoreButton from '../../../buttons/appStore';
import GooglePlayButton from '../../../buttons/googlePlay';
import { withTranslation } from 'react-i18next';

import apple from './apple.svg';
import google from './google.svg';

import './header-frame.css';

class HeaderFrame extends Component {
  render() {
      const { t } = this.props;
        return (
            <>
                <div className="header-frame">
                    <div className="header-frame_item">
                        <ul className="header-frame_links">
                            <li className="header-frame_link active-frame_link"><a href="/">{t("thethourer.header.headerFrame.link1")}</a></li>
                            <li className="header-frame_link"><a href="/">{t("thethourer.header.headerFrame.link2")}</a></li>
                            <li className="header-frame_link"><a href="/">FAQ</a></li>
                            <li className="header-frame_link"><a href="/">{t("thethourer.header.headerFrame.link3")}</a></li>
                        </ul>
                        <AppStoreButton
                        customIcon={apple}
                        textButton={'App Store'}/>
                        <GooglePlayButton
                        customIcon={google}
                        disabledbtn={'disabled'}
                        textButton={'Google Play'}/>
                    </div>
                </div>
            </>
        )
    }
}

export default withTranslation()(HeaderFrame);