import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.scss";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/action/cart.action";
import { selsectCartItemsCount } from "../../redux/cart.selector";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
const mapStateToProps = createStructuredSelector({
  itemCount: selsectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
