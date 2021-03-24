import React, { Component } from 'react';

import play from '../images/play.svg';

export default class SectionFiveItem extends Component {

  state = {
    isVisible: false
  }

  handleMouseEnter = () => {
      this.setState({isVisible: !this.state.isVisible});
  }

  handleMouseLeave = () => {
      this.setState({isVisible: !this.state.isVisible});
  }

  render() {
    return (
      <>
          <div
          className="section-5_image"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}>
            <img src={this.props.image} alt={this.props.image}/>
            {this.state.isVisible && <div>
              <div className="section-5_play">
                <img src={play} alt={play}></img>
              </div>
              <div className="section-5_image_text">
                <span>Виртуальный тур по гостинному залу</span>
                <span>Снято на Iphone 11</span>
              </div>
            </div>}
          </div>
      </>
    )
  }
}