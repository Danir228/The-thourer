import React from "react";

import star from "../images/star.svg";

import "./section-8-item.css";

export default function Rewiew({ text, image1, image2, name }) {
  return (
    <>
      <div className="rewiew_item">
        <img className="rewiew_mark" src={image1} alt={image1}></img>
        <p>{text}</p>
        <div className="rewiew_body">
          <img className="rewiew_man" src={image2} alt={image2} />
          <div className="rewiew_user">
            <span>{name}</span>
            <div className="rewiew_star">
              <img src={star} alt={star}></img>
              <img src={star} alt={star}></img>
              <img src={star} alt={star}></img>
              <img src={star} alt={star}></img>
              <img src={star} alt={star}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
