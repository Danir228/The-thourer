import React, { Component } from 'react';
import play from '../images/play.svg';

export default class SectionFiveItem extends Component {
  render() {
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
                <span>Виртуальный тур по гостинному залу</span>
                <span>Снято на Iphone 11</span>
              </div>
            </div>
          </div>
      </>
    )
  }
}