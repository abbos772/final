import React from "react";
import "./About.scss";
const Dostavka = () => {
  return (
    <>
      <div className="container">
        <p
          style={{
            color: "rgb(215, 215, 215)",
            position: "relative",
            bottom: "-30px",
          }}
        >{`Главная > Контакты`}</p>
        <div className="about">
          <div className="about_text">
            <h1>
              Доставка <br /> и оплата
            </h1>
          </div>
          <div className="about_text2">
            <h3>Доставка</h3>
            <p>
              Мы осуществляем доставку со склада по Москве и Московской области
              собственной курьерской службой. Транспортными компаниями нашу
              продукцию мы доставляем по всей территории РФ, а так же по всем
              странам СНГ. Сроки доставки: 4—6 недель
            </p>
            <h3>Курьерская доставка</h3>
            <p>
              БЕСПЛАТНО доставим в приделах МКАД любой заказ от 5 000 ₽.Заказы
              свыше 30 000 ₽ имеют бесплатную доставку, включительно 15 км от
              МКАД
            </p>

            <h3>Самовывоз</h3>
            <p>
              Любой заказ можно забрать самостоятельно по адресу: г.
              Москва, Дмитровское шоссе д.100с2
            </p>
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="karta">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1535688.8301097043!2d69.24165026074219!3d41.25679469093319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suz!2s!4v1720171585590!5m2!1suz!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
            aria-label="Google Map showing contact location"
          ></iframe>
          <div className="karta2">
            <div className="karkar">
              <h3>Адрес магазина</h3>
              <p>г. Москва, Дмитровское шоссе д.100с2</p>
            </div>
            <div className="karkar">
              <h3>Почта</h3>
              <p>NORNLIGHT@mail.ru</p>
            </div>
            <div className="karkar">
              <h3>Телефон</h3>
              <p>(998)93-772-09-30</p>
            </div>
            <button>Оставить заявку</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dostavka;
