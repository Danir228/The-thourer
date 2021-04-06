import React, { Component } from "react";
import { withTranslation } from "react-i18next";

import "./section-7.css";

class SectionSeven extends Component {
  render() {
    const { t } = this.props;
    return (
      <>
        <div className="section-7_top">
          <span className="section-7_top_item">
            {t("thethourer.main.section7.part1.child1")}{" "}
            <span>{t("thethourer.main.section7.part1.child2")}</span>
          </span>
          <div className="section-7_bottom">
            <div className="section-7_bottom_body">
              <div>
                <span className="section-7_bottom_number">13257</span>
                <span className="section-7_bottom_text">
                  {t("thethourer.main.section7.part2.child1")}
                  <sup>{t("thethourer.main.section7.part2.child2")}</sup>{" "}
                  {t("thethourer.main.section7.part2.child3")}
                </span>
              </div>
              <div>
                <span className="section-7_bottom_number">1277</span>
                <span className="section-7_bottom_text">
                  {t("thethourer.main.section7.part3")}
                </span>
              </div>
              <div>
                <span className="section-7_bottom_number">845</span>
                <span className="section-7_bottom_text">
                  {t("thethourer.main.section7.part4")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withTranslation()(SectionSeven);
