import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import "./Cart.scss";
import {
  incrementCartQuantity,
  removeFromCart,
  decrementCart,
} from "../context/Cart/CartSlice";
import "./Cart.scss"; // Ensure to include your CSS file

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.value);
  const [discount, setDiscount] = useState(0);
  const [showPayment, setShowPayment] = useState(false);
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

  let ProductCart =
    cartItems.length === 0 ? (
      <div className="empty-cart">
        {/* <img src={empty} alt="empty cart" /> */}
        <p>Your cart is empty</p>
      </div>
    ) : (
      <>
        <table>
          <thead>
            <tr>
              <th>Delete</th>
              <th>PRODUCT</th>
              <th>PRICE</th>
              <th className="th">QTY</th>
              <th className="th">UNIT PRICE</th>
            </tr>
          </thead>
          <tbody>
            {cartItems?.map((user) => (
              <tr key={user.id}>
                <td onClick={() => handleRemoveFromCart(user)}>
                  <AiOutlineDelete className="removeicon" />
                </td>
                <td>
                  <div className="tr">
                    <div className="tr_th">
                      <img className="trrimg" src={user.img} alt={user.title} />
                    </div>
                    <div className="tr_th">{user.title}</div>
                  </div>
                </td>
                <td>
                  <h1>$ {user.price * user.quantity}</h1>
                </td>
                <td>
                  <div className="btns_table">
                    <button
                      disabled={user.quantity <= 1}
                      onClick={() => dispatch(decrementCart(user))}
                    >
                      -
                    </button>
                    <span>{user.quantity}</span>
                    <button
                      onClick={() => dispatch(incrementCartQuantity(user))}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>
                  <h1>$ {user.price}</h1>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );

  return (
    <div className="cart">
      <h1>Cart</h1>
      {ProductCart}
      {cartItems.length > 0 && (
        <div className="cart-summary">
          <p>Total: $ {total.toFixed(2)}</p>
          <p>Discount: $ {discount.toFixed(2)}</p>
          <p>Discounted Total: $ {discountedTotal.toFixed(2)}</p>
          <button onClick={() => setShowPayment(true)}>
            Proceed to Payment
          </button>
        </div>
      )}

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
  );
};

export default Cart;
