import React, { Fragment } from "react";
import "./Header.module.css";
import mealsImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";


const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals Available</h1>
        <HeaderCartButton  onclk={props.onclk}  />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt="A table full of dish" />
      </div>
    </Fragment>
  );
};

export default Header;
