import React, {Component} from 'react';
import {Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterSocialLink from './components/footer-link';
import AppStoreButton from '../buttons/appStore';
import GooglePlayButton from '../buttons/googlePlay';
import Modal from '../modal';
import { Link as LinkScroll } from "react-scroll";

import telegram from './components/images/telegram.svg';
import facebook from './components/images/facebook.svg';
import twitter from './components/images/twitter.svg';
import whatsap from './components/images/whatsap.svg';
import mail from './components/images/mail.svg';
import apple from './components/images/apple.svg';
import img320_1 from './components/images/vector2.png';
import img320_2 from './components/images/vector1.png';
import img480_1 from './components/images/480-2.png';
import img480_2 from './components/images/480-1.png';
import img768_1 from './components/images/768-2.png';
import img768_2 from './components/images/768-1.png';
import img1024_1 from './components/images/1024-2.png';
import img1024_2 from './components/images/1024-1.png';
import img1 from './components/images/img1.png';
import img2 from './components/images/img2.png';

import './footer.css';
import { withTranslation } from 'react-i18next';

class Footer extends Component {

    state = {
        isVisible: false
    }

    handleMouseEnter = () => {
        this.setState({isVisible: !this.state.isVisible});
    }

    handleMouseLeave = () => {
        this.setState({isVisible: !this.state.isVisible});
    }

    render() {
        const { t } = this.props;
        const enter = this.handleMouseEnter;
        const leave = this.handleMouseLeave;

        return (
            <footer className="footer">
                <div className="footer_item">
                    <div className="footer_back-1">
                        <img className="img320_1" src={img320_1} alt={img320_1}/>
                        <img className="img480_1" src={img480_1} alt={img480_1}/>
                        <img className="img768_1" src={img768_1} alt={img768_1}/>
                        <img className="img1024_1" src={img1024_1} alt={img1024_1}/>
                        <img className="img1" src={img1} alt={img1}/>
                    </div>
                    <div className="footer_back-2">
                        <img className="img320_2" src={img320_2} alt={img320_2}/>
                        <img className="img480_2" src={img480_2} alt={img480_2}/>
                        <img className="img768_2" src={img768_2} alt={img768_2}/>
                        <img className="img1024_2" src={img1024_2} alt={img1024_2}/>
                        <img className="img2" src={img2} alt={img2}/>
                    </div>
                    <div className="footer_back-3">
                        <Container className="d-flex justify-content-between">
                            <div className="container_item">
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
                                    <h1>{t("thethourer.footer.part1.title")}</h1>
                                    <h2>
                                        <LinkScroll
                                            offset={-120}
                                            smooth={true}
                                            duration= {500}
                                            to="section-4"
                                            className="navbar_link">
                                            {t("thethourer.footer.part1.child1")}
                                        </LinkScroll>
                                    </h2>
                                    <h2>
                                        <LinkScroll
                                            offset={-120}
                                            smooth={true}
                                            duration= {500}
                                            to="section-6"
                                            className="navbar_link">
                                            {t("thethourer.footer.part1.child2")}
                                        </LinkScroll>
                                    </h2>
                                    <h2>
                                        <LinkScroll
                                            offset={-120}
                                            smooth={true}
                                            duration= {500}
                                            to="section-9_title"
                                            className="navbar_link">
                                            FAQ
                                        </LinkScroll>
                                    </h2>
                                </div>
                                <div className="item-3">
                                    <h1>{t("thethourer.footer.part2.title")}</h1>
                                    <h2><a href="/">{t("thethourer.footer.part2.child1")}</a></h2>
                                    <h2><a href="/">{t("thethourer.footer.part2.child2")}</a></h2>
                                </div>
                                <div className="item-5">
                                    <h1>{t("thethourer.footer.part4.title")}</h1>
                                    <div className="item-5_links">
                                        <FooterSocialLink
                                            image={telegram}/>
                                        <FooterSocialLink
                                            image={whatsap}/>
                                        <FooterSocialLink
                                            image={mail}/>
                                    </div>
                                </div>
                                <div className="item-4">
                                    <h1>{t("thethourer.footer.part3.title")}</h1>
                                    <div className="item-4_btn">
                                        <AppStoreButton
                                            onEnter={enter}
                                            onLeave={leave}
                                            textButton={'App Store'}
                                            customIcon={apple}/>
                                        <GooglePlayButton
                                            textButton={'Google Play'}/>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>
                <Modal
                    visible={this.state.isVisible}
                    text={t("thethourer.modal.part1")}
                />
            </footer>
        )
    }
}

export default withTranslation()(Footer);