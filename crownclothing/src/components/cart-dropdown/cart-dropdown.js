import React from "react";
import CustomButton from "../customButton/customButton";
import "./cart-dropdown.scss";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items">
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  </div>
);

export default CartDropdown;
