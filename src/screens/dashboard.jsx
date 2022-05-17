import React, { useState } from "react";
import "./styles.css";
import { DashContainer, Header } from "../components";

export default function Dashboard() {
  const [cart, setCart] = useState([]);

  function addItemsToCart(item) {
    setCart([...cart, item]);
  }

  function removeItem(item) {
    let temp = [...cart];
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].id === item.id) {
        temp.splice(i);
        break;
      }
    }
    setCart(temp);
  }

  return (
    <div className="dashboard-main-container">
      <Header items={cart.length} totalCost={cart.reduce((a, b) => a + b.price, 0)} />
      <DashContainer addItem={addItemsToCart} removeItem={removeItem} />
    </div>
  );
}
