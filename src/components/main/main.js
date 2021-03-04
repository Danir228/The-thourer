import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SectionFirst from './components/section-1';
import SectionSecond from './components/section-2';
import SectionThird from './components/section-3';
import SectionFor from './components/section-4';
import SectionFive from './components/section-5';
import SectionSix from './components/section-6';

import './main.css';

export default class Main extends Component {
    render() {
        return (
            <main className="main">
                <Container className="main_items">
                    <Row className="flex-column">
                        <Col className="section-1">
                            <SectionFirst/>
                        </Col>
                        <Col className="section-2">
                        <SectionSecond/>
                        </Col>
                        <Col className="section-3">
                            <SectionThird/>
                        </Col>
                        <Col className="section-4">
                            <SectionFor/>
                        </Col>
                        <Col className="section-5">
                            <SectionFive/>
                        </Col>
                        <Col className="section-6">
                            <SectionSix/>
                        </Col>
                    </Row>
                </Container>
            </main>
        )
    }
}