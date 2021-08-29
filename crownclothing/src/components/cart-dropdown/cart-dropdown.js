import React from "react";
import CustomButton from "../customButton/customButton";
import { connect } from "react-redux";
import "./cart-dropdown.scss";
import CartItem from "../cart-item/cart-item";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
