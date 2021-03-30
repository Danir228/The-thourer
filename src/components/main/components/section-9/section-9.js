import React from 'react';
import { Component } from 'react';
import SectionNineAccordion from './components/section-9-item';
import SocialLink from '../../../buttons/social-link';
import Modal from '../../../modal';
import { withTranslation } from 'react-i18next';

import telegram from './components/images/telegram.svg';
import whatsap from './components/images/whatsap.svg';
import mail from './components/images/mail.svg';
import address from './adress.png';

import './section-9.css';


class SectionNine extends Component {
    state = {
        visible: false
    }

    toggle = (value) => {
        if(value === true) {
            this.setState({visible: value})
        } else {
            this.setState({visible: false})
        }
    }

    render() {
        const { t } = this.props;
        return (
            <div className="section-9_item">
                <Modal
                    visible={this.state.visible}
                    image={address}
                />
                <h1 className="section-9_title">{t("thethourer.main.section9.title.child1")} <span className="textupdate">{t("thethourer.main.section9.title.child2")}</span></h1>
                <SectionNineAccordion
                    visible={false}
                    title={t("thethourer.main.section9.part1.child1")}
                    text1={t("thethourer.main.section9.part1.child2")}
                    text2={t("thethourer.main.section9.part1.child3")}
                    text3={t("thethourer.main.section9.part1.child4")}
                    text4={{start:`${t("thethourer.main.section9.part1.child5")}`, visibleModal: this.state.visible, function: this.toggle, functionName: ` ${t("thethourer.main.section9.part1.child6")} `, end: `${t("thethourer.main.section9.part1.child7")}`}}
                    text5={t("thethourer.main.section9.part1.child8")}
                />
                <SectionNineAccordion
                    visible={false}
                    title1={t("thethourer.main.section9.part2.child1")}
                    title2={t("thethourer.main.section9.part2.child2")}
                    text1={t("thethourer.main.section9.part2.child3")}
                />
                <SectionNineAccordion
                    visible={false}
                    title={t("thethourer.main.section9.part3.child1")}
                    text1={t("thethourer.main.section9.part3.child2")}
                />
                <SectionNineAccordion
                    visible={false}
                    title={t("thethourer.main.section9.part4.child1")}
                    text1={t("thethourer.main.section9.part4.child2")}
                />
                <div className="section-9_footer_title">{t("thethourer.main.section9.part5.child1")} <span className="text"> {t("thethourer.main.section9.part5.child2")}</span></div>
                <div className="section-9_footer_links">
                    <SocialLink
                    image={telegram}/>
                    <SocialLink
                    image={whatsap}/>
                    <SocialLink
                    image={mail}/>
                </div>
            </div>
        )
    }
}

export default withTranslation()(SectionNine);