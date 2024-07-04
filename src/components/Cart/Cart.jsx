import React, { useState, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import empty from "./empty.png";
import "./Cart.scss";
import {
  incrementCartQuantity,
  removeFromCart,
  decrementCart,
} from "../context/Cart/CartSlice";

const botToken = "6714877771:AAHjhYSI1QCXr74V76owsIhEJN-FA_pjvhE";
const chatId = "1976708153";

const initialState = {
  fname: "",
  phone: "",
  other: "",
};

const Cart = () => {
  const [data, setData] = useState(initialState);
  const [messageStatus, setMessageStatus] = useState(null);
  const notify = (message) => toast(message);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { fname, phone, other } = data;

    if (!fname || !phone) {
      notify("Please fill out first name and phone.");
      return;
    }

    const text = `First Name: ${fname}\nPhone: ${phone}\nEmail: ${other}`;
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
      text
    )}`;

    console.log("Sending message to Telegram:", url);

    fetch(url)
      .then((response) => {
        if (response.ok) {
          setMessageStatus("success");
          notify("Message sent successfully!");
          setData(initialState);
        } else {
          setMessageStatus("error");
          notify("Failed to send message. Please try again later.");
        }
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        setMessageStatus("error");
        notify("Failed to send message. Please try again later.");
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.value);
  const [discount, setDiscount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const total = cartItems?.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discountedTotal = total - discount;

  const handleRemoveFromCart = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const confirmRemoveFromCart = () => {
    if (selectedItem) {
      dispatch(removeFromCart(selectedItem.id));
      setShowModal(false);
    }
  };

  const cancelRemoveFromCart = () => {
    setSelectedItem(null);
    setShowModal(false);
  };

  const handleIncrement = (item) => {
    dispatch(incrementCartQuantity(item.id));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(decrementCart(item.id));
    }
  };

  let ProductCart =
    cartItems.length === 0 ? (
      <div className="empty-cart">
        <img src={empty} alt="empty cart" />
        <p>Your cart is empty</p>
      </div>
    ) : (
      <>
        {cartItems?.map((user) => (
          <div className="user_flex" key={user.id}>
            <div className="users">
              <div className="user_img">
                <img src={user.img} width={60} alt={user.title} />
              </div>
              <div className="title_and_price">
                <h3>{user.title}</h3>
                <h2>{user.price * user.quantity}₽</h2>{" "}
              </div>
              <div className="decs">
                <p>{user.desc}</p>
              </div>
              <div className="code">
                <p>RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS</p>
              </div>
              <div className="count">
                <button onClick={() => handleIncrement(user)}>+</button>
                <span>{user.quantity}</span>
                <button onClick={() => handleDecrement(user)}>-</button>
              </div>
              <div className="delete">
                <AiOutlineDelete
                  className="del"
                  onClick={() => handleRemoveFromCart(user)}
                />
              </div>
            </div>
          </div>
        ))}
      </>
    );

  return (
    <>
      <div className="cart container">
        <div className="kor">
          <h1>Корзина</h1>
        </div>
        <div className="cart_box">
          <div className="cart_top">
            <div className="top_text_1">
              <p>Фото</p>
              <p>Товары</p>
            </div>
            <div className="top_text_2">
              <p>Описание</p>
              <p>Артикул</p>
              <p className="pp">Количество</p>
            </div>
          </div>
          <div>{ProductCart}</div>
        </div>

        {showModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h2>Are you sure?</h2>
              <p>Do you want to remove {selectedItem?.title} from the cart?</p>
              <div className="modal-buttons">
                <button onClick={cancelRemoveFromCart}>No</button>
                <button onClick={confirmRemoveFromCart}>Yes</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="oformit container">
        <div className="oformit_box">
          <h1>Оформление</h1>
          <div className="inputs_flex">
            <form onSubmit={handleSubmit} action="">
              <div className="search">
                <input
                  value={data.fname}
                  onChange={handleChange}
                  type="text"
                  name="fname"
                  placeholder="ФИО"
                />
              </div>
              <div className="search">
                <input
                  value={data.phone}
                  onChange={handleChange}
                  type="number"
                  name="phone"
                  placeholder="телефон"
                />
              </div>
              <div className="search">
                <input
                  value={data.fname}
                  onChange={handleChange}
                  type="text"
                  name="fname"
                  placeholder="Электронная почта"
                />
              </div>
            </form>
          </div>
          <div className="Dostavka">
            <h1>Доставка</h1>
            <div className="inputs_flex2">
              <form onSubmit={handleSubmit} action="">
                <div className="search2">
                  <input
                    value={data.fname}
                    onChange={handleChange}
                    type="text"
                    placeholder="Адрес доставки"
                    name="fname"
                  />
                </div>
                <textarea name="" id="" placeholder="Комментарий"></textarea>
                <button>dsa</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="oplataa container">
          <h1>Оплата</h1>
          <div className="total">
            <p>
              Товары.............................................
              <span>{total}₽</span>
            </p>
            <p>
              Доставка.............................................. Бесплатно
            </p>
          </div>
          <div className="checks">
            <div className="ch">
              <input type="radio" />
              <p>Картой онлайн</p>
            </div>
            <div className="ch">
              <input type="radio" />
              <p>Наличными при получении</p>
            </div>
          </div>
          <div className="big_total">
            <h1>
              Итого: <span>{discountedTotal}₽</span>
            </h1>
            <div className="total_btn">
              <button>Купить</button>
              <div className="check">
                <input type="radio" name="" id="" />
                <p>Я согласен наобработку моих персональных данных</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default memo(Cart);
