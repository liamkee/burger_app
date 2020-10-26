import React from "react";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  const list = Object.keys(props.ingredients).map((igKeys) => {
    return (
      <li key={igKeys}>
        <span style={{ textTransform: "capitalize" }}>{igKeys}</span>:
        {props.ingredients[igKeys]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>The delicious burger with the following ingredients</p>
      <ul>{list}</ul>
      <h3>Total price: {props.price}</h3>
      <Button click={props.cancel} btnType="Danger">
        CANCEL
      </Button>
      <Button click={props.confirm} btnType="Success">
        CONFIRM
      </Button>
    </Aux>
  );
};

export default orderSummary;
