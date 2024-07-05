import React from "react";
import "./Blog.scss";
import home from "./img/home1.png";
import home2 from "./img/home2.png";
import check from "./img/Vector.png";
import home3 from "./img/home3.png";
import { Link } from "react-router-dom";
const Blog = () => {
  return (
    <div className="container">
      <div className="blog">
        <div className="blog_text">
          <h1>Блог</h1>
          <Link to={"/blog"}>
            <button>Перейти в блог</button>
          </Link>
        </div>
        <div className="blog_boxes">
          <div className="blog_box">
            <div className="box_img">
              <img src={home} alt="" />
            </div>
            <div className="box_text">
              <div className="box_mini_text">
                <h3>
                  Как правильно освещать <br /> дом снаружи?
                </h3>
                <img src={check} alt="" />
              </div>
              <p>01.01.2024</p>
            </div>
          </div>
          <div className="blog_box">
            <div className="box_img">
              <img src={home2} alt="" />
            </div>
            <div className="box_text">
              <div className="box_mini_text">
                <h3>
                  Как правильно освещать <br /> дом снаружи?
                </h3>
                <img src={check} alt="" />
              </div>
              <p>01.01.2024</p>
            </div>
          </div>
          <div className="blog_box">
            <div className="box_img">
              <img src={home3} alt="" />
            </div>
            <div className="box_text">
              <div className="box_mini_text">
                <h3>
                  Как правильно освещать <br /> дом снаружи?
                </h3>
                <img src={check} alt="" />
              </div>
              <p>01.01.2024</p>
            </div>
          </div>
        </div>
      </div>
      <button className="btn_0">Перейти в блог</button>
      <div className="blog_big_text">
        <h1>
          Производство <br /> светильников
        </h1>
        <div className="pp">
          <p>
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
    </div>
  );
};

export default Blog;
