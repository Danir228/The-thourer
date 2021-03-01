import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SectionFirst from './components/section-1';
import SectionSecond from './components/section-2';

import './main.css';

export default class Main extends Component {
    render() {
        return (
            <main className="main">
                <Container className="main_items">
                    <Row className="flex-column">
                        <Col className="section-1">
                            <SectionFirst hidden/>
                        </Col>
                        <Col className="section-2">
                        <SectionSecond/>
                        </Col>
                        <Col className="section-3"></Col>
                    </Row>
                </Container>
            </main>
        )
    }
}