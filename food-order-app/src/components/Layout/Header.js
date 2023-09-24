import { Fragment } from "react";

import HeaderCartButton from "./HeaderButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import CartProvider from "../../store/CartProvider";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
