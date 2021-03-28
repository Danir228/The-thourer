import React, { Component } from 'react';
import {Col, Row} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SectionForItem from '../section-4-item';
import MobItemBlock from '../section-4-mob-item/components/mob_item_block';

import device from '../../Device.png';
import gif_1 from './../../1.gif';
import gif_2 from './../../2.gif';
import gif_3 from './../../3.gif';
import gif_4 from './../../4.gif';

import './section-4-mob-item.css';

export default class SectionForMobItem extends Component {

    state = {
        first: true,
        second: false,
        third: false,
        for: false
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

    render() {
        return (
            <>
                <Row className="w-100">
                    <Col>
                        <Row className="mob_item_top mx-0 w-100">
                            <Col className="mob_item_top_item w-100 px-0 show d-flex justify-content-center">
                                {this.state.first && <MobItemBlock
                                    number={`<span class="num_update">1</span>`}
                                    title={'Построение планировок'}
                                    text={'Составляйте планировку помещения с помощью камеры вашего устройства'}
                                />}
                            </Col>
                            <Col className="mob_item_top_item w-100 px-0 d-flex justify-content-center">
                                {this.state.second && <MobItemBlock
                                    number={`<span class="num_update">2</span>`}
                                    title={'Съемка панорам'}
                                    text={'Передавайте цельную окружающую картину благодаря панораме 360° '}
                                />}
                            </Col>
                            <Col className="mob_item_top_item w-100 px-0 d-flex justify-content-center">
                                {this.state.third && <MobItemBlock
                                    number={`<span class="num_update">3</span>`}
                                    title={'Создание виртуальных туров'}
                                    text={'Собирайте созданные материалы в единый виртуальный тур'}
                                />}
                            </Col>
                            <Col className="mob_item_top_item w-100 px-0 d-flex justify-content-center">
                                {this.state.for && <MobItemBlock
                                    number={`<span class="num_update">4</span>`}
                                    title={'Делитесь созданными турами'}
                                    text={'Отправьте ссылку на виртуальный тур или вставьте проигрыватель на свой сайт'}
                                />}
                            </Col>
                        </Row>
                        <Row className="mob_item_body">
                            <Col className="mob_item_image">
                                <img src={device} alt={device}/>
                                {this.state.first && <img className="section-4_image-gifs" src={gif_1} alt={'...loading'}></img>}
                                {this.state.second && <img className="section-4_image-gifs" src={gif_2} alt={'...loading'}></img>}
                                {this.state.third && <img className="section-4_image-gifs" src={gif_3} alt={'...loading'}></img>}
                                {this.state.for && <img className="section-4_image-gifs" src={gif_4} alt={'...loading'}></img>}
                            </Col>
                            <Col className="mob_item_btn">
                                <div>
                                    <SectionForItem
                                        btnIndex={1}
                                        func={this.switchBtn}
                                        activeClass={this.state.first}
                                        number={`<span class="num_update">1</span>`}/>
                                </div>
                                <div>
                                    <SectionForItem
                                        btnIndex={2}
                                        func={this.switchBtn}
                                        activeClass={this.state.second}
                                        number={`<span class="num_update">2</span>`}/>
                                </div>
                                <div>
                                    <SectionForItem
                                        btnIndex={3}
                                        func={this.switchBtn}
                                        activeClass={this.state.third}
                                        number={`<span class="num_update">3</span>`}/>
                                </div>
                                <div className="mb-0">
                                    <SectionForItem
                                        btnIndex={4}
                                        func={this.switchBtn}
                                        activeClass={this.state.for}
                                        number={`<span class="num_update">4</span>`}/>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </>
        )
    }
}