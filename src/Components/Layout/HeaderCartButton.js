import React, { useContext } from "react";
import Icon from "../Cart/cartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../Store/Cart-Context";

const HeaderCartButton = (props) => {
  // use context API
  const CartCtx = useContext(CartContext);

  let totalQunatity=0;
  CartCtx.items.forEach((quant)=>{
    totalQunatity+=(+quant.Quantity); 
  })
 
  return (
    <button className={classes.button} onClick={props.onclk}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span>Add to Cart</span>
      <span className={classes.badge}>{totalQunatity}</span>
    </button>
  );
};

export default HeaderCartButton;
