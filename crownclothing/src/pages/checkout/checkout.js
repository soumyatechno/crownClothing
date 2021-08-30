import React from "react";
import "./checkout.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartTotal, selectCartItems } from "../../redux/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item";
const Checkout = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>

      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">TOTAL: ${total}</div>
  </div>
);

const mapStateTorops = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateTorops)(Checkout);
