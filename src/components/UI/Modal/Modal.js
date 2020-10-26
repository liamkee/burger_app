import React, { Component } from "react";
import classes from "./Modal.module.css";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import BackDrop from "../BackDrop/BackDrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.hide !== this.props.hide;
  }
  componentDidUpdate() {
    console.log("[Modal] willUpdate");
  }
  render() {
    return (
      <Aux>
        <BackDrop hide={this.props.hide} click={this.props.cancel} />
        <div
          className={classes.Modal}
          style={{
            transform: !this.props.hide
              ? "translateY(0)"
              : "translateY(-100vh)",
            opacity: !this.props.hide ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
