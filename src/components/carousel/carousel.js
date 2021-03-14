import React from 'react';
import Slider from "react-slick";



// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 480, itemsToShow: 1, itemsToScroll: 3 },
//   { width: 768, itemsToShow: 4, itemsToScroll: 3 },
//   { width: 1200, itemsToShow: 5 }
// ];

export default function SimpleSlider({items}) {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <Slider {...settings}>
        {items.map(item => <div key={item.index}>{item}</div>)}
      </Slider>
    </>
  )
}