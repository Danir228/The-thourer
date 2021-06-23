import React from "react";

import "./sectionBlock.css";

function SectionBlock({ image, title, text, title2 }) {
  return (
    <div className="sectionblock_item">
      <img src={image} alt={image}></img>
      <h1 className="sectionblock_item_title1">{title}</h1>
      <h1 className="sectionblock_item_title2">{title2}</h1>
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
    </div>
  );
}

export default SectionBlock;
