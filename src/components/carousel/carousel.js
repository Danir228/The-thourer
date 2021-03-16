import React from 'react';
import Slider from "react-slick";



// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 480, itemsToShow: 1, itemsToScroll: 3 },
//   { width: 768, itemsToShow: 4, itemsToScroll: 3 },
//   { width: 1200, itemsToShow: 5 }
// ];

export default function SimpleSlider({items, center, variable, row, sliderow, variable2, slidenum, dot}) {
  let settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          slidesPerRow: slidenum,
          variableWidth: false,
          centerMode: false,
          dots: false,
          swipeToSlide: false,
          swipe: false,
          infinite: false,
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: dot === undefined ? true : dot,
          rows: 1,
          slidesPerRow: slidenum,
          variableWidth: false,
          centerMode: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: dot === undefined ? true : dot,
          rows: row,
          slidesPerRow: sliderow
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true,
          slidesToScroll: 1,
          rows: 1,
          variableWidth: variable
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: dot === undefined ? true : dot,
          slidesToScroll: 1,
          centerMode: center,
          variableWidth: variable2,
          rows: 1,
          slidesPerRow: 1
        }
      }
    ]
  };
  return (
    <>
      <Slider {...settings}>
        {items.map((item, index) => <div className="slider_item" key={index}>{item}</div>)}
      </Slider>
    </>
  )
}