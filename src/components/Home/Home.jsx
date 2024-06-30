import React from "react";
import "./Home.scss";
import Hero from "../Hero/Hero";
import Katalog from "../Katalog/Katalog";
const Home = () => {
  return (
    <div>
      <div className="container_hero">
        <Hero />
      </div>
      <div className="container">
        <Katalog />
      </div>
    </div>
  );
};

export default Home;
