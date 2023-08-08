import React from 'react';
import Icon from '../Cart/cartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => { 
  return (
    <button className={classes.button} onClick={props.onclk} >
      <span className={classes.icon}><Icon /></span>
      <span>Add to Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  )
}

export default HeaderCartButton;