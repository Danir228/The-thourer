import React, {Component} from 'react';
import {Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterSocialLink from './components/footer-link';
import AppStoreButton from '../buttons/appStore';
import GooglePlayButton from '../buttons/googlePlay';

import telegram from './components/images/telegram.svg';
import facebook from './components/images/facebook.svg';
import twitter from './components/images/twitter.svg';
import whatsap from './components/images/whatsap.svg';
import mail from './components/images/mail.svg';
import apple from './components/images/apple.svg';

import './footer.css';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer_item">
                    <div className="footer_back-1">
                    <div className="footer_back-2">
                        <Container className="d-flex justify-content-between">
                            <div className="item-1">
                                <h1>The Tourer</h1>
                                <div className="item-1_links">
                                    <FooterSocialLink
                                    image={telegram}/>
                                    <FooterSocialLink
                                    image={facebook}/>
                                    <FooterSocialLink
                                    image={twitter}/>
                                </div>
                            </div>
                            <div className="item-2">
                                <h1>Главная</h1>
                                <h2><a href="/">Как это работает</a></h2>
                                <h2><a href="/">Тарифы</a></h2>
                                <h2><a href="/">FAQ</a></h2>
                            </div>
                            <div className="item-3">
                                <h1>Информация</h1>
                                <h2><a href="/">Политика конфиденциальности</a></h2>
                                <h2><a href="/">Условия использования</a></h2>
                            </div>
                            <div className="item-4">
                                <h1>Скачать приложение</h1>
                                <div className="item-4_btn">
                                    <AppStoreButton
                                    textButton={'App Store'}
                                    customIcon={apple}/>
                                    <GooglePlayButton
                                    textButton={'Google Play'}/>
                                </div>
                            </div>
                            <div className="item-5">
                                <h1>Связаться с нами</h1>
                                <div className="item-5_links">
                                    <FooterSocialLink
                                    image={telegram}/>
                                    <FooterSocialLink
                                    image={whatsap}/>
                                    <FooterSocialLink
                                    image={mail}/>
                                </div>
                            </div>
                        </Container>
                    </div>
                    </div>
                </div>
            </footer>
        )
    }
}