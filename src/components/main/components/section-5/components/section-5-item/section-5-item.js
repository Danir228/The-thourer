import React, { Component } from 'react';
import play from '../images/play.svg';
import { withTranslation } from 'react-i18next';

class SectionFiveItem extends Component {
  render() {
    const { t } = this.props;
    return (
      <>
          <div
          className="section-5_image"
          onClick={this.props.func}>
            <img src={this.props.image} alt={this.props.image}/>
            <div className="player-elements">
              <div className="section-5_play">
                <img src={play} alt={play}></img>
              </div>
              <div className="section-5_image_text">
                <span>{t("thethourer.main.section5.part1.child1")}</span>
                <span>{t("thethourer.main.section5.part1.child2")}</span>
              </div>
            </div>
          </div>
      </>
    )
  }
}

export default withTranslation()(SectionFiveItem);