import React from "react";
import "./Kom.scss";
import "../Banner/Banner.scss";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Footer from '../../components/Footer/Footer'

const Kompaniya = () => {
  return (
    <>
      <p
        style={{
          color: "rgb(215, 215, 215)",
          position: "relative",
          bottom: "-50px",
        }}
        className="container"
      >{`Главная > Компания`}</p>
      <div className="kom_flex container">
        <div className="kom">
          <h1 className="hh1">О компании</h1>
          <div className="kom_boxes">
            <h1>170+ </h1>
            <p>Товаров</p>
          </div>
          <div className="kom_boxes">
            <h1>1000+ </h1>
            <p>Довольных покупателей</p>
          </div>
          <div className="kom_boxes">
            <h1>170+ </h1>
            <p className="">Товаров</p>
          </div>
        </div>
        <div className="kom_text">
          <p>
            {" "}
            Интернет-магазин NORNLIGHT предлагает широкий ассортимент
            светильников для освещения вашего дома или офиса. У нас вы найдете
            разнообразные модели светильников, от современных и стильных до
            классических и элегантных. Мы предлагаем качественные и надежные
            светильники от лучших производителей, которые подарят вам комфорт и
            уют
          </p>
          <p>
            Покупая светильники в нашем интернет-магазине, вы получаете отличное
            соотношение цены и качества. Мы осуществляем доставку по всей
            России, чтобы каждый клиент мог насладиться прекрасным светом и
            удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш
            дом в оазис тепла и света с NORNLIGHT!
          </p>
          <p>
            {" "}
            Интернет-магазин NORNLIGHT предлагает широкий ассортимент
            светильников для освещения вашего дома или офиса. У нас вы найдете
            разнообразные модели светильников, от современных и стильных до
            классических и элегантных. Мы предлагаем качественные и надежные
            светильники от лучших производителей, которые подарят вам комфорт и
            уют.
          </p>
          <p>
            Покупая светильники в нашем интернет-магазине, вы получаете отличное
            соотношение цены и качества. Мы осуществляем доставку по всей
            России, чтобы каждый клиент мог насладиться прекрасным светом и
            удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш
            дом в оазис тепла и света с NORNLIGHT!
          </p>
        </div>
      </div>
      <Banner />
      <Blog />
      <Footer />
    </>
  );
};

export default Kompaniya;
