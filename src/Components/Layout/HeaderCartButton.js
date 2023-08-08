import React from 'react';
import Icon from '../Cart/cartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}><Icon /></span>
      <span>Add to Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  )
}

export default HeaderCartButton;