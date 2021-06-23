import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import HamburgerMenu from "react-hamburger-menu";
import { Container } from "reactstrap";
import HeaderFrame from "./components/header-frame";
import AppStoreButton from "../buttons/appStore";
import Modal from "../modal";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

import logo from "./logo.svg";

import "./header.css";
import { withRouter } from "react-router";

class Header extends Component {
  state = {
    open: false,
    opacity: "",
    show: false,
    color: false,
    isVisible: false,
    language: "",
  };

  openModal() {
    this.setState((prevState) => ({ show: !prevState.show }));
  }

  closeModal(e) {
    if (e.target.id === "modal") {
      this.setState({ show: false });
    }
  }

  handleClick() {
    this.setState({
      open: !this.state.open,
    });
  }

  listenScrollEvent = () => {
    if (window.scrollY > 30) {
      this.setState({ color: true, opacity: 1 });
    } else if (window.scrollY < 30) {
      this.setState({ color: false, opacity: undefined });
    }
  };

  handleMouseEnter = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  handleMouseLeave = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
    var path = this.props.match.path;
    if (path === "/en") {
      this.props.i18n.changeLanguage("en");
    }
  }

  changeLanguage = () => {
    let lang = this.props.i18n.language;
    if (lang === "ru") {
      this.props.i18n.changeLanguage("en");
    } else if (lang === "en") {
      this.props.i18n.changeLanguage("ru");
    }
  };
  render() {
    const { t, i18n } = this.props;
    const enter = this.handleMouseEnter;
    const leave = this.handleMouseLeave;
    return (
      <header
        className={this.state.color ? "header background_header" : "header"}
      >
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
                color="black"
                borderRadius={4}
                animationDuration={0.5}
              />
            </div>
            <div className="navbar_menu_item">
              <a className="logo" href="/">
                <img src={logo} alt={logo} />
              </a>
              <ul className="navbar_links">
                <LinkScroll
                  activeClass="activeLink"
                  spy={true}
                  offset={-120}
                  smooth={true}
                  duration={500}
                  to="section-4"
                  className="navbar_link"
                >
                  {t("thethourer.header.part1")}
                </LinkScroll>
                <LinkScroll
                  activeClass="activeLink"
                  spy={true}
                  offset={-120}
                  smooth={true}
                  duration={500}
                  to="section-6"
                  className="navbar_link"
                >
                  {t("thethourer.header.part2")}
                </LinkScroll>
                <LinkScroll
                  activeClass="activeLink"
                  spy={true}
                  offset={-120}
                  smooth={true}
                  duration={500}
                  to="section-9"
                  className="navbar_link"
                >
                  FAQ
                </LinkScroll>
              </ul>
            </div>
            <div className="header_btn d-flex">
              <AppStoreButton
                onEnter={enter}
                onLeave={leave}
                stylebtn={this.state.opacity}
                textButton={"App Store"}
              />
              {i18n.language === "ru" && (
                <Link
                  to="/en"
                  className="language"
                  onClick={() => this.changeLanguage()}
                >
                  EN
                </Link>
              )}
              {i18n.language === "en" && (
                <Link
                  to="/"
                  className="language"
                  onClick={() => this.changeLanguage()}
                >
                  RU
                </Link>
              )}
            </div>
          </div>
          {this.state.show && (
            <div id="modal" onClick={(e) => this.closeModal(e)}>
              <Container>
                <HeaderFrame />
              </Container>
            </div>
          )}
          <Modal
            visible={this.state.isVisible}
            text={t("thethourer.modal.part1")}
          />
        </Container>
      </header>
    );
  }
}

export default withTranslation()(withRouter(Header));
