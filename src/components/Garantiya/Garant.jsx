import React from "react";
import "../About/About.scss";
const Garant = () => {
  return (
    <div className="container">
      <p
        style={{
          color: "rgb(215, 215, 215)",
          position: "relative",
          bottom: "-30px",
        }}
      >{`Главная > Гарантия`}</p>
      <div className="about">
        <div className="about_text">
          <h1>Гарантии</h1>
        </div>
        <div className="about_text2">
          <h3>Обмен и возврат по желанию покупателя</h3>
          <p>
            Все товары в магазине «NornLight» имеют гарантию. Она заявляется
            производителем и имеет определенный срок действия на различные
            группы товаров. Если ваше изделие вышло из строя в
            течение гарантийного срока вы можете обратиться к нам и получить
            бесплатный ремонт. Для этого нужно: Предоставить чек, накладную или
            сообщить почту или номер телефона, указанные при оформлении заказа.
            Привезти товар к нам на склад или отправить его транспортной
            компанией. После товар отправляется на экспертизу и ремонт. Если
            ремонт невозможен, мы обменяем изделие на аналогичное либо вернем
            деньги за покупку. Обращаем внимание, что «А-Свет» не является
            сервисным центром, а выполняет роль посредника между клиентом и
            поставщиком. Поэтому сроки проведения ремонта могут отличаться для
            товаров различных брендов.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Garant;
