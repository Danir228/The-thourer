import React from 'react';
import Slider from "react-slick";



// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 480, itemsToShow: 1, itemsToScroll: 3 },
//   { width: 768, itemsToShow: 4, itemsToScroll: 3 },
//   { width: 1200, itemsToShow: 5 }
// ];

export default function SimpleSlider({items, center, variable, adaptive, row, sliderow}) {
  let settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: row,
          slidesPerRow: sliderow
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: variable,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: center,
          variableWidth: variable
        }
      }
    ]
  };
  return (
    <>
      <Slider {...settings}>
        {items.map((item, index) => <div key={index}>{item}</div>)}
      </Slider>
    </>
  )
}