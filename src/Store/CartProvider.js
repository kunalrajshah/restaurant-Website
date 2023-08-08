import React from "react";
import CartContext from "./Cart-Context";

const CartProvider = (props) => {
  const addItemToCart = (item) => {};

  const removeItemFromCart = (id) => {};
  const obj = {
    items: [],
    totalAmount: 0,
    addItem: { addItemToCart },
    removeItem: { removeItemFromCart },
  };
  return (
    <CartContext.Provider value={obj}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;
