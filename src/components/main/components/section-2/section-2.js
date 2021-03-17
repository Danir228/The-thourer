import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'reactstrap';
import AppStoreButton from '../../../buttons/appStore';
import Modal from '../../../modal';

import './section-2.css';

export default class SectionSecond extends Component {
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
        const enter = this.handleMouseEnter;
        const leave = this.handleMouseLeave;
        return (
            <>
                <div className="section-second_left"></div>
                <Container>
                    <div className="section-second d-flex">
                        <div className="section-second_right">
                            <h1>The Tourer</h1>
                            <p>The Tourer открывает возможность создавать 3D-туры любому желающему.
                            Фотографии и видео рождают в голове больше вопросов, чем ответов.
                            Экономьте время и силы, позволив клиентам виртуально оказаться в помещении, находясь абсолютно в другом месте.</p>
                            <div className="section-second_btn">
                                <AppStoreButton
                                onEnter={enter}
                                onLeave={leave}
                                textButton={'Скачать приложение'}/>
                            </div>
                        </div>
                    </div>
                </Container>
                <Modal
                visible={this.state.isVisible}
                text={'Наведите камеру вашего телефона для перехода в App Store'}/>
            </>

        )
    }
}