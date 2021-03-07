import React from 'react';
import {Col, Row} from 'reactstrap';
import SectionForItem from './components/section-4-item';
import AppStoreButton from '../../../buttons/appStore';

import iphone from './Iphone.svg';

import './section-4.css';

function SectionFor() {
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
                                number={`<span class="num_update">1</span>`}
                                title={'Построение планировок'}
                                text={'Составляйте планировку помещения с помощью камеры вашего устройства'}/>
                        </Col>
                        <Col className="bottom_item">
                            <SectionForItem
                                number={`<span class="num_update">3</span>`}
                                title={'Создание виртуальных туров'}
                                text={'Собирайте созданные материалы в единый виртуальный тур'}/>
                        </Col>
                    </Row>
                </Col>
                <Col className="section-4_image">
                    <img src={iphone} alt={iphone}/>
                </Col>
                <Col>
                    <Row className="flex-column text-left">
                        <Col className="top_item">
                            <SectionForItem
                                number={`<span class="num_update">2</span>`}
                                title={'Съемка панорам'}
                                text={'Передавайте цельную окружающую картину благодаря панораме 360° '}/>
                        </Col>
                        <Col className="bottom_item">
                            <SectionForItem
                                number={`<span class="num_update">4</span>`}
                                title={'Делитесь созданными турами'}
                                text={'Отправьте ссылку на виртуальный тур или вставьте проигрыватель на свой сайт'}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="section-4_bottom_item">
                <Col className="d-flex justify-content-around">
                    <p className="bottom_text">Создайте свой виртуальный тур прямо <span className="bottom_text_item">сейчас</span></p>
                    <AppStoreButton
                    textButton={'Скачать приложение'}/>
                </Col>
            </Row>
        </>
    )
}

export default SectionFor;