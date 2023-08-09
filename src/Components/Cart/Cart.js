import React, { useContext } from "react";
import Classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../Store/Cart-Context";
import Classess from "./CartItem.module.css";

const Cart = (props) => {
  const ctxt = useContext(CartContext);

  const hasItem = ctxt.items.length > 0;

  // For adding total price
  let totalPrice = 0;
  ctxt.items.forEach((item) => {
    totalPrice += item.price;
  });

  const totalAmount = `$${totalPrice.toFixed(2)}`;

  // For combined together of the same List
  function groupItemsById(items) {
    const groupedItems = {};

    items.forEach((item) => {
      if (!groupedItems[item.id]) {
        groupedItems[item.id] = { ...item, quantity: +item.Quantity };
      } else {
        groupedItems[item.id].quantity += +item.Quantity;
      }
    });
    return Object.values(groupedItems);
  }

  // For AAdding and Removing Cart Items on CLick button(-,+).
  const CartItemRemoveHandler=()=>{};
  const CartItemAddHandler=()=>{};

  const cartItems = (
    <ul className={Classes["cart-items"]}>
      {groupItemsById(ctxt.items).map((groupedItems) => (
        <li className={Classess["cart-item"]} key={groupedItems.id}>
          <div>
            <h2>{groupedItems.name}</h2>
            <div className={Classess.summary}>
              <span className={Classess.price}>{groupedItems.price}</span>
              <span className={Classess.amount}>x {groupedItems.quantity}</span>
            </div>
          </div>
          <div className={Classess.actions}>
            <button onClick={CartItemRemoveHandler}>−</button>
            <button onClick={CartItemAddHandler}>+</button>
          </div>
        </li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={Classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={Classes.actions}>
        <button className={Classes["button--alt"]} onClick={props.onclose}>
          Close
        </button>
        {hasItem && <button className={Classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
