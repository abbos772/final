import React from "react";
import "./Home.scss";
import Hero from "../Hero/Hero";
import Katalog from "../Katalog/Katalog";
import Nornlight from "../Nornlight/Nornlight";
import Product from "../Product/Product";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import { useGetProductsQuery } from "../context/api/ProductApi";
const Home = () => {
  const { data } = useGetProductsQuery();
  return (
    <div>
      <div className="container_hero">
        <Hero />
      </div>
      <div className="container">
        <Katalog />
        <Nornlight />
        <Product data={data} />
        <Banner />
        <Blog />
      </div>
    </div>
  );
};

export default Home;
