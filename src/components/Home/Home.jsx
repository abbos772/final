import React, { useEffect } from "react";
import "./Home.scss";
import Hero from "../Hero/Hero";
import Katalog from "../Katalog/Katalog";
import Nornlight from "../Nornlight/Nornlight";
import Product from "../Product/Product";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import { useGetProductsQuery } from "../context/api/ProductApi";
import Footer from "../Footer/Footer";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, isLoading } = useGetProductsQuery();
  return (
    <div>
      <div className="container_hero">
        <Hero />
      </div>
      <div className="container">
        <Katalog />
        <Nornlight />
        <Product data={data} isLoading={isLoading} />
        <Banner />
        <Blog />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
