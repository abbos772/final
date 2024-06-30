import React from "react";
import "./Product.scss";
import imga from "./img/pro.png";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
const Product = () => {
  return (
    <div className="container">
      <div className="product_flex">
        <div className="pro_text">
          <h1>Популярные товары</h1>
          <button>Все товары</button>
        </div>
        <div className="product_boxes">
          <div className="product_box">
            <div className="heart">
              <FaRegHeart />
            </div>
            <div className="pro_img">
              <img src={imga} alt="" />
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
          <div className="product_box">
            <div className="heart">
              <FaRegHeart />
            </div>
            <div className="pro_img">
              <img src={imga} alt="" />
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
          <div className="product_box">
            <div className="heart">
              <FaRegHeart />
            </div>
            <div className="pro_img">
              <img src={imga} alt="" />
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
          <div className="product_box">
            <div className="heart">
              <FaRegHeart />
            </div>
            <div className="pro_img">
              <img src={imga} alt="" />
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
          <div className="product_box">
            <div className="heart">
              <FaRegHeart />
            </div>
            <div className="pro_img">
              <img src={imga} alt="" />
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
          <div className="product_box">
            <div className="heart">
              <FaRegHeart />
            </div>
            <div className="pro_img">
              <img src={imga} alt="" />
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
          <div className="product_box">
            <div className="heart">
              <FaRegHeart />
            </div>
            <div className="pro_img">
              <img src={imga} alt="" />
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
          <div className="product_box">
            <div className="heart">
              <FaRegHeart />
            </div>
            <div className="pro_img">
              <img src={imga} alt="" />
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
      </div>
    </div>
  );
};

export default Product;
