import React from "react";
import "./Kat.scss";
import img from "./img/img.svg";
import img1 from "./img/img1.svg";
import img2 from "./img/img2.svg";
import img3 from "./img/img3.svg";
import img4 from "./img/img4.svg";
import img5 from "./img/img5.svg";
import img6 from "./img/img6.svg";
import img7 from "./img/img7.svg";
import img8 from "./img/img8.svg";
import img9 from "./img/img9.svg";
import img10 from "./img/img10.svg";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
const KatalogPage = () => {
  return (
    <div className="container">
      <div className="nav_top_kat">
        <p>Светильники</p>
        <p>Люстры</p>
        <p>Лампы</p>
        <p>Настольные лампы</p>
        <p>Ночники</p>
        <p>Подстветка</p>
        <p>Уличное освещение</p>
        <p>Мебельные установки</p>
      </div>
      <div className="kt">
        <h1>Каталог</h1>
        <div className="kt_boxes">
          <div className="kt_box">
            <div className="kt_text">
              <h4>Люстры</h4>
              <p>От 540₽</p>
            </div>
            <div>
              <img src={img} alt="" />
            </div>
          </div>
          <div className="kt_box">
            <div className="kt_text">
              <h4>Светильники</h4>
              <p>От 540₽</p>
            </div>
            <div>
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="kt_box">
            <div className="kt_text">
              <h4>Бра</h4>
              <p>От 540₽</p>
            </div>
            <div>
              <img src={img2} alt="" />
            </div>
          </div>
          <div className="kt_box">
            <div className="kt_text">
              <h4>Торшеры</h4>
              <p>От 540₽</p>
            </div>
            <div>
              <img src={img3} alt="" />
            </div>
          </div>
          <div className="kt_box">
            <div className="kt_text">
              <h4>
                Настольные <br /> лампы
              </h4>
              <p>От 540₽</p>
            </div>
            <div>
              <img src={img4} alt="" />
            </div>
          </div>
          <div className="kt_box">
            <div className="kt_text">
              <h4>Споты</h4>
              <p>От 540₽</p>
            </div>
            <div>
              <img src={img5} alt="" />
            </div>
          </div>
          <div className="kt_box">
            <div className="kt_text">
              <h4>
                Трековые <br /> светильники
              </h4>
              <p>От 540₽</p>
            </div>
            <div>
              <img src={img6} alt="" />
            </div>
          </div>
          <div className="kt_box">
            <div className="kt_text">
              <h4>
                Уличные <br /> светильники
              </h4>
              <p>От 540₽</p>
            </div>
            <div>
              <img src={img7} alt="" />
            </div>
          </div>
          <div className="kt_box">
            <div className="kt_text">
              <h4>
                Технические <br /> светильники
              </h4>
              <p>От 540₽</p>
            </div>
            <div>
              <img src={img8} alt="" />
            </div>
          </div>
          <div className="kt_box2 show">
            <div className="kt_text">
              <h4>Светодиодные ленты</h4>
              <p>От 540₽</p>
            </div>
            <div>
              <img src={img9} alt="" />
            </div>
          </div>
          <div className="kt_box2 show2">
            <div className="kt_text">
              <h4>Комплектуюшие</h4>
              <p>От 540₽</p>
            </div>
            <div>
              <img src={img10} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Banner />
      <Blog />
    </div>
  );
};

export default KatalogPage;
