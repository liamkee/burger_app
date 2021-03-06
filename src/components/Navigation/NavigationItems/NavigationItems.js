import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>
      Builder
    </NavigationItem>
    <NavigationItem link="/">CheckOut</NavigationItem>
  </ul>
);
export default navigationItems;
