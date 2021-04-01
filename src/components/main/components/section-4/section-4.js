import React, { Component } from 'react';
import {Col, Row} from 'reactstrap';
import SectionForItem from './components/section-4-item';
import SectionForMobItem from './components/section-4-mob-item';
import AppStoreButton from '../../../buttons/appStore';
import Modal from '../../../modal';
import { withTranslation } from 'react-i18next';

import device from './Device.png';
import gif1 from './1.gif';
import gif2 from './2.gif';
import gif3 from './3.gif';
import gif4 from './4.gif';

import './section-4.css';

class SectionFor extends Component {
    state = {
        first: true,
        second: false,
        third: false,
        for: false,
        isVisible: false
    }

    switchBtn = (btnType) => {
        let firstNew = false,
            secondNew = false,
            thirdNew = false,
            forNew = false;
        switch(btnType) {
            case 1:
                firstNew = true;
            break;
            case 2:
                secondNew = true;
            break;
            case 3:
                thirdNew = true;
            break;
            case 4:
                forNew = true;
            break;
            default: return;
        }
        this.setState({first: firstNew, second: secondNew , third: thirdNew, for: forNew});
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
            <>
                <Row>
                    <Col className="section-4_title">
                        <h1 className="section-4_title_item-1">{t("thethourer.main.section4.title1.start")} <span className="textupdate">{t("thethourer.main.section4.title1.end")}</span></h1>
                        <h2 className="section-4_title_item-2"><span className="textupdate">{t("thethourer.main.section4.title2.start")}</span> {t("thethourer.main.section4.title2.end")}</h2>
                    </Col>
                </Row>
                <Row className="section-4_item">
                    <Col>
                        <Row className="flex-column text-right">
                            <Col className="top_item">
                                <SectionForItem
                                    btnIndex={1}
                                    func={this.switchBtn}
                                    activeClass={this.state.first}
                                    number={`<span class="num_update">1</span>`}
                                    title={t("thethourer.main.section4.part1.title")}
                                    text={t("thethourer.main.section4.part1.child1")}/>
                            </Col>
                            <Col className="bottom_item">
                                <SectionForItem
                                    btnIndex={2}
                                    func={this.switchBtn}
                                    activeClass={this.state.second}
                                    number={`<span class="num_update">3</span>`}
                                    title={t("thethourer.main.section4.part3.title")}
                                    text={t("thethourer.main.section4.part3.child1")}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="section-4_image">
                        <img className="section-4_image_phone" src={device} alt={device}/>
                        {this.state.first && <img src={gif1} alt={'...loading'} className="section-4_image-gifs"></img>}
                        {this.state.second && <img src={gif2} alt={'...loading'} className="section-4_image-gifs"></img>}
                        {this.state.third && <img src={gif3} alt={'...loading'} className="section-4_image-gifs"></img>}
                        {this.state.for && <img src={gif4} alt={'...loading'} className="section-4_image-gifs"></img>}
                    </Col>
                    <Col>
                        <Row className="flex-column text-left">
                            <Col className="top_item">
                                <SectionForItem
                                    btnIndex={3}
                                    func={this.switchBtn}
                                    activeClass={this.state.third}
                                    number={`<span class="num_update">2</span>`}
                                    title={t("thethourer.main.section4.part2.title")}
                                    text={t("thethourer.main.section4.part2.child1")}/>
                            </Col>
                            <Col className="bottom_item">
                                <SectionForItem
                                    btnIndex={4}
                                    func={this.switchBtn}
                                    activeClass={this.state.for}
                                    number={`<span class="num_update">4</span>`}
                                    title={t("thethourer.main.section4.part4.title")}
                                    text={t("thethourer.main.section4.part4.child1")}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="section-4-mob_item">
                    <SectionForMobItem/>
                </Row>
                <Row className="section-4_bottom_item mx-0">
                    <Col className="section-4_bottom_item_body d-flex justify-content-between px-0 py-0">
                        <p className="bottom_text">{t("thethourer.main.section4.title3.start")} <span className="bottom_text_item">{t("thethourer.main.section4.title3.end")}</span></p>
                        <AppStoreButton
                        onEnter={enter}
                        onLeave={leave}
                        textButton={t("thethourer.main.section4.buttonText")}/>
                    </Col>
                </Row>
                <Modal
                    visible={this.state.isVisible}
                    text={t("thethourer.modal.part1")}/>
            </>
        )
    }
}


export default withTranslation()(SectionFor);