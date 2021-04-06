import React from "react";

import google from "./google.svg";
import "./googlePlay.css";

const GooglePlayButton = ({ textButton, disabledbtn, customIcon }) => {
  const icon = customIcon;
  const src = icon === undefined ? google : icon;
  return (
    <>
      <button className="google-play_btn" disabled={disabledbtn}>
        <img src={src} alt={src} />
        <span>{textButton}</span>
      </button>
    </>
  );
};

export default GooglePlayButton;
