import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <p className="p_text">
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
      <div className="optimos">
        <h1>Характеристика</h1>
        <div className="opt_boxes">
          <div className="opt_box">
            <h4>Цвет</h4>
            <p>Жёлтый</p>
          </div>
          <div className="opt_box">
            <h4>Год</h4>
            <p>2016</p>
          </div>
          <div className="opt_box">
            <h4>Диаметр колеса</h4>
            <p>27.5</p>
          </div>
          <div className="opt_box">
            <h4>Материал рамы</h4>
            <p>Карбон</p>
          </div>
          <div className="opt_box">
            <h4>Размер</h4>
            <p>L</p>
          </div>
          <div className="opt_box">
            <h4>Страна</h4>
            <p>Швейцария</p>
          </div>
          <div className="opt_box">
            <h4>Производитель</h4>
            <p>Scott</p>
          </div>
          <div className="opt_box">
            <h4>Покрышки</h4>
            <p>
              Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless Easy /
              PaceStar compound
            </p>
          </div>
          <div className="opt_box">
            <h4>Рама</h4>
            <p>
              Scale Carbon / HMX-технология / технология IMP / Коническая
              рулевая труба / BB92 / Технология SDS / Дропауты IDS SL
            </p>
          </div>
          <div className="opt_box">
            <h4>Подседельный Штырь</h4>
            <p>
              Ritchey WCS 700 Series: Carbon Link FlexLogic / 31.6mm 900 Series:
              Carbon 2B SDS / 34.9mm
            </p>
          </div>
          <div className="opt_box">
            <h4>Седло</h4>
            <p>Ritchey WCS Streem V3 Titanium rails</p>
          </div>
          <div className="opt_box">
            <h4>Вилка</h4>
            <p>
              Rock Shox SID RL3 Air / демпфер DNA3 3-режима / 15mm QR axle /
              коническая рулевая труба / Удалённая блокировка, регулировка
              отскока / ход 100mm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
