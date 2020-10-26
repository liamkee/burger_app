import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";

const burger = (props) => {
  let transformIngredients = Object.keys(props.ingred)
    .map(igKey => {
        return [...Array(props.ingred[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />;
        });
     })
    .reduce((arr, el) => {
        return arr.concat(el);
    }, []);
  console.log(transformIngredients);
  if (transformIngredients.length === 0) {
    transformIngredients = <p>Add your ingredients here.</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
