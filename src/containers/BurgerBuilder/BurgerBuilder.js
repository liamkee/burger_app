import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGRED_PRICE = {
  salad: 0.5,
  bacon: 1.2,
  cheese: 1,
  meat: 2,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 3,
    purchasable: false,
    purchasing: false,
  };

  updatePurchaseState = (ingred) => {
    const sum = Object.keys(ingred)
      .map((igKey) => {
        return ingred[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const updateIngred = { ...this.state.ingredients };
    updateIngred[type] = newCount;
    const priceAddition = INGRED_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updateIngred });
    this.updatePurchaseState(updateIngred);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount - 1;
    const updateIngred = { ...this.state.ingredients };
    updateIngred[type] = newCount;
    const priceDeduction = INGRED_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updateIngred });
    this.updatePurchaseState(updateIngred);
  };

  updatePurchasing = () => {
    this.setState({ purchasing: true });
  };

  cancelPurchasing = () => {
    this.setState({ purchasing: false });
  };

  confirmOrder = () => {
    alert("You have continued!");
  };
  componentDidUpdate() {
    console.log(this.state.totalPrice);
  }
  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let k in disabledInfo) disabledInfo[k] = disabledInfo[k] <= 0;
    return (
      <Aux>
        <Modal hide={!this.state.purchasing} cancel={this.cancelPurchasing}>
          <OrderSummary
            ingredients={this.state.ingredients}
            cancel={this.cancelPurchasing}
            confirm={this.confirmOrder}
            price={this.state.totalPrice.toFixed(2)}
          />
        </Modal>
        <Burger ingred={this.state.ingredients} />
        <BuildControls
          add={this.addIngredientHandler}
          rem={this.removeIngredientHandler}
          disabledInfo={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          order={this.updatePurchasing}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
