import React, { Component } from 'react';
import SimpleSlider from "../../../carousel";
import SectionFiveItem from './components/section-5-item';
import Player from './components/section-5-player';

import img1 from './components/images/1.png';
import img2 from './components/images/2.png';

import './section-5.css';

export default class SectionFive extends Component {

  state = {
    open: false
  }

  openPlayer = () => {
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <>
        <div className="section-5_item">
          <h1 className="section-5_title">Виртуальные туры, созданные при помощи <span className="textupdate">The Tourer</span></h1>
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


