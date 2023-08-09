import React, { useContext, useState } from "react";
import Classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../Store/Cart-Context";
import Classess from "./CartItem.module.css";

const Cart = (props) => {
  const ctxt = useContext(CartContext);

  const hasItem = ctxt.items.length > 0;

  // For combined together of the same List
  function groupItemsById(items) {
    const groupedItems = {};

    items.forEach((item) => {
      if (!groupedItems[item.id]) {
        groupedItems[item.id] = { ...item, Quantity: +item.Quantity };
      } else {
        groupedItems[item.id].Quantity += +item.Quantity;
      }
    });
    // The Object.values() static method returns an array of a given object.
    return Object.values(groupedItems);
  }

  // For AAdding and Removing Cart Items on CLick button(-,+).
  const [cartItem, setCartItem] = useState(groupItemsById(ctxt.items));
  const CartItemRemoveHandler = (ItemId) => {
    // Find the item with the matching ID in the cart
    const updatedCart = cartItem.map((item) =>
      item.id === ItemId ? { ...item, Quantity: item.Quantity - 1 } : item
    );
    setCartItem(updatedCart.filter((item)=>item.Quantity >0));
  };

  const CartItemAddHandler = (ItemId) => {
    // Find the item with the matching ID in the cart
    const updatedCart = cartItem.map((item) =>
      item.id === ItemId ? { ...item, Quantity: item.Quantity + 1 } : item
    );
    setCartItem(updatedCart);
  };

  // For adding total price
  let newAmount = 0;
  groupItemsById(ctxt.items).forEach((item) => {
    newAmount = newAmount + item.price * item.Quantity;
  });
  const totalAmount = `$${newAmount.toFixed(2)}`;

  const cartItems = (
    <ul className={Classes["cart-items"]}>
      {cartItem.map((groupedItems) => (
        <li className={Classess["cart-item"]} key={groupedItems.id}>
          <div>
            <h2>{groupedItems.name}</h2>
            <div className={Classess.summary}>
              <span className={Classess.price}>{groupedItems.price}</span>
              <span className={Classess.amount}>x {groupedItems.Quantity}</span>
            </div>
          </div>
          <div className={Classess.actions}>
            <button onClick={() => CartItemRemoveHandler(groupedItems.id)}>
              -
            </button>
            <button onClick={() => CartItemAddHandler(groupedItems.id)}>
              +
            </button>
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
