import React, { useContext,useState,useEffect } from "react";
import Icon from "../Cart/cartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../Store/Cart-Context";

const HeaderCartButton = (props) => {

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  // use context API
  const CartCtx = useContext(CartContext);

  let totalQunatity=0;
  CartCtx.items.forEach((quant)=>{
    totalQunatity+=(+quant.Quantity); 
  })
  const {items}=CartCtx
  // Adding Animation in cart button
  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    // CleanUp function
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

 
  return (
    <button className={btnClasses} onClick={props.onclk}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span>Add to Cart</span>
      <span className={classes.badge}>{totalQunatity}</span>
    </button>
  );
};

export default HeaderCartButton;
