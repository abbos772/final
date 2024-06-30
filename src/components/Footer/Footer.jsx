import React from "react";
import "./Footer.scss";
import logo from "./img/logo.png";
import vica from "./img/visa.png";
import vk from "./img/vk.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="foot container">
        <div className="foot1">
          <img src={logo} alt="" />
          <h3>8 (800) 890-46-56</h3>
          <img src={vica} alt="" />
          <p>Политика конфидециальности</p>
          <p>Пользовательское соглашение</p>
          <div className="vk">
            <img src={vk} alt="" />
            <img src={vk} alt="" />
            <img src={vk} alt="" />
          </div>
        </div>
        <div className="foot2">
          <h3>Покупателям</h3>
          <p>О компании</p>
          <p>Доставка и оплата</p>
          <p>Возврат</p>
          <p>Гарантии</p>
          <p>Контакты</p>
          <p>Блог</p>
        </div>
        <div className="foot2">
          <h3>Товары</h3>
          <p>Люстры</p>
          <p>Светильники</p>
          <p>Бра</p>
          <p>Торшеры</p>
          <p>Комплектуюшие</p>
          <p>Настольные лампы</p>
        </div>
        <div className="foot2">
          <p>Споты</p>
          <p>Трековые светильники</p>
          <p>Уличные светильники</p>
          <p>Технические светильники</p>
          <p>Комплектуюшие</p>
          <p>Светодиодные ленты</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
