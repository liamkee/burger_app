import classes from "./BuildControl.module.css";
import React from "react";

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button
      className={classes.Less}
      onClick={props.rem}
      disabled={props.disableInfo}
    >
      Less
    </button>
    <button className={classes.More} onClick={props.add}>
      More
    </button>
  </div>
);

export default buildControl;
