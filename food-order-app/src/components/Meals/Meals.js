import React, { Fragment } from "react";
import MealsSumary from "./MealsSumary";
import AvailableMeals from "./AvailableMeals";
const Meal = () => {
  return (
    <Fragment>
      <MealsSumary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meal;
