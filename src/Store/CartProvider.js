import React, { useState } from "react";
import CartContext from "./Cart-Context";

const CartProvider = (props) => {

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

  const [items, setItems] = useState([]);

  const addItemToCart = (it) => {
    setItems((prevItems) => [...prevItems, it]);
  };

  // Increment item on click '+'
  const IncrementItem=(id)=>{
    const updatedCart = groupItemsById(items).map((item) =>
      item.id === id ? { ...item, Quantity: item.Quantity + 1 } : item
    );
    setItems(updatedCart);
  }

  const removeItemFromCart = (id,event) => {
    const updatedCart = groupItemsById(items).map((item) =>
      item.id === id ? { ...item, Quantity: item.Quantity - 1 } : item
    );
    setItems(updatedCart.filter((item) => item.Quantity > 0));
  };

  // clear cart onclick order
  const clearCart=()=>{
    setItems([]);
  }
  const obj = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCart,
    addItemOnIncrement:IncrementItem,
    removeItem: removeItemFromCart,
    order:clearCart
  };
  return (
    <CartContext.Provider value={obj}>
      {/* {console.log('inside cartContext provider',obj)} */}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
