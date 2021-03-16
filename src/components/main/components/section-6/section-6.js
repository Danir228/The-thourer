import React from 'react';
import {Col, Row} from 'reactstrap';
import PriceItem from './components/section-6-price-item';
import SimpleSlider from '../../../carousel';
import WhenItem from './components/section-6-when-item';
import block1 from './components/images/block1.svg';
import block2 from './components/images/block2.svg';
import block3 from './components/images/block3.svg';
import block4 from './components/images/block4.svg';

import './section-6.css';

function SectionSix() {
    return (
        <>
            <Row>
                <Col className="section-6_title">
                    <h1 className="section-6_title_item-1">Разные уровни подписок.</h1>
                    <h2 className="section-6_title_item-2">Выберите удобный</h2>
                </Col>
            </Row>
            <Row>
                <Col className="section-6_calendar">
                    <WhenItem
                    month={'Месяц'}
                    quarter={'Квартал'}
                    percent1={'-5%'}
                    year={'Год'}
                    percent2={'-15%'}/>
                </Col>
            </Row>
            <div className="section-6_price_items">
                <SimpleSlider
                slidenum={4}
                row={2}
                sliderow={2}
                variable={true}
                variable2={true}
                center={true}
                items={[
                    <div className="section-6_price_item">
                        <PriceItem
                        image={block1}
                        price={'0.00 ₽'}
                        rate={'Бесплатный тариф'}
                        text1={'1 проект'}
                        text2={'2 комнаты'}
                        text3={'4 панорамы'}
                        text4={'Нельзя делиться туром'}
                        text5={'Аналитика поведения внутри модели'}
                        selector1={'fas fa-check'}
                        selector2={'fas fa-check'}
                        selector3={'fas fa-check'}
                        selector4={'fas fa-times'}
                        selector5={'fas fa-times'}/>
                    </div>,
                    <div className="section-6_price_item">
                        <PriceItem
                        image={block2}
                        price={'566 ₽ /мес.'}
                        rate={'Базовый тариф'}
                        text1={'До 3 проектов'}
                        text2={'∞ комнат'}
                        text3={'∞ панорам'}
                        text4={'Можно делиться туром'}
                        text5={'Аналитика поведения внутри модели'}
                        selector1={'fas fa-check'}
                        selector2={'fas fa-check'}
                        selector3={'fas fa-check'}
                        selector4={'fas fa-check'}
                        selector5={'fas fa-times'}/>
                    </div>,
                    <div className="section-6_price_item">
                        <PriceItem
                        image={block3}
                        price={'1 900 ₽ /мес.'}
                        rate={'Продвинуый тариф'}
                        text1={'До 15 проектов'}
                        text2={'∞ комнат'}
                        text3={'∞ панорам'}
                        text4={'Можно делиться туром'}
                        text5={'Аналитика поведения внутри модели'}
                        selector1={'fas fa-check'}
                        selector2={'fas fa-check'}
                        selector3={'fas fa-check'}
                        selector4={'fas fa-check'}
                        selector5={'fas fa-times'}/>
                    </div>,
                    <div className="section-6_price_item">
                        <PriceItem
                        image={block4}
                        price={'7 100 ₽ /мес.'}
                        rate={'Бизнес тариф'}
                        text1={'До 50 проектов'}
                        text2={'∞ комнат'}
                        text3={'∞ панорам'}
                        text4={'Можно делиться туром'}
                        text5={'Аналитика поведения внутри модели'}
                        selector1={'fas fa-check'}
                        selector2={'fas fa-check'}
                        selector3={'fas fa-check'}
                        selector4={'fas fa-check'}
                        selector5={'fas fa-check'}/>
                    </div>
                ]}/>
            </div>
        </>
    )
}

export default SectionSix;