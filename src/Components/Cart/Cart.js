import React from "react";
import Classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = () => (
    <ul className={Classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: "2", price: "12.69" }].map(
        (item) => (
          <li>{item.name}</li>
        )
      )}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={Classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={Classes.actions}>
        <button className={Classes["button--alt"]}>Close</button>
        <button className={Classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
