import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'reactstrap';
import HeaderFrame from './components/header-frame';


import logo from './logo.svg';

import './header.css';

function Header() {

    return (
        <header className="header">
            <Container>
                <div className="navbar_menu">
                <div className="hamburger">
                    <span className="hamburger-line"></span>
                </div>
                <div className="hamburger-close">
                    <span className="hamburger-close_line"></span>
                </div>
                    <div className="navbar_menu_item">
                        <a className="logo" href="/"><img src={logo} alt={logo}/></a>
                        <ul className="navbar_links">
                            <li className="navbar_link"><a href="/">Как это работает</a></li>
                            <li className="navbar_link"><a href="/">Тарифы</a></li>
                            <li className="navbar_link"><a href="/">FAQ</a></li>
                        </ul>
                    </div>
                    <a href="/" className="language">EN</a>
                </div>
                <HeaderFrame/>
            </Container>
        </header>
    )
}

export default Header;