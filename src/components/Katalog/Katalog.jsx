import React from "react";
import { GoArrowRight } from "react-icons/go";
import "./katalog.scss";
import Img from "./img/img.svg";
import Img1 from "./img/img1.svg";
import Img2 from "./img/img2.svg";
import Img3 from "./img/img3.svg";
import Img4 from "./img/img4.svg";
import Img5 from "./img/img5.svg";
import { Link } from "react-router-dom";

const Caralog = () => {
  return (
    <>
      <div className="catalog container">
        <div className="catalog_nav">
          <h3>Каталог</h3>
          <Link to={"/katalogPage"}>
            <button id="katalog">
              Весь каталог <GoArrowRight />{" "}
            </button>
          </Link>
        </div>
        <div className="carts container">
          <div className="cart1">
            <div className="items">
              <h3>Люстры</h3>
              <p>
                {" "}
                От 540₽ <GoArrowRight />{" "}
              </p>
            </div>
            <div className="img_item">
              <img src={Img} alt="img.png" />
            </div>
          </div>
          <div className="cart1">
            <div className="items">
              <h3>Светильники</h3>
              <p>
                От 540₽ <GoArrowRight />{" "}
              </p>
            </div>

            <img src={Img1} alt="img.png" className="img1" />
          </div>
          <div className="cart1">
            <div className="items">
              <h3>Бра</h3>
              <p>
                От 540₽ <GoArrowRight />{" "}
              </p>
            </div>

            <img src={Img2} alt="img.png" />
          </div>
          <div className="cart1">
            <div className="items">
              <h3>Торшеры</h3>
              <p>
                От 540₽ <GoArrowRight />{" "}
              </p>
            </div>
            <img src={Img3} alt="img.png" />
          </div>
          <div className="cart1">
            <div className="items">
              <h3>
                Настольные <br /> лампы
              </h3>
              <p>
                От 540₽ <GoArrowRight />{" "}
              </p>
            </div>

            <img src={Img4} alt="img.png" className="rasm4" />
          </div>
          <div className="cart1">
            <div className="items">
              <h3>Люстры</h3>
              <p>
                От 540₽ <GoArrowRight />{" "}
              </p>
            </div>

            <img src={Img5} alt="img.png" className="rasm4" />
          </div>
        </div>
        <Link to={"/katalogPage"}>
          <button className="btn_0">Весь каталог</button>
        </Link>
      </div>
    </>
  );
};

export default Caralog;
