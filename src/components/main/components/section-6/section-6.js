import React, { Component } from 'react';
import {Col, Row} from 'reactstrap';
import PriceItem from './components/section-6-price-item';
import SimpleSlider from '../../../carousel';
import { withTranslation } from 'react-i18next';
import WhenItem from './components/section-6-when-item';
import block1 from './components/images/block1.svg';
import block2 from './components/images/block2.svg';
import block3 from './components/images/block3.svg';
import block4 from './components/images/block4.svg';

import './section-6.css';

class SectionSix extends Component {
    render() {
        const { t } = this.props;
        return (
            <>
                <Row>
                    <Col className="section-6_title">
                        <h1 className="section-6_title_item-1">{t("thethourer.main.section6.title.child1")}</h1>
                        <h2 className="section-6_title_item-2">{t("thethourer.main.section6.title.child2")}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col className="section-6_calendar">
                        <WhenItem
                        month={t("thethourer.main.section6.calendar.child1")}
                        quarter={t("thethourer.main.section6.calendar.child2")}
                        percent1={'-5%'}
                        year={t("thethourer.main.section6.calendar.child3")}
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
                            price={t("thethourer.main.section6.part1.child1")}
                            rate={t("thethourer.main.section6.part1.child2")}
                            text1={{start: '', center: ' 1 ', end: `${t("thethourer.main.section6.part1.child3")}` }}
                            text2={{start: '2', end: ` ${t("thethourer.main.section6.part1.child4")}` }}
                            text3={{start: '4', end: ` ${t("thethourer.main.section6.part1.child5")}` }}
                            text4={t("thethourer.main.section6.part1.child6")}
                            text5={t("thethourer.main.section6.part1.child7")}
                            selector1={'fas fa-check'}
                            selector2={'fas fa-check'}
                            selector3={'fas fa-check'}
                            selector4={'fas fa-times'}
                            selector5={'fas fa-times'}/>
                        </div>,
                        <div className="section-6_price_item">
                            <PriceItem
                            image={block2}
                            price={t("thethourer.main.section6.part2.child1")}
                            rate={t("thethourer.main.section6.part2.child2")}
                            text1={{start: `${t("thethourer.main.section6.part2.child3")}`, center: ' 3 ', end: `${t("thethourer.main.section6.part2.child4")}` }}
                            text2={{start: '∞', end: ` ${t("thethourer.main.section6.part2.child5")}` }}
                            text3={{start: '∞', end: ` ${t("thethourer.main.section6.part2.child6")}` }}
                            text4={t("thethourer.main.section6.part2.child7")}
                            text5={t("thethourer.main.section6.part2.child8")}
                            selector1={'fas fa-check'}
                            selector2={'fas fa-check'}
                            selector3={'fas fa-check'}
                            selector4={'fas fa-check'}
                            selector5={'fas fa-times'}/>
                        </div>,
                        <div className="section-6_price_item">
                            <PriceItem
                            image={block3}
                            price={t("thethourer.main.section6.part3.child1")}
                            rate={t("thethourer.main.section6.part3.child2")}
                            text1={{start: `${t("thethourer.main.section6.part3.child3")}`, center: ' 15 ', end: `${t("thethourer.main.section6.part3.child4")}` }}
                            text2={{start: '∞', end: ` ${t("thethourer.main.section6.part3.child5")}` }}
                            text3={{start: '∞', end: ` ${t("thethourer.main.section6.part3.child6")}` }}
                            text4={t("thethourer.main.section6.part3.child7")}
                            text5={t("thethourer.main.section6.part3.child8")}
                            selector1={'fas fa-check'}
                            selector2={'fas fa-check'}
                            selector3={'fas fa-check'}
                            selector4={'fas fa-check'}
                            selector5={'fas fa-times'}/>
                        </div>,
                        <div className="section-6_price_item">
                            <PriceItem
                            image={block4}
                            price={t("thethourer.main.section6.part4.child1")}
                            rate={t("thethourer.main.section6.part4.child2")}
                            text1={{start: `${t("thethourer.main.section6.part4.child3")}`, center: ' 50 ', end: `${t("thethourer.main.section6.part4.child4")}` }}
                            text2={{start: '∞', end: ` ${t("thethourer.main.section6.part4.child5")}` }}
                            text3={{start: '∞', end: ` ${t("thethourer.main.section6.part4.child6")}` }}
                            text4={t("thethourer.main.section6.part4.child7")}
                            text5={t("thethourer.main.section6.part4.child8")}
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
}

export default withTranslation()(SectionSix);