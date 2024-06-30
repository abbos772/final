import React from "react";
import "./Product.scss";
import imga from "./img/pro.png";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const Product = ({ data }) => {
  const Products = data?.map((el) => (
    <div>
      <div key={el.id} className="product_box">
        <div className="heart">
          <FaRegHeart />
        </div>
        <div className="pro_img">
          <img src={el.img} width={260} alt="" />
        </div>
        <div className="product_text">
          <h3>
            Встраиваемый <br /> светильник Novotech
          </h3>
          <div className="price">
            <div className="price_old">
              <p>7000₽</p>
              <h3>6 399₽</h3>
            </div>
            <button>
              <IoCartOutline />
            </button>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="container">
      <div className="product_flex">
        <div className="pro_text">
          <h1>Популярные товары</h1>
          <button>Все товары</button>
        </div>
        <div className="product_boxes">{Products}</div>
      </div>
      <button className="btn_0">Все товары</button>
    </div>
  );
};

export default Product;
