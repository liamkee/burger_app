import classes from "./SideDrawer.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import React from "react";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import BackDrop from "../../UI/BackDrop/BackDrop";

const sideDrawer = (props) => {
  let attachedClass = [classes.SideDrawer, classes.Close];
  if (!props.hide) {
    attachedClass = [classes.SideDrawer, classes.Open];
  }
  return (
    <Aux>
      <BackDrop hide={props.hide} click={props.closed} />
      <div className={attachedClass.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
