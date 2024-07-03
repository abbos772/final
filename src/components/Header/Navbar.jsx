import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import logo from "./img/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";
import { TbAntennaBars5 } from "react-icons/tb";
import { useSelector } from "react-redux";
const Header = () => {
  let [burger, setBurger] = useState(false);
  const carts = useSelector((s) => s.cart.value);
  const Wishes = useSelector((s) => s.heart.value);
  return (
    <>
      <header>
        <div className="container">
          <div className="navbar">
            <div className="nav__top">
              <div className="top__list">
                <ul className={burger ? "show" : ""}>
                  <div className="links">
                    <Link onClick={() => setBurger((p) => !p)} to="/">
                      О компании
                    </Link>
                    <Link onClick={() => setBurger((p) => !p)} to="/about">
                      Доставка и оплата
                    </Link>
                    <Link onClick={() => setBurger((p) => !p)} to="/">
                      Возврат
                    </Link>
                    <Link onClick={() => setBurger((p) => !p)} to="/">
                      Гарантии
                    </Link>
                    <Link onClick={() => setBurger((p) => !p)} to="/contact">
                      Контакты
                    </Link>
                    <Link onClick={() => setBurger((p) => !p)} to="/">
                      Блог
                    </Link>
                  </div>
                  <div className="media-btn">
                    <button>
                      <RxHamburgerMenu />
                      Каталог
                    </button>
                  </div>
                  <div className="top__tel">
                    <p>8 (800) 890-46-56</p>
                    <Link onClick={() => setBurger((p) => !p)}>
                      Заказать звонок
                    </Link>
                  </div>
                </ul>
              </div>
            </div>
            <div className="nav__bottom">
              <div className="nav__logo">
                <div>
                  <button
                    onClick={() => setBurger((p) => !p)}
                    className="burger"
                  >
                    <RxHamburgerMenu />
                  </button>
                </div>
                <Link to="/">
                  <img src={logo} alt="Logo" />
                </Link>
              </div>
              <div className="nav__inp">
                <button>
                  <RxHamburgerMenu />
                  Каталог
                </button>
                <div className="inp">
                  <input type="text" placeholder="Поиск по товарам" />
                  <CiSearch />
                </div>
              </div>
              <div className="nav__icons">
                <span>
                  <Link to="/wishes">
                    <CiHeart /> <sub className="sub">{Wishes.length}</sub>
                    <p>Избранное</p>
                  </Link>
                </span>
                <span>
                  <Link to="/">
                    <TbAntennaBars5 />
                    <p>Сравнение</p>
                  </Link>
                </span>
                <span>
                  <Link to="/cart">
                    <CiShoppingCart /> <sub className="sub">{carts.length}</sub>
                    <p>Корзина</p>
                  </Link>
                </span>
              </div>
            </div>
            <div className="media__inp">
              <input type="text" placeholder="Поиск по товарам" />
              <CiSearch />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
