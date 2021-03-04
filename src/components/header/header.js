import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppStoreButton from '../buttons/appStore';
import GooglePlayButton from '../buttons/googlePlay';

import './header.css';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <header className="header">
            <Container>
                <Navbar className="navbar_menu" light expand="lg">
                    <NavbarBrand href="/" className="logo"></NavbarBrand>
                    <NavbarBrand href="/" className="language">EN</NavbarBrand>
                    <NavbarToggler onClick={toggle} className="navbar_menu_btn" />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="me-auto" navbar>
                            <NavItem>
                            <NavLink className="navbar_menu_link" href="/">Как это работает</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink className="navbar_menu_link" href="/">Тарифы</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink className="navbar_menu_link" href="/">FAQ</NavLink>
                            </NavItem>
                            <NavItem className="header_app_btn">
                                <AppStoreButton
                                textButton={'AppStore'}/>
                            </NavItem>
                            <NavItem className="header_google_btn">
                                <GooglePlayButton
                                textButton={'Google Play'}/>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Container>
        </header>
    )
}

export default Header;