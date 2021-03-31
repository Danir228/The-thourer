import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';
import SectionBlock from './components/sectionBlock';
import { withTranslation } from 'react-i18next';

import './section-3.css';
import block1 from './components/images/block1.svg';
import block2 from './components/images/block2.svg';
import block3 from './components/images/block3.svg';
import block4 from './components/images/block4.svg';
import block5 from './components/images/block5.svg';
import block6 from './components/images/block6.svg';

class SectionThird extends Component {
    render() {
        const { t } = this.props;
        return (
            <>
                <Row>
                    <Col>
                        <h1 className="section-3_title">{t("thethourer.main.section3.title.start")} <span className="textupdate">{t("thethourer.main.section3.title.center")}</span> {t("thethourer.main.section3.title.end")}</h1>
                    </Col>
                </Row>
                <Row className="section-3_item-1 mx-0">
                    <Col className="mb-3">
                    <SectionBlock
                        image={block1}
                        title={t("thethourer.main.section3.part1.title")}
                        title2={t("thethourer.main.section3.part1.title2")}
                        text={`${t("thethourer.main.section3.part1.child1")}<span class="textupdate"> ${t("thethourer.main.section3.part1.child2")}</span>`}/>
                    </Col>
                    <Col className="mb-3">
                        <SectionBlock
                        image={block2}
                        title={t("thethourer.main.section3.part2.title")}
                        title2={t("thethourer.main.section3.part2.title2")}
                        text={`${t("thethourer.main.section3.part2.child1")}<span class="textupdate"> ${t("thethourer.main.section3.part2.child2")}</span> ${t("thethourer.main.section3.part2.child3")}`}/>
                    </Col>
                    <Col className="mb-3 marginblock">
                        <SectionBlock
                        image={block3}
                        title={t("thethourer.main.section3.part3.title")}
                        title2={t("thethourer.main.section3.part3.title2")}
                        text={`${t("thethourer.main.section3.part3.child1")}<span class="textupdate"> ${t("thethourer.main.section3.part3.child2")}</span> ${t("thethourer.main.section3.part3.child3")} <span class='textupdate'>${t("thethourer.main.section3.part3.child4")}</span>`}/>
                    </Col>
                    <Col className="mb-3">
                        <SectionBlock
                        image={block4}
                        title={t("thethourer.main.section3.part4.title")}
                        title2={t("thethourer.main.section3.part4.title2")}
                        text={`${t("thethourer.main.section3.part4.child1")}<span class="textupdate"> ${t("thethourer.main.section3.part4.child2")}</span> ${t("thethourer.main.section3.part2.child3")}`}/>
                    </Col>
                    <Col>
                        <SectionBlock
                        image={block5}
                        title={t("thethourer.main.section3.part5.title")}
                        title2={t("thethourer.main.section3.part5.title2")}
                        text={`${t("thethourer.main.section3.part5.child1")}<span class='textupdate'> ${t("thethourer.main.section3.part5.child2")}</span> ${t("thethourer.main.section3.part5.child3")}`}/>
                    </Col>
                    <Col className="marginblock">
                        <SectionBlock
                        image={block6}
                        title={t("thethourer.main.section3.part6.title")}
                        title2={t("thethourer.main.section3.part6.title2")}
                        text={`${t("thethourer.main.section3.part6.child1")}<span class='textupdate'> ${t("thethourer.main.section3.part6.child2")}</span> ${t("thethourer.main.section3.part6.child3")} <span class='textupdate'>${t("thethourer.main.section3.part6.child4")}</span> ${t("thethourer.main.section3.part6.child5")}`}/>
                    </Col>
                </Row>
            </>
        )
    }
}

export default withTranslation()(SectionThird);