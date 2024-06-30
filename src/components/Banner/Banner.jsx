import React from "react";
import "./Banner.scss";
import check from "./img/sc.png";
import check1 from "./img/sc1.png";
import bir from "./img/bir.png";
import ikki from "./img/ikki.png";
import uch from "./img/uch.png";
const Banner = () => {
  return (
    <div className="container">
      <div className="banner">
        <div className="banner_text">
          <h1>Только проверенные бренды</h1>
          <div className="banner_check">
            <img src={check} alt="" />
            <img src={check1} alt="" />
          </div>
        </div>
        <div className="banner_boxes">
          <div className="banner_box">
            <img src={bir} alt="" />
          </div>
          <div className="banner_box">
            <img src={ikki} alt="" />
          </div>
          <div className="banner_box">
            <img src={uch} alt="" />
          </div>
          <div className="banner_box">
            <img src={bir} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
