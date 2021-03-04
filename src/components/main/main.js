import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SectionFirst from './components/section-1';
import SectionSecond from './components/section-2';
import SectionThird from './components/section-3';
import SectionFor from './components/section-4';
import SectionFive from './components/section-5';
import SectionSix from './components/section-6';
import SectionSeven from './components/section-7';
import './main.css';

export default class Main extends Component {
    render() {
        return (
            <main className="main">
                    <Row className="flex-column">
                        <Col className="section-1">
                            <Container>
                                <SectionFirst/>
                            </Container>
                        </Col>
                        <Col className="section-2">
                            <Container>
                                <SectionSecond/>
                            </Container>
                        </Col>
                        <Col className="section-3">
                            <Container>
                                <SectionThird/>
                            </Container>
                        </Col>
                       <Col className="section-4">
                           <Container>
                                <SectionFor/>
                           </Container>
                        </Col>
                        <Col className="section-5">
                            <Container>
                                <SectionFive/>
                            </Container>
                        </Col>
                        <Col className="section-6">
                            <Container>
                                <SectionSix/>
                            </Container>
                        </Col>
                        <div className="section-7">
                            <SectionSeven/>
                        </div>
                    </Row>
            </main>
        )
    }
}