import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppStoreButton from '../../../buttons/appStore';
import GooglePlayButton from '../../../buttons/googlePlay';

import apple from './apple.svg';
import google from './google.svg';

import './header-frame.css';

export default class HeaderFrame extends Component {
  render() {
        return (
            <>
                <div className="header-frame">
                    <div className="header-frame_item">
                        <ul className="header-frame_links">
                            <li className="header-frame_link active-frame_link"><a href="/">Как это работает</a></li>
                            <li className="header-frame_link"><a href="/">Тарифы</a></li>
                            <li className="header-frame_link"><a href="/">FAQ</a></li>
                            <li className="header-frame_link"><a href="/">Контакты</a></li>
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

