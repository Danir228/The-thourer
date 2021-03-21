import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppStoreButton from '../../../buttons/appStore';
import Modal from '../../../modal';

import './section-1.css';


export default class SectionFirst extends Component {
    state = {
        isVisible: false
    }

    handleMouseEnter = () => {
        this.setState( prevState => (
            {isVisible: !prevState.isVisible}
        ));
    }

    render() {
        const enter = this.handleMouseEnter;
        return (
            <div className="section-first d-flex">
                <div className="section-first_left">
                    <h1>Предоставьте клиентам возможность прогуляться по помещению <span className="section-first_left_bold">онлайн</span></h1>
                    <p>Создавайте и распространяйте виртуальные туры по помещениям самостоятельно.
                    Все, что вам нужно - мобильный телефон и около часа свободного времени</p>
                    <AppStoreButton
                    onEnter={enter}
                    textButton={'App Store'}/>
                </div>
                <div className="section-first_right"></div>
                    <Modal
                    visible={this.state.isVisible}
                    closeModalWindow={enter}
                    text={'Наведите камеру вашего телефона для перехода в App Store'}/>
            </div>
        )
    }
}