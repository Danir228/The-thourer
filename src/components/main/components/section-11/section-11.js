import React from "react";
import SimpleSlider from "../../../carousel";

import intel from "./images/intel.svg";
import canonback from "./images/canonback.svg";
import canon from "./images/canon.svg";
import sumsung from "./images/sumsung.svg";

import "./section-11.css";

export default function SectionEleven() {
  return (
    <>
      <div className="section-11_item">
        <SimpleSlider
          dot={false}
          slidenum={5}
          row={1}
          sliderow={1}
          center={true}
          variable={true}
          variable2={true}
          items={[
            <div className="section-11_image">
              <img src={intel} alt="intel..." className="intel" />
            </div>,
            <div className="section-11_image">
              <img src={canonback} alt="canonback..." className="canon" />
            </div>,
            <div className="section-11_image">
              <img src={intel} alt="intel..." className="intel" />
            </div>,
            <div className="section-11_image">
              <img src={canon} alt="canon..." className="canon" />
            </div>,
            <div className="section-11_image">
              <img src={sumsung} alt="sumsung..." className="sumsung" />
            </div>,
          ]}
        />
      </div>
    </>
  );
}
