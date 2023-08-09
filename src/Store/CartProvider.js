import React, { useState } from "react";
import CartContext from "./Cart-Context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const addItemToCart = (item) => {
    setItems([...items, item]);
  };
  const removeItemFromCart = (id) => {};
  const obj = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };
  return (
    <CartContext.Provider value={obj}>
      {/* {console.log('inside cartContext provider',obj)} */}
      {props.children}
      </CartContext.Provider>
  );
};

export default CartProvider;
