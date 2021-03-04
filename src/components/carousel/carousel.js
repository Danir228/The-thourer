import React from 'react';
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

export default function Slider({items}) {
  return (
    <>
      <Carousel breakPoints={breakPoints} showArrows={false}>
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </Carousel>
    </>
  )
}