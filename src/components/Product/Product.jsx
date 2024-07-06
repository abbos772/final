import React from "react";
import "./Product.scss";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "../Skeleton/Skeleton";
import { toggleHeart } from "../context/Heart/HeartSlice";
import { addToCart } from "../context/Cart/CartSlice";

const Product = ({ data, isLoading }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.heart.value);
  const carts = useSelector((state) => state.cart.value);

  if (isLoading) {
    return (
      <div className="Container">
        <Skeleton />
      </div>
    );
  }

  const Products = data?.map((el) => (
    <div key={el.id} className="product_box">
      <button onClick={() => dispatch(toggleHeart(el))}>
        <div className="heart">
          {wishlist.some((item) => item.id === el.id) ? (
            <FaHeart style={{ color: "red" }} className="hearts" />
          ) : (
            <FaRegHeart style={{ color: "red" }} className="svg" />
          )}
        </div>
      </button>
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
          <button onClick={() => dispatch(addToCart(el))}>
            {carts.some((item) => item.id === el.id) ? (
              <IoCartOutline className="svg" />
            ) : (
              <IoCartOutline className="svg" />
            )}
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <div className="product_flex">
        <div className="pro_text">
          <h1>Популярные товары</h1>
          <Link to={"/allproducts"}>
            <button>Все товары</button>
          </Link>
        </div>
        <div className="product_boxes">{Products}</div>
      </div>
      <Link to={"/allproducts"}>
        <button className="btn_0">Все товары</button>
      </Link>
    </div>
  );
};

export default Product;
