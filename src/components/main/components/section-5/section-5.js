import React, { Component } from 'react';
import SimpleSlider from "../../../carousel";
import SectionFiveItem from './components/section-5-item';
import Player from './components/section-5-player';
import { withTranslation } from 'react-i18next';

import img1 from './components/images/1.png';
import img2 from './components/images/2.png';

import './section-5.css';

class SectionFive extends Component {

  state = {
    open: false
  }

  openPlayer = () => {
    this.setState({open: !this.state.open});
  }

  render() {
    const { t } = this.props;
    return (
      <>
        <div className="section-5_item">
          <h1 className="section-5_title">{t("thethourer.main.section5.title.start")} <span className="textupdate">{t("thethourer.main.section5.title.center")}</span> {t("thethourer.main.section5.title.end")}</h1>
          <SimpleSlider
            slidenum={2}
            row={1}
            sliderow={1}
            variable={false}
            variable2={false}
            center={false}
            items={[
              <SectionFiveItem func={this.openPlayer} image={img1}/>,
              <SectionFiveItem func={this.openPlayer} image={img2}/>,
            ]}
          />
          <Player
            openModal={this.state.open}
            func={this.openPlayer}/>
        </div>
      </>
    )
  }
}

export default withTranslation()(SectionFive);


