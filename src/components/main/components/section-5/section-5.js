import React from 'react';
import Carousel from "../../../carousel";
import SectionFiveItem from './components/section-5-item';

import img1 from './components/images/1.png';
import img2 from './components/images/2.png';

import './section-5.css';

export default function SectionFive() {
  return (
    <>
      <h1 className="section-5_title">Виртуальные туры, созданные при помощи <span className="textupdate">The Tourer</span></h1>
      <Carousel
      items={[
        <SectionFiveItem
        image={img1}/>,
        <SectionFiveItem
          image={img2}/>
      ]}/>
    </>
  )
}


