import React, { useState } from "react";
import { useGetProductByIdQuery } from "../context/api/ProductApi";
import { useParams } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import ok from "./img/ok.png";
import "./SinglePage.scss";

const SinglePage = () => {
  let { id } = useParams();
  const { data: product, isLoading: isLoadingProduct } =
    useGetProductByIdQuery(id);
  const [count, setCount] = useState(1);
  const [liked, setLiked] = useState(false);

  if (isLoadingProduct) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="container">
      <div className="text_global">
        <p>{`Главная >`}</p>
      </div>
      <div className="single">
        <div className="singe_img_flex">
          <div className="single_img">
            <img src={product.img} alt="" />
          </div>
          <div className="single_minis">
            <div className="single_mini">
              <img src={product.img} alt="" />
            </div>
            <div className="single_mini">
              <img src={product.img} alt="" />
            </div>
            <div className="single_mini">
              <img src={product.img} alt="" />
            </div>
            <div className="single_mini">
              <img src={product.img} alt="" />
            </div>
          </div>
        </div>
        <div className="single_text">
          <h1>{product.title}</h1>
          <div className="scot_flex">
            <div className="scot">
              <p>Scott</p>
              <p>Артикул : 7655-188</p>
              <p style={{ color: "rgb(77, 147, 44)" }}>В наличии</p>
            </div>
            <div className="scot_ok">
              <img src={ok} alt="" />
            </div>
          </div>
          <div className="sinle_price">
            <h1>{product.price * count}₽</h1>
            <p>{product.price * 1.5}₽</p>
          </div>
          <p>
            Профессиональный гоночный хардтейл для кросс-кантри уровня
            Чемпионата и Кубка Мира. Одна из самых легких рам среди гоночных
            хардтейлов для кросс-кантри.
          </p>
          <div className="count_flex">
            <div className="count">
              <button onClick={handleDecrement}>-</button>
              <span>{count}</span>
              <button onClick={handleIncrement}>+</button>
            </div>
            <button className="btn_trash">В корзину</button>
            <div className="single_like">
              <button
                className="btn_like"
                onClick={toggleLike}
                style={{ color: liked ? "red" : "black" }}
              >
                <IoMdHeartEmpty />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
