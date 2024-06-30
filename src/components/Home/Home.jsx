import React from "react";
import "./Home.scss";
import Hero from "../Hero/Hero";
import Katalog from "../Katalog/Katalog";
import Nornlight from "../Nornlight/Nornlight";
import Product from "../Product/Product";
const Home = () => {
  return (
    <div>
      <div className="container_hero">
        <Hero />
      </div>
      <div className="container">
        <Katalog />
        <Nornlight />
        <Product />
      </div>
    </div>
  );
};

export default Home;
