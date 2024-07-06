import React from "react";
import "./Wishes.scss";
import { useSelector, useDispatch } from "react-redux";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toggleHeart } from "../context/Heart/HeartSlice";
import { IoCartOutline } from "react-icons/io5";
import emty from "./emty.png";

const Wishes = () => {
  const wishlist = useSelector((state) => state.heart.value);
  const dispatch = useDispatch();

  const handleToggleHeart = (item) => {
    dispatch(toggleHeart(item));
  };

  let wish =
    wishlist && wishlist.length > 0 ? (
      wishlist.map((item) => (
        <div key={item.id} className="product_box">
          <button onClick={() => handleToggleHeart(item)}>
            <div className="heart">
              {wishlist.some((wishlistItem) => wishlistItem.id === item.id) ? (
                <FaHeart style={{ color: "red" }} className="hearts" />
              ) : (
                <FaRegHeart style={{ color: "red" }} className="svg" />
              )}
            </div>
          </button>
          <div className="pro_img">
            <img src={item.img} width={260} alt={item.title} />
          </div>
          <div className="product_text">
            <Link to={`product/${item.id}`}>
              <h3>
                {item.title} - {item.desc}
              </h3>
            </Link>
            <div className="price">
              <div className="price_old">
                <p>{item.price * 1.5}₽</p>
                <h3>{item.price}₽</h3>
              </div>
              <button>
                <IoCartOutline />
              </button>
            </div>
          </div>
        </div>
      ))
    ) : (
      <div className="empty-wishlist Container">
        <img src={emty} alt="Empty wishlist" />
      </div>
    );

  return (
    <>
      <div className="container">
        <div className="product_flex">
          <div className="pro_text">
            <h1>Популярные товары</h1>
            <button>Все товары</button>
          </div>
          <div
            className="product_boxes"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              gap: "15px",
            }}
          >
            {wish}
          </div>
        </div>
        <button className="btn_0">Все товары</button>
      </div>
    </>
  );
};

export default Wishes;
