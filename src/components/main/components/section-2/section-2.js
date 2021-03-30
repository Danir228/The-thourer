import React from 'react';
import { Component } from 'react';
import { withTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'reactstrap';
import AppStoreButton from '../../../buttons/appStore';
import Modal from '../../../modal';

import './section-2.css';

class SectionSecond extends Component {
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
                <div className="section-second_left"></div>
                <Container>
                    <div className="section-second d-flex">
                        <div className="section-second_right">
                            <h1>The Tourer</h1>
                            <p>
                                {t("thethourer.main.section2.part1.start")} <span className="section-2_number">3</span>{t("thethourer.main.section2.part1.end")}
                            </p>
                            <div className="section-second_btn">
                                <AppStoreButton
                                    onEnter={enter}
                                    onLeave={leave}
                                    textButton={t("thethourer.main.section2.buttonText")}
                                />
                            </div>
                        </div>
                    </div>
                </Container>
                <Modal
                visible={this.state.isVisible}
                text={t("thethourer.modal.part1")}/>
            </>

        )
    }
}


export default withTranslation()(SectionSecond);