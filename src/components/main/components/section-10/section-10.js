import React, { Component } from 'react';
import AppStoreButton from '../../../buttons/appStore';
import GooglePlayButton from '../../../buttons/googlePlay';
import Modal from '../../../modal';

import telephone from './telephone.svg';

import './section-10.css';

export default class SectionTen extends Component {

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
                <div className="section-10_item">
                    <div className="section-10_item-1">
                        <h1 className="section-10_title">Скачайте приложение прямо <span className="section-10_title_item">сейчас!</span></h1>
                        <h2 className="section-10_subtitle">Вы всегда можете воспользоваться бесплатной версией, чтобы ознакомиться с функционалом приложения.</h2>
                        <div className="section-10_buttons">
                            <AppStoreButton
                                onEnter={enter}
                                onLeave={leave}
                                className="section-10_app"
                                textButton={'App Store'}/>
                            <GooglePlayButton
                                disabledbtn={'disabled'}
                                className="section-10_google"
                                textButton={'Google Play'}/>
                        </div>
                    </div>
                    <div className="section-10_item-2">
                        <img src={telephone} alt={telephone}/>
                    </div>
                </div>
                <Modal
                    visible={this.state.isVisible}
                    text={'Наведите камеру вашего телефона или нажмите на кнопку для перехода в App Store'}/>
            </>
        )
    }
}