import React from 'react';
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 }
];

export default function Slider({items}) {
  return (
    <>
      <Carousel breakPoints={breakPoints} showArrows={false} className="custom_slider">
        {items.map((item, index) => (
          <div className="slider_item" key={index}>{item}</div>
        ))}
      </Carousel>
    </>
  )
}