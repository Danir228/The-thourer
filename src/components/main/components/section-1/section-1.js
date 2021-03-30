import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppStoreButton from '../../../buttons/appStore';
import Modal from '../../../modal';
import '../../../../i18n';

import './section-1.css';
import { withTranslation } from 'react-i18next';

class SectionFirst extends Component {
    state = {
        isVisible: false
    }

    handleMouseEnter = () => {
        this.setState({isVisible: !this.state.isVisible});
    }

    handleMouseLeave = () => {
        this.setState({isVisible: !this.state.isVisible});
    }

    componentDidMount () {
        console.log(this.props.i18n)
    }

    render() {
        const { t } = this.props;
        const enter = this.handleMouseEnter;
        const leave = this.handleMouseLeave;
        return (
            <div className="section-first d-flex">
                <div className="section-first_left">
                    <h1>{t("thethourer.main.section1.title.title1")}<span className="section-first_left_bold">{t("thethourer.main.section1.title.title2")}</span></h1>
                    <p>{t("thethourer.main.section1.part1")}</p>
                    <AppStoreButton
                    onEnter={enter}
                    onLeave={leave}
                    textButton={'App Store'}/>
                </div>
                <div className="section-first_right"></div>
                    <Modal
                    visible={this.state.isVisible}
                    text={t("thethourer.modal.part1")}/>
            </div>
        )
    }
}


export default withTranslation()(SectionFirst);