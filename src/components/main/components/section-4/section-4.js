import React, { Component } from 'react';
import {Col, Row} from 'reactstrap';
import SectionForItem from './components/section-4-item';
import SectionForMobItem from './components/section-4-mob-item';
import AppStoreButton from '../../../buttons/appStore';
import Modal from '../../../modal';

import device from './Device.png';

import './section-4.css';

export default class SectionFor extends Component {
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
        const enter = this.handleMouseEnter;
        const leave = this.handleMouseLeave;
        return (
            <>
                <Row>
                    <Col className="section-4_title">
                        <h1 className="section-4_title_item-1">Как это работает? <span className="textupdate">Попробуйте</span></h1>
                        <h2 className="section-4_title_item-2"><span className="textupdate">Нажимайте на шаги</span>, чтобы увидеть, как работает приложение</h2>
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
                                    title={'Построение планировок'}
                                    text={'Составляйте планировку помещения с помощью камеры вашего устройства'}/>
                            </Col>
                            <Col className="bottom_item">
                                <SectionForItem
                                    btnIndex={2}
                                    func={this.switchBtn}
                                    activeClass={this.state.second}
                                    number={`<span class="num_update">3</span>`}
                                    title={'Создание виртуальных туров'}
                                    text={'Собирайте созданные материалы в единый виртуальный тур'}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="section-4_image">
                        <img src={device} alt={device}/>
                    </Col>
                    <Col>
                        <Row className="flex-column text-left">
                            <Col className="top_item">
                                <SectionForItem
                                    btnIndex={3}
                                    func={this.switchBtn}
                                    activeClass={this.state.third}
                                    number={`<span class="num_update">2</span>`}
                                    title={'Съемка панорам'}
                                    text={'Передавайте цельную окружающую картину благодаря панораме 360° '}/>
                            </Col>
                            <Col className="bottom_item">
                                <SectionForItem
                                    btnIndex={4}
                                    func={this.switchBtn}
                                    activeClass={this.state.for}
                                    number={`<span class="num_update">4</span>`}
                                    title={'Делитесь созданными турами'}
                                    text={'Отправьте ссылку на виртуальный тур или вставьте проигрыватель на свой сайт'}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="section-4-mob_item">
                    <SectionForMobItem/>
                </Row>
                <Row className="section-4_bottom_item mx-0">
                    <Col className="section-4_bottom_item_body d-flex justify-content-around px-0 py-0">
                        <p className="bottom_text">Создайте свой виртуальный тур <span className="bottom_text_item">прямо сейчас</span></p>
                        <AppStoreButton
                        onEnter={enter}
                        onLeave={leave}
                        textButton={'Скачать приложение'}/>
                    </Col>
                </Row>
                <Modal
                    visible={this.state.isVisible}
                    text={'Наведите камеру вашего телефона или нажмите на кнопку для перехода в App Store'}/>
            </>
        )
    }
}
