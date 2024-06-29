import React, { useState } from "react";
import "./Navbar.scss";
import logo from "./img/logo.png";
import menu from "./img/menu.png";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuSearch } from "react-icons/lu";
import { CiMenuBurger } from "react-icons/ci";
import { TbAntennaBars5 } from "react-icons/tb";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="navbar_top container">
        <div className={`navbar_text ${toggle ? "show" : ""}`}>
          <div className="nav_top">
            <a href="">О компании</a>
            <div className="aa">
              <a href="">Доставка и оплата</a>
            </div>
            <div className="aa">
              <a href="">Возврат</a>
            </div>
            <div className="aa">
              <a href="">Гарантии</a>
            </div>
            <div className="aa">
              <a href="">Контакты</a>
            </div>
            <div className="aa">
              <a href="">Блог</a>
            </div>
          </div>
          <div className="nav_top">
            <p>8 (800) 890-46-56</p>
            <h4>Заказать звонок</h4>
          </div>
        </div>
        <div className="container">
          <div className="flex_nav">
            <button className="menu" onClick={handleToggle}>
              <CiMenuBurger />
            </button>
            <div className="logo">
              <img src={logo} alt="" />
              <h3>NORNLIGHT</h3>
            </div>
            <div className="seach_flex">
              <button className="katalog">
                <img src={menu} alt="" /> Каталог
              </button>
              <div className="search">
                <input type="text" placeholder="Поиск по товарам" />
                <LuSearch />
              </div>
            </div>
            <div className="icons">
              <div className="icon">
                <IoMdHeartEmpty />
                <p>Избранное</p>
              </div>
              <div className="iconi">
                <TbAntennaBars5 />
                <p>Сравнение</p>
              </div>
              <div className="icon">
                <IoCartOutline />
                <p>Корзина</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
