import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from './components/navMenu';

import './header.css';

function Header() {
    return (
        <header className="header">
            <Container className="header_items">
                <Row className="d-flex">
                    <Col className="logo"></Col>
                    <Col className="nav_menu"><NavMenu/></Col>
                    <Col className="language_page d-flex">
                    <button>EN</button>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header;