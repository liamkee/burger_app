import classes from "./ToolBar.module.css";
import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Menu from "../SideDrawer/Menu/Menu";

const toolbar = (props) => (
  <header className={classes.ToolBar}>
    <Menu clicked={props.open} />
    <Logo className={classes.Logo} />
    <div className={classes.desktopOnly}>
      <NavigationItems />
    </div>
  </header>
);

export default toolbar;
