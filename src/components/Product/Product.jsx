import React from "react";
import "./Product.scss";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
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
          <Link to={`product/${el.id}`}>
            <h3>
              {el.title} - {el.desc}
            </h3>
          </Link>
          <div className="price">
            <div className="price_old">
              <p>{el.price * 1.5}₽</p>
              <h3>{el.price}₽</h3>
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
