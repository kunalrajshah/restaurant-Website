import React,{useContext} from 'react';
import Icon from '../Cart/cartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../Store/Cart-Context';

const HeaderCartButton = (props) => { 
  const CartCtx=useContext(CartContext);
  const numberOfCartItems=CartCtx.items.reduce((curNumber,item)=>{
    return curNumber + item.amount;
  },0)
  return (
    <button className={classes.button} onClick={props.onclk} >
      <span className={classes.icon}><Icon /></span>
      <span>Add to Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;