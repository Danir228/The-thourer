import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppStoreButton from "../../../buttons/appStore";
import GooglePlayButton from "../../../buttons/googlePlay";
import { withTranslation } from "react-i18next";
import { Link as LinkScroll } from "react-scroll";

import apple from "./apple.svg";
import google from "./google.svg";

import "./header-frame.css";

class HeaderFrame extends Component {
  render() {
    const { t } = this.props;
    return (
      <>
        <div className="header-frame">
          <div className="header-frame_item">
            <ul className="header-frame_links">
              <li className="header-frame_link active-frame_link">
                <LinkScroll
                  spy={true}
                  activeClass="activeLink"
                  offset={-120}
                  smooth={true}
                  duration={500}
                  to="section-4"
                  className="navbar_link"
                >
                  {t("thethourer.header.headerFrame.link1")}
                </LinkScroll>
              </li>
              <li className="header-frame_link">
                <LinkScroll
                  spy={true}
                  activeClass="activeLink"
                  offset={-120}
                  smooth={true}
                  duration={500}
                  to="section-6"
                  className="navbar_link"
                >
                  {t("thethourer.header.headerFrame.link2")}
                </LinkScroll>
              </li>
              <li className="header-frame_link">
                <LinkScroll
                  spy={true}
                  activeClass="activeLink"
                  offset={-120}
                  smooth={true}
                  duration={500}
                  to="section-9_title"
                  className="navbar_link"
                >
                  FAQ
                </LinkScroll>
              </li>
              <li className="header-frame_link">
                <LinkScroll
                  spy={true}
                  activeClass="activeLink"
                  offset={-70}
                  smooth={true}
                  duration={500}
                  to="section-9_footer_title"
                  className="navbar_link"
                >
                  {t("thethourer.header.headerFrame.link3")}
                </LinkScroll>
              </li>
            </ul>
            <AppStoreButton customIcon={apple} textButton={"App Store"} />
            <GooglePlayButton
              customIcon={google}
              disabledbtn={"disabled"}
              textButton={"Google Play"}
            />
          </div>
        </div>
      </>
    );
  }
}

export default withTranslation()(HeaderFrame);
