import React from "react";
import classes from "./Menu.module.css";

const menu = (props) => {
  return (
    <div className={classes.Menu} onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default menu;
