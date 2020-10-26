import React from "react";
import classes from "./BackDrop.module.css";

const backDrop = (props) => {
  return !props.hide ? <div className={classes.Backdrop} onClick={props.click}></div> : null;
};

export default backDrop;
