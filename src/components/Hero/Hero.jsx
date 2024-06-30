import React from "react";
import "./Hero.scss";
import Hero_Swipper from "../Hero_Swipper/Hero_Swipper";
const Hero = () => {
  return (
    <div>
      <div className="hero">
        <Hero_Swipper />
      </div>
    </div>
  );
};

export default Hero;
