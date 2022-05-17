import React from "react";
import "./styles.css";
import CartIcon from "../assets/cart.svg";

export default function Header(props) {
  const { items = 0, totalCost = 0 } = props;

  return (
    <div className="dash-header center-content">
      <div className="cart-container center-content">
        <img src={CartIcon} className="cart-icon" />
        <p className="cart-item-label">{items}</p>
      </div>
      <p className="cart-cost-label">{totalCost}</p>
    </div>
  );
}
