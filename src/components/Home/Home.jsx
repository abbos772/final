import React from "react";
import "./Home.scss";
import Hero from "../Hero/Hero";
import Katalog from "../Katalog/Katalog";
import Nornlight from "../Nornlight/Nornlight";
const Home = () => {
  return (
    <div>
      <div className="container_hero">
        <Hero />
      </div>
      <div className="container">
        <Katalog />
        <Nornlight />
      </div>
    </div>
  );
};

export default Home;
