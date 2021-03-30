import React, { Component } from 'react';
import AppStoreButton from '../../../buttons/appStore';
import GooglePlayButton from '../../../buttons/googlePlay';
import Modal from '../../../modal';
import { withTranslation } from 'react-i18next';

import telephone from './telephone.svg';

import './section-10.css';

class SectionTen extends Component {

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
        const { t } = this.props;
        const enter = this.handleMouseEnter;
        const leave = this.handleMouseLeave;

        return (
            <>
                <div className="section-10_item">
                    <div className="section-10_item-1">
                        <h1 className="section-10_title">{t("thethourer.main.section10.title1.child1")} <span className="section-10_title_item">{t("thethourer.main.section10.title1.child2")}</span></h1>
                        <h2 className="section-10_subtitle">{t("thethourer.main.section10.title2")}</h2>
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
                    text={t("thethourer.modal.part1")}/>
            </>
        )
    }
}

export default withTranslation()(SectionTen);