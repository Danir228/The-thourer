import React, { Component } from 'react';
import Rewiew from './components/section-8-item';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleSlider from '../../../carousel';

import man from './components/images/man.svg';
import mark from './components/images/mark.svg';

import './section-8.css';
import { withTranslation } from 'react-i18next';

class SectionEight extends Component {
    render() {
        const { t } = this.props;
        return (
            <>
                <div className="section-8_item">
                    <h1>{t("thethourer.main.section8.title.child1")}<span className="textupdate">{t("thethourer.main.section8.title.child2")}</span> {t("thethourer.main.section8.title.child3")}</h1>
                    <div className="section-8_item_body">
                        <SimpleSlider
                        slidenum={3}
                        row={1}
                        sliderow={1}
                        center={false}
                        variable={true}
                        variable2={false}
                        items={[
                            <Rewiew
                            image1={mark}
                            text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'}
                            image2={man}
                            name={'Annette Black'}/>,
                            <Rewiew
                            image1={mark}
                            text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'}
                            image2={man}
                            name={'Annette Black'}/>,
                            <Rewiew
                            image1={mark}
                            text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'}
                            image2={man}
                            name={'Annette Black'}/>
                        ]}/>
                    </div>
                </div>
            </>
        )
    }
}

export default withTranslation()(SectionEight);