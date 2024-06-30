import React, { useState } from "react";
import { Link } from "react-router-dom";
import rasm from "../Header/img/logo.svg";
import { RiMenu2Line } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import rasm1 from "../Header/img/menu.svg";
import { IoCartOutline } from "react-icons/io5";
import { TbMenuDeep } from "react-icons/tb";
import { VscChromeClose } from "react-icons/vsc";
import "./Navbar.scss";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <header>
        <div className="container">
          <nav className="nav_all">
            <ul className={`ul ${menu ? "show" : ""}`}>
              <li>
                <a href="" className="">
                  О компании
                </a>
              </li>
              <li>
                <a href="" className="">
                  Доставка и оплата
                </a>
              </li>
              <li>
                <a href="" className="">
                  Возврат
                </a>
              </li>
              <li>
                <a href="" className="">
                  Гарантии
                </a>
              </li>
              <li>
                <a href="" className="">
                  Контакты
                </a>
              </li>
              <li>
                <a href="" className="">
                  Блог
                </a>
              </li>
              <Link to={"catalog"}>
                <div className="btna">
                  <div className="btn1">
                    <RiMenu2Line />
                  </div>
                  <div className="btn1">
                    <p>Каталог</p>
                  </div>
                </div>
              </Link>
              <div className="ul_list_ab">
                <p>8 (800) 890-46-56</p>
              </div>
              <div className="ul_list_ab">
                <h5>Заказать звонок</h5>
              </div>
            </ul>
            <div className="ul_list">
              <div className="ul_list_a">
                <p>8 (800) 890-46-56</p>
              </div>
              <div className="ul_list_a">
                <h5>Заказать звонок</h5>
              </div>
            </div>
          </nav>
          <div className="logo">
            {menu ? (
              <VscChromeClose
                onClick={() => setMenu(!menu)}
                className="menu_list"
              />
            ) : (
              <TbMenuDeep
                onClick={() => setMenu(!menu)}
                className="menu_list"
              />
            )}

            <div className="logo_img">
              <Link to={"/"}>
                {" "}
                <img src={rasm} alt="" />
              </Link>
            </div>
            <div className="logo_link_all">
              <Link>
                <div className="wishlists">
                  <div className="wishlist_all">
                    <FaRegHeart />
                    <span className="span">1</span>
                  </div>
                  <div className="wishlist_all">
                    <p>Избранное</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="logo_link_all1">
              <Link>
                <div className="wishlists">
                  <div className="wishlist_all">
                    <img src={rasm1} alt="" />
                  </div>
                  <div className="wishlist_all">
                    <p>Сравнение</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="logo_link_all">
              <Link>
                <div className="wishlists">
                  <div className="wishlist_all">
                    <IoCartOutline />
                    <span className="span">1</span>
                  </div>
                  <div className="wishlist_all">
                    <p>Корзина</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="logo_link">
              <div className="logo_link_all">
                <Link to={"catalog"}>
                  <div className="btn">
                    <div className="btn1">
                      <RiMenu2Line />
                    </div>
                    <div className="btn1">
                      <p>Каталог</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="logo_link_all">
                <div className="navbar_sorch">
                  <input type="text" placeholder="Поиск по товарам" />
                  <IoSearchOutline />
                </div>
              </div>
              <div className="logo_link_all">
                <Link>
                  <div className="wishlist">
                    <div className="wishlist_all">
                      <FaRegHeart />
                      <span className="span">1</span>
                    </div>
                    <div className="wishlist_all">
                      <p>Избранное</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="logo_link_all">
                <Link>
                  <div className="wishlist">
                    <div className="wishlist_all">
                      <img src={rasm1} alt="" />
                    </div>
                    <div className="wishlist_all">
                      <p>Сравнение</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="logo_link_all">
                <Link>
                  <div className="wishlist">
                    <div className="wishlist_all">
                      <IoCartOutline />
                      <span className="span">1</span>
                    </div>
                    <div className="wishlist_all">
                      <p>Корзина</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
