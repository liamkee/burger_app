import React, { Component } from "react";
import Aux from "../Auxiliary/Auxiliary";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/ToolBar/ToolBar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    show: false,
  };
  showSideDrawer = () => {
    this.setState({ show: true });
  };
  hideSideDrawer = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <Aux>
        <Toolbar open={this.showSideDrawer} />
        <SideDrawer hide={!this.state.show} closed={this.hideSideDrawer} />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
