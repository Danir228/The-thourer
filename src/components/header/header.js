import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HamburgerMenu from 'react-hamburger-menu';
import {Container} from 'reactstrap';
import HeaderFrame from './components/header-frame';
import AppStoreButton from '../buttons/appStore';
import Modal from '../modal';

import logo from './logo.svg';

import './header.css';

export default class Header extends Component {
    state = {
        open: false,
        opacity: '',
        show: false,
        color: '',
        isVisible: false
    }

    openModal() {
        this.setState( prevState => (
        {show: !prevState.show}));
    }

    closeModal(e) {
        if(e.target.id === "modal") {
          this.setState({show: false});
        }
    }

    handleClick() {
        this.setState({
            open: !this.state.open
        });
    }

    listenScrollEvent = () => {
        if (window.scrollY > 30) {
          this.setState({color: 'rgba(255, 255, 255, 0.5)', opacity: 1});
        } else {
          this.setState({color: undefined, opacity: undefined});
        }
    }

    handleMouseEnter = () => {
        this.setState( prevState => (
            {isVisible: !prevState.isVisible}));
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent);
    }

    render() {
        const enter = this.handleMouseEnter;
        return (
            <header className="header" style={{background: this.state.color}}>
                <Container>
                    <div className="navbar_menu">
                    <div className="hamburger" onClick={() => this.openModal()}>
                        <HamburgerMenu
                            isOpen={this.state.show}
                            menuClicked={this.handleClick.bind(this)}
                            width={36}
                            height={0}
                            strokeWidth={4}
                            rotate={0}
                            color='black'
                            borderRadius={4}
                            animationDuration={0.5}
                        />
                    </div>
                        <div className="navbar_menu_item">
                            <a className="logo" href="/"><img src={logo} alt={logo}/></a>
                            <ul className="navbar_links">
                                <li className="navbar_link"><a href="/">Как это работает</a></li>
                                <li className="navbar_link"><a href="/">Тарифы</a></li>
                                <li className="navbar_link"><a href="/">FAQ</a></li>
                            </ul>
                        </div>
                        <div className="header_btn d-flex">
                        <AppStoreButton
                            onEnter={enter}
                            stylebtn={this.state.opacity}
                            textButton={'App Store'}/>
                            <a href="/" className="language">EN</a>
                        </div>
                    </div>
                    {this.state.show && <div id='modal' onClick={(e) => this.closeModal(e)}>
                        <Container>
                            <HeaderFrame/>
                        </Container>
                    </div>}
                    <Modal
                        visible={this.state.isVisible}
                        closeModalWindow={enter}
                        text={'Наведите камеру вашего телефона для перехода в App Store'}
                    />
                </Container>
            </header>
        )
    }
}
