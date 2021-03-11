import React from 'react';
import {Col, Row} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SectionForItem from '../section-4-item';

import device from '../../Device.png';

import './section-4-mob-item.css';

function SectionForMobItem() {
    return (
        <>
            <Row className="mob_item_top">
                <Col className="mob_item_top_item show d-flex justify-content-center">
                    <SectionForItem
                        number={`<span class="num_update">1</span>`}
                        title={'Построение планировок'}
                        text={'Составляйте планировку помещения с помощью камеры вашего устройства'}/>
                </Col>
                <Col className="mob_item_top_item d-flex justify-content-center">
                    <SectionForItem
                            number={`<span class="num_update">2</span>`}
                            title={'Съемка панорам'}
                            text={'Передавайте цельную окружающую картину благодаря панораме 360° '}/>
                </Col>
                <Col className="mob_item_top_item d-flex justify-content-center">
                    <SectionForItem
                            number={`<span class="num_update">3</span>`}
                            title={'Создание виртуальных туров'}
                            text={'Собирайте созданные материалы в единый виртуальный тур'}/>
                </Col>
                <Col className="mob_item_top_item d-flex justify-content-center">
                    <SectionForItem
                            number={`<span class="num_update">4</span>`}
                            title={'Делитесь созданными турами'}
                            text={'Отправьте ссылку на виртуальный тур или вставьте проигрыватель на свой сайт'}/>
                </Col>
            </Row>
            <Row className="mob_item_body">
                <Col className="mob_item_image">
                    <img src={device} alt={device}/>
                </Col>
                <Col className="mob_item_btn">
                    <div>
                        <SectionForItem
                            number={`<span class="num_update">1</span>`}/>
                    </div>
                    <div>
                        <SectionForItem
                            number={`<span class="num_update">2</span>`}/>
                    </div>
                    <div>
                        <SectionForItem
                            number={`<span class="num_update">3</span>`}/>
                    </div>
                    <div className="mb-0">
                        <SectionForItem
                            number={`<span class="num_update">4</span>`}/>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default SectionForMobItem;